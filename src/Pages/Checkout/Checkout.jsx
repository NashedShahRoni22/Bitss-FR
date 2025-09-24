import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import OrderInfo from "../../components/Checkout/OrderInfo";
import OrderSummary from "../../components/Checkout/OrderSummary";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { postApi } from "../../api/api";

const convertCartItems = (cartItems) => {
  const startDate = new Date(); // Current date as start date

  return cartItems.map((item) => {
    // Get the first subscription (selected duration)
    const selectedSubscription = item.subscriptions[0];
    const duration = parseInt(selectedSubscription.duration);

    // Calculate end date based on duration
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + duration);

    // Calculate final price after discount
    let finalPrice = item.price * duration; // Base price for the duration

    if (selectedSubscription.discount_type === "percent") {
      // Apply percentage discount
      const discountAmount = (finalPrice * selectedSubscription.amount) / 100;
      finalPrice = finalPrice - discountAmount;
    } else if (selectedSubscription.discount_type === "flat") {
      // Apply flat discount
      finalPrice = finalPrice - selectedSubscription.amount;
    }

    return {
      product: item.id,
      period: selectedSubscription.duration,
      price: finalPrice,
    };
  });
};

function generateOrderId() {
  const timestamp = Date.now().toString();
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return `ORD-${timestamp}-${random}`;
}

const CheckoutPage = () => {
  const { authInfo } = useAuth();
  const { cartItems } = useCart();

  const [currency, setCurrency] = useState("EUR");
  const [paymentType, setPaymentType] = useState("stripe");
  const [domain, setDomain] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [currencies, setCurrencies] = useState(null);

  // fetch currency name and value data
  useEffect(() => {
    const fetchCurrencies = async () => {
      const res = await fetch("https://api.exchangerate-api.com/v4/latest/EUR");
      const data = await res.json();
      setCurrencies(data?.rates);
    };

    fetchCurrencies();
  }, []);

  // handle checkout form submit
  const handleSubmit = async () => {
    if (!agreeTerms) {
      return toast.error("Please agree to the terms and conditions");
    }
    if (!domain) {
      return toast.error("Please enter your domain name");
    }

    const token = authInfo?.access_token;

    const products = convertCartItems(cartItems);
    const order_number = generateOrderId();

    const payload = {
      order_number,
      country: authInfo?.user?.country,
      currency_name: currency,
      currency_rate: currencies[currency],
      currency,
      rate: currencies[currency],
      payment_type: paymentType === "stripe" ? "online" : "bank",
      terms_and_conditions: agreeTerms,
      status: "due",
      domain,
      products,
      ...(paymentType === "stripe" && { payment_method: "stripe" }),
    };

    // Call the API
    const response = await postApi({
      endpoint: "/orders/order/confirm",
      payload,
      token,
    });

    if (paymentType === "stripe" && response?.success) {
      return (window.location.href = response?.data?.payment_url);
    }

    if (response?.success) {
      toast.success("Order created successfully!");
    } else {
      toast.error("Failed to create order");
    }
  };

  return (
    <div className="mx-auto px-4 py-8 md:container sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
        <p className="mt-2 text-gray-600">Complete your purchase securely</p>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column - Order Information */}
        <OrderInfo
          {...{
            domain,
            setDomain,
            currency,
            setCurrency,
            paymentType,
            setPaymentType,
            agreeTerms,
            setAgreeTerms,
            currencies,
          }}
        />
        {/* Right Column - Order Summary */}
        <OrderSummary
          {...{
            handleSubmit,
            agreeTerms,
            domain,
            currency,
            currencies,
          }}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;

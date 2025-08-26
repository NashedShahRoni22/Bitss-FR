import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import { calculateValidTill } from "../../utils/calculateValidTill";
import { postPayment } from "../../api/postPayment";
import { generateInvoiceId } from "../../utils/generateInvoiceId";

export default function Payment() {
  const localProductInfo = JSON.parse(localStorage.getItem("productInfo"));
  const isVwarWindows =
    localProductInfo.packageType === "vwar" &&
    localProductInfo.version === "windows_protection";

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [paymentData, setPaymentData] = useState("");
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      customerName: "",
      businessName: "",
      contactEmail: "",
      country: "",
      mobile: "",
      phone: "",
      fax: "",
      secondaryPhone: "",
      address: "",
      serviceName: "",
      currency: "",
      basePrice: "",
      duration: "",
      payableAmount: "",
      originalAmount: "",
      bobosohoEmail: "",
      password: "",
      domain: "",
      paymentMethod: "bank",
    },
    mode: "onChange",
  });

  // Watch input fileds
  const watchStep1 = watch([
    "customerName",
    "contactEmail",
    "country",
    "mobile",
    "address",
  ]);

  const isStep1Valid =
    watchStep1.every(Boolean) &&
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(watchStep1[1]);
  const watchStep2 = watch([
    "bobosohoEmail",
    "password",
    "duration",
    ...(isVwarWindows ? [] : ["domain"]),
  ]);
  const watchStep3 = watch(["paymentMethod"]);
  const selectedCurrency = watch("currency");

  // Handle payment form submit
  const onSubmit = async (data) => {
    setLoading(true);
    const {
      customerName,
      contactEmail,
      address,
      country,
      serviceName,
      paymentMethod,
      payableAmount,
      password,
      currency,
      duration,
      domain,
      bobosohoEmail,
    } = data;

    const isStripe = paymentMethod === "stripe";
    const validTill = calculateValidTill(duration);
    const status = isStripe ? "paid" : "unpaid";
    const paymentInfo = {
      address,
      user_name: bobosohoEmail,
      email: contactEmail,
      name: customerName,
      country,
      software: serviceName,
      price: payableAmount,
      password,
      currencey: currency,
      valid_till: validTill,
      domain,
      package_type: localProductInfo.packageType,
      item_type: localProductInfo.version.toLowerCase(),
      status,
      payment_type: isStripe ? "stripe" : "bank",
      duration,
      order_id: generateInvoiceId(),
    };

    if (isStripe) {
      // stripe payment method
      const stripePaymentInfo = {
        ...paymentInfo,
        version: localProductInfo.version.toLowerCase(),
        isVerified: false,
        isDeleted: false,
        order_id: generateInvoiceId(),
      };

      try {
        // Convert price to cents (integer) for Stripe
        const priceInCents = Math.round(Number(payableAmount) * 100);

        const serverData = await postPayment(
          `${import.meta.env.VITE_Base_Url}/online/payments/stripe`,
          {
            productName: serviceName,
            duration,
            price: priceInCents,
            currency,
          },
        );

        if (serverData?.url) {
          localStorage.setItem(
            "stripeSuccessInfo",
            JSON.stringify(stripePaymentInfo),
          );
          localStorage.setItem(
            "productInfo",
            JSON.stringify(stripePaymentInfo),
          );
          window.location.href = serverData.url;
        }
      } catch (error) {
        console.error("Stripe Payment Error:", error);
      }
    } else {
      // bank payment method
      try {
        const serverData = await postPayment(
          `${import.meta.env.VITE_Base_Url}/payments/bitss/payment/create`,
          paymentInfo,
        );

        // invoice data saved in localstorage
        const invoiceData = {
          ...serverData.data,
          ...localProductInfo,
          ...paymentInfo,
          email: serverData?.data?.email,
        };

        if (serverData.success === true) {
          setLoading(false);
          window.alert(serverData.message);
          localStorage.setItem("productInfo", JSON.stringify(invoiceData));
          navigate("/invoice");
        }
      } catch (error) {
        console.error("Bank Payment Error:", error);
        setLoading(false);
        window.alert(error.message);
      }
    }
  };

  // Get payment data from local storage
  useEffect(() => {
    const getPaymentData = JSON.parse(localStorage.getItem("productInfo"));
    setPaymentData(getPaymentData);
  }, []);

  return (
    <main className="mx-5 min-h-screen py-10 md:container md:mx-auto md:py-20">
      <h1 className="text-center text-4xl font-semibold">
        Payment for {paymentData?.name}
      </h1>
      <p className="mb-1.5 mt-5 text-center text-sm">
        Synchronize with your database, please contact with us if you need to
        edit, The editing of information and database must be done by the
        Softdrive Team to avoid technical security issues.
      </p>
      <p className="text-center text-sm font-semibold">
        <span className="font-bold">Note:</span> Account is opened immediately
        after payement. Username and password will be forwarded to email
        instantly.
      </p>

      {/* steps highlighted */}
      <div className="mx-auto my-16 flex w-full max-w-3xl items-center justify-between gap-3">
        <p className="flex size-12 items-center justify-center rounded-full border border-primary bg-primary text-3xl font-semibold text-white">
          1
        </p>
        <div className="flex flex-1 items-center gap-3">
          <div
            className={`h-0.5 w-full ${step >= 2 ? "bg-primary" : "bg-[#D7E0FE]"}`}
          ></div>
          <p
            className={`flex min-h-12 min-w-12 items-center justify-center rounded-full border text-3xl font-semibold ${step >= 2 ? "border-primary bg-primary text-white" : "border-[#AFC2FE] text-neutral-400"}`}
          >
            2
          </p>
          <div
            className={`h-0.5 w-full ${step >= 3 ? "bg-primary" : "bg-[#D7E0FE]"}`}
          ></div>
        </div>

        <p
          className={`flex min-h-12 min-w-12 items-center justify-center rounded-full border text-3xl font-semibold ${step >= 3 ? "border-primary bg-primary text-white" : "border-[#AFC2FE] text-neutral-400"}`}
        >
          3
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-16 w-full max-w-6xl"
      >
        {/* Step 1 */}
        {step === 1 && (
          <Step1
            register={register}
            isStep1Valid={isStep1Valid}
            setStep={setStep}
          />
        )}

        {/* Step 2 */}
        {step === 2 && (
          <Step2
            register={register}
            watchStep2={watchStep2}
            setValue={setValue}
            selectedCurrency={selectedCurrency}
            errors={errors}
            setStep={setStep}
            getValues={getValues}
            isVwarWindows={isVwarWindows}
          />
        )}

        {/* Step 3 */}
        {step === 3 && (
          <Step3
            register={register}
            watchStep3={watchStep3}
            setStep={setStep}
            getValues={getValues}
            loading={loading}
          />
        )}
      </form>
    </main>
  );
}

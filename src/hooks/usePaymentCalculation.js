import { useCallback, useEffect, useState } from "react";

export default function usePaymentCalculation(setValue) {
  const [paymentData, setPaymentData] = useState([]); // payement data getting from local storage
  const [exchangeRates, setExchangeRates] = useState([]); // array of exchange rates getting from api
  const [selectedCurrency, setSelectedCurrency] = useState("EUR"); // currently selected currency
  const [currencyRate, setCurrencyRate] = useState(1); // currency rate based on currently selected currency
  const [duration, setDuration] = useState(3); // subscription duration in month
  const [discount, setDiscount] = useState(15); // subscription discount amount in percentage
  const [originalAmount, setOriginalAmount] = useState(0); // original amount to pay without discount based on subscription duration
  const [payableAmount, setPayableAmount] = useState(0); // amount to be payed after discount with based on subscription duration

  // Function to update currency rate based on selected currency
  const updateCurrencyRate = useCallback(() => {
    const findCurrencyRate = exchangeRates.find(
      (curr) => curr[0] === selectedCurrency,
    );
    if (findCurrencyRate) {
      setCurrencyRate(findCurrencyRate[1]);
    }
  }, [selectedCurrency, exchangeRates]);

  // Function to calculate original amount and payable amount based on currently selected duration and month
  const calculateAmount = useCallback(() => {
    const monthlyPrice = (paymentData.price * currencyRate) / 12;
    const totalPrice = monthlyPrice * duration;
    const discountAmount = duration > 1 ? totalPrice * (discount / 100) : 0;
    const finalAmount = totalPrice - discountAmount; // Amount after discount

    setOriginalAmount(totalPrice.toFixed(2));
    setPayableAmount(finalAmount.toFixed(2));
  }, [paymentData.price, currencyRate, duration, discount]);

  // Handle currency change like BDT, USD etc.
  const handleCurrencyChange = (e) => {
    const { value } = e.target;
    setSelectedCurrency(value);
    updateCurrencyRate();
  };

  // Handle subsrciption duration change along with discount
  const handleDurationChange = (e) => {
    const { value } = e.target;
    setDuration(value);

    if (value === "3") {
      setDiscount(15);
    } else if (value === "1") {
      setDiscount(0);
    } else if (value === "6") {
      setDiscount(20);
    } else if (value === "12") {
      setDiscount(33);
    } else if (value === "coupon") {
      setDiscount("coupon");
    }
  };

  // Fetch currency info(currency name & rate)
  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/EUR")
      .then((res) => res.json())
      .then((data) => {
        setExchangeRates(Object.entries(data?.rates));
      });
  }, []);

  // Get payment data from local storage
  useEffect(() => {
    const getPaymentData = JSON.parse(localStorage.getItem("productInfo"));
    setPaymentData(getPaymentData);
    setSelectedCurrency(getPaymentData.currency);
  }, []);

  // Set currency rate based on currently selected currency
  useEffect(() => {
    updateCurrencyRate();
  }, [updateCurrencyRate]);

  // Set original amount which is without discount and payable amount after discount
  useEffect(() => {
    calculateAmount();
  }, [calculateAmount]);

  // if user don't click any input values set value by default in the form
  useEffect(() => {
    setValue("serviceName", paymentData.name);
    setValue("currency", selectedCurrency);
    setValue("basePrice", (paymentData.price * currencyRate).toFixed(2));
    setValue("duration", duration);
    setValue("payableAmount", payableAmount);
    setValue("originalAmount", originalAmount);
  }, [
    paymentData,
    selectedCurrency,
    currencyRate,
    duration,
    payableAmount,
    originalAmount,
    setValue,
  ]);

  return {
    paymentData,
    selectedCurrency,
    handleCurrencyChange,
    exchangeRates,
    currencyRate,
    duration,
    handleDurationChange,
    originalAmount,
    payableAmount,
    discount,
  };
}

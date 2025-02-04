import { MdKeyboardArrowLeft } from "react-icons/md";
import usePaymentCalculation from "../../../hooks/usePaymentCalculation";

export default function Step2({
  register,
  watchStep2,
  emailStep1,
  setStep,
  setValue,
}) {
  const {
    paymentData,
    selectedCurrency,
    handleCurrencyChange,
    exchangeRates,
    currencyRate,
    handleDurationChange,
    payableAmount,
    originalAmount,
  } = usePaymentCalculation(setValue);

  // Check if the coupon field is visible and has a value if required
  const isCouponValid =
    watchStep2[0] === "coupon"
      ? watchStep2[1] && watchStep2[1].trim() !== ""
      : true;
  const isNextEnabled = watchStep2[0] && isCouponValid;

  return (
    <>
      <h2 className="text-2xl font-semibold">Product info</h2>
      <div className="my-8 grid grid-cols-12 gap-y-6 md:gap-x-12">
        <div className="col-span-12 md:col-span-6">
          <label htmlFor="serviceName">Service Name</label>
          <input
            className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
            readOnly
            type="text"
            id="serviceName"
            value={paymentData.name}
            {...register("serviceName")}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <label htmlFor="currency">
            Choose Currency (select your prefered payment currency) *
          </label>
          <select
            id="currency"
            className="mt-3 w-full rounded border px-4 py-2 uppercase outline-none focus:border-black"
            defaultValue={selectedCurrency}
            {...register("currency", { onChange: handleCurrencyChange })}
          >
            {selectedCurrency && (
              <option value={selectedCurrency} readOnly>
                {selectedCurrency}
              </option>
            )}
            {exchangeRates.map((currency, i) => (
              <option key={i} value={currency[0]}>
                {currency[0]}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-12 md:col-span-6">
          <label htmlFor="basePrice">
            Base Price Yearly (Default Currency in{" "}
            <span className="uppercase">{selectedCurrency}</span>)
          </label>
          <input
            className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
            readOnly
            type="number"
            value={(paymentData.price * currencyRate).toFixed(2)}
            id="basePrice"
            {...register("basePrice")}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <label htmlFor="duration">Subscription Duration *</label>
          <select
            className="mt-3 w-full rounded border px-4 py-2 capitalize outline-none focus:border-black"
            id="duration"
            {...register("duration", {
              required: true,
              onChange: handleDurationChange,
            })}
          >
            <option value={3}>3 Months (15% Discount)</option>
            <option value={1}>1 Months</option>
            <option value={6}>6 Months (20% Discount)</option>
            <option value={12}>12 Months (33% Discount)</option>
            <option value={"coupon"}>12 Months with coupon code</option>
          </select>
        </div>

        {watchStep2[0] === "coupon" && (
          <div className="col-span-12">
            <label htmlFor="coupon">Enter Coupon Code *</label>
            <input
              className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
              type="text"
              id="coupon"
              placeholder="Enter Coupon"
              {...register("coupon", { required: watchStep2[0] === "coupon" })}
            />
          </div>
        )}

        <div className="col-span-12 md:col-span-6">
          <label htmlFor="payableAmount">Payable Amount</label>
          <input
            className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
            readOnly
            type="number"
            id="payableAmount"
            value={payableAmount}
            placeholder={`${payableAmount} ${selectedCurrency}`}
            {...register("payableAmount")}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <label htmlFor="originalAmount">Original Amount</label>
          <input
            className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
            readOnly
            type="number"
            id="originalAmount"
            value={originalAmount}
            placeholder="originalAmount"
            {...register("originalAmount")}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <label htmlFor="customerEmail">Email</label>
          <input
            className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
            readOnly
            type="email"
            id="customerEmail"
            value={emailStep1}
            {...register("customerEmail")}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <label htmlFor="password">Password</label>
          <input
            className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
            disabled
            type="text"
            id="password"
            {...register("password")}
          />
        </div>
      </div>

      {/* Form Step Changing Buttons */}
      <div className="mt-14 flex justify-center gap-12">
        <button
          className="flex items-center gap-1 text-lg font-semibold text-primary transition-all duration-200 ease-in-out"
          onClick={() => setStep(1)}
        >
          <MdKeyboardArrowLeft className="mt-0.5 text-2xl" />
          Back
        </button>

        <button
          className={`rounded border border-primary px-6 py-1.5 text-lg font-semibold ${isNextEnabled ? "bg-primary text-white" : "bg-white"}`}
          onClick={() => setStep(3)}
          disabled={!isNextEnabled}
        >
          Next
        </button>
      </div>
    </>
  );
}

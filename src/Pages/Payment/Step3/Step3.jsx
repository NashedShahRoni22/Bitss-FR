import { MdKeyboardArrowLeft } from "react-icons/md";
import BankTransferDetails from "../../../components/BankTransferDetails";
import { LiaSpinnerSolid } from "react-icons/lia";

export default function Step3({
  register,
  watchStep3,
  setStep,
  getValues,
  loading,
}) {
  const paymentMethod = getValues().paymentMethod;
  const isPaypal = paymentMethod === "paypal";
  const isStripe = paymentMethod === "stripe";
  const isBank = paymentMethod === "bank";

  return (
    <>
      <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-16">
        {/* Payment Method Select */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold">Select Payment Method</h2>

          <div className="my-8 space-y-4">
            {/* <div className="flex items-center gap-2 text-lg">
              <input
                type="radio"
                id="paypal"
                value="paypal"
                {...register("paymentMethod", { required: true })}
                className="size-5"
              />
              <label htmlFor="paypal">Pay with Paypal</label>
            </div> */}

            <div className="flex items-center gap-2 text-lg">
              <input
                type="radio"
                id="stripe"
                value="stripe"
                {...register("paymentMethod", { required: true })}
                className="size-5"
              />
              <label htmlFor="stripe">Pay with Card (Stripe)</label>
            </div>

            <div className="flex items-center gap-2 text-lg">
              <input
                type="radio"
                id="key"
                value="bank"
                {...register("paymentMethod", { required: true })}
                className="size-5"
              />
              <label htmlFor="key">Pay with Bank Transfer</label>
            </div>
          </div>
        </div>

        {/* Bank Transfer Information */}
        {isBank && <BankTransferDetails />}
      </div>

      {/* Form Step Changing Buttons */}
      <div className="mt-12 flex justify-center gap-12">
        <button
          className="flex items-center gap-1 text-lg font-semibold text-primary transition-all duration-200 ease-in-out"
          onClick={() => setStep(2)}
        >
          <MdKeyboardArrowLeft className="mt-0.5 text-2xl" />
          Back
        </button>

        <button
          type="submit"
          disabled={!watchStep3.every(Boolean) || loading}
          className={`flex items-center gap-2 rounded border border-primary px-6 py-1.5 text-lg font-semibold ${watchStep3.every(Boolean) ? "bg-primary text-white" : "bg-white"}`}
        >
          Confirm Order{" "}
          {loading && (
            <LiaSpinnerSolid className="animate-spin text-2xl text-white" />
          )}
        </button>
      </div>
    </>
  );
}

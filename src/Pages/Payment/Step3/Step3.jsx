import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Step3({ register, watchStep3, setStep }) {
  return (
    <>
      <h2 className="text-2xl font-semibold">Select Payment Method</h2>

      <div className="my-8 space-y-4">
        <div className="flex items-center gap-2 text-lg">
          <input
            type="radio"
            id="paypal"
            {...register("paymentMethod", { required: true })}
            className="size-5"
          />
          <label htmlFor="paypal">Pay with Paypal</label>
        </div>

        <div className="flex items-center gap-2 text-lg">
          <input
            type="radio"
            id="stripe"
            {...register("paymentMethod", { required: true })}
            className="size-5"
          />
          <label htmlFor="stripe">Pay with Card (Stripe)</label>
        </div>

        <div className="flex items-center gap-2 text-lg">
          <input
            type="radio"
            id="key"
            {...register("paymentMethod", { required: true })}
            className="size-5"
          />
          <label htmlFor="key">License Key Product Activation</label>
        </div>
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
          className={`rounded border border-primary px-6 py-1.5 text-lg font-semibold ${watchStep3.every(Boolean) ? "bg-primary text-white" : "bg-white"}`}
          type="submit"
          disabled={!watchStep3.every(Boolean)}
        >
          Proceed To Checkout
        </button>
      </div>
    </>
  );
}

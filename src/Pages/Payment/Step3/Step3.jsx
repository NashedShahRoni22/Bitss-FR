import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Step3({ register, watchStep3, setStep, getValues }) {
  const paymentMethod = getValues().paymentMethod;
  const isPaypal = paymentMethod === "paypal";
  const isStripe = paymentMethod === "stripe";
  const isBank = paymentMethod === "bank";

  return (
    <>
      <h2 className="text-2xl font-semibold">Select Payment Method</h2>

      <div className="my-8 space-y-4">
        <div className="flex items-center gap-2 text-lg">
          <input
            type="radio"
            id="paypal"
            value="paypal"
            {...register("paymentMethod", { required: true })}
            className="size-5"
          />
          <label htmlFor="paypal">Pay with Paypal</label>
        </div>

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

        {/* Bank Information */}
        <div className="max-w-2xl rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
          {/* Bank Information */}
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            Our Bank Transfer Details
          </h2>

          <div className="rounded-md bg-gray-100 p-4">
            <p className="text-lg font-semibold">
              <span className="text-gray-600">Bank: </span>LCL Bank France
            </p>
            <p className="text-lg font-semibold">
              <span className="text-gray-600">IBAN: </span>
              <span className="text-blue-600">
                FR62 3000 2030 3700 0007 3125 M63
              </span>
            </p>
            <p className="text-lg font-semibold">
              <span className="text-gray-600">BIC: </span>
              <span className="text-blue-600">CRLYFRPP</span>
            </p>
          </div>

          {/* Payment Instructions */}
          <div className="mt-6">
            <p className="text-gray-700">
              Please make your payment directly into the{" "}
              <strong>BFIN SASU</strong> bank account. Use your{" "}
              <strong>Order ID</strong> as the payment reference.
            </p>
            <p className="mt-2 text-gray-700">
              Your order will not be processed until the funds have cleared in
              our account. Once the payment is received, <strong>BFIN</strong>{" "}
              will contact you to begin the software transfer process, ensuring
              you receive full ownership.
            </p>
          </div>

          {/* Company Details */}
          <div className="mt-6 text-gray-700">
            <p>
              <strong>Bank Transfer Payments:</strong> Made to BFIN SASU (Reg
              No: 53521773100012, RCS Montpellier France).
            </p>
            <p>
              <strong>Office Address:</strong> 8 RUE DUBLIN, 34200 SETE, FRANCE.
            </p>
            <p>
              <strong>Support Email:</strong>{" "}
              <a
                href="mailto:support@boboshomail.com"
                className="text-blue-600"
              >
                support@boboshomail.com
              </a>
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.officetools.bobosoho.com"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.officetools.bobosoho.com
              </a>
            </p>
          </div>

          {/* Activation Info */}
          <div className="mt-6 border-l-4 border-blue-500 bg-blue-100 p-4">
            <p className="text-blue-700">
              After verifying your payment, the product will be activated within{" "}
              <strong>24 hours</strong>.
            </p>
          </div>
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

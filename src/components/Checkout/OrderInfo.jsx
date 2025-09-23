import {
  LuBuilding2,
  LuCheck,
  LuChevronDown,
  LuCreditCard,
} from "react-icons/lu";

export default function OrderInfo({
  domain,
  setDomain,
  currency,
  setCurrency,
  paymentType,
  setPaymentType,
  agreeTerms,
  setAgreeTerms,
  currencies,
}) {
  return (
    <div className="space-y-6 lg:col-span-2">
      {/* Domain Information */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
          Domain Information
        </h2>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Domain Name <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            required
            placeholder="https://example.com"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
          <p className="mt-1 text-sm text-gray-500">
            Enter the domain where you&apos;ll use these products
          </p>
        </div>
      </div>

      {/* Payment Options */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold text-gray-900">
          Payment Options
        </h2>

        {/* Currency Selection */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Currency
          </label>
          <div className="relative">
            <select
              className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {!currencies ? (
                <option>Loading currencies...</option>
              ) : (
                <>
                  <option value="EUR">EUR</option>
                  {Object.keys(currencies)
                    .filter((curr) => curr !== "EUR")
                    .sort()
                    .map((currencyCode) => (
                      <option key={currencyCode} value={currencyCode}>
                        {currencyCode}
                      </option>
                    ))}
                </>
              )}
            </select>
            <LuChevronDown className="pointer-events-none absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Payment Type Selection */}
        <div className="space-y-3">
          <label className="mb-3 block text-sm font-medium text-gray-700">
            Payment Method
          </label>

          <div className="space-y-2">
            <label
              className={`flex cursor-pointer items-center rounded-lg border p-4 transition-colors ${paymentType === "stripe" ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-gray-400"}`}
            >
              <input
                type="radio"
                name="paymentType"
                value="stripe"
                checked={paymentType === "stripe"}
                onChange={(e) => setPaymentType(e.target.value)}
                className="sr-only"
              />
              <div
                className={`mr-3 h-4 w-4 rounded-full border-2 ${paymentType === "stripe" ? "border-red-500 bg-red-500" : "border-gray-300"} flex items-center justify-center`}
              >
                {paymentType === "stripe" && (
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                )}
              </div>
              <LuCreditCard className="mr-3 h-5 w-5 text-blue-500" />
              <div>
                <span className="font-medium text-gray-900">Stripe</span>
                <p className="text-sm text-gray-600">
                  Pay securely with credit/debit card
                </p>
              </div>
            </label>

            <label
              className={`flex cursor-pointer items-center rounded-lg border p-4 transition-colors ${paymentType === "bank" ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-gray-400"}`}
            >
              <input
                type="radio"
                name="paymentType"
                value="bank"
                checked={paymentType === "bank"}
                onChange={(e) => setPaymentType(e.target.value)}
                className="sr-only"
              />
              <div
                className={`mr-3 h-4 w-4 rounded-full border-2 ${paymentType === "bank" ? "border-red-500 bg-red-500" : "border-gray-300"} flex items-center justify-center`}
              >
                {paymentType === "bank" && (
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                )}
              </div>
              <LuBuilding2 className="mr-3 h-5 w-5 text-green-500" />
              <div>
                <span className="font-medium text-gray-900">Bank Transfer</span>
                <p className="text-sm text-gray-600">
                  Direct bank transfer payment
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <label className="flex cursor-pointer items-start space-x-3">
          <div className="relative">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="sr-only"
            />
            <div
              className={`h-5 w-5 rounded border-2 ${agreeTerms ? "border-red-500 bg-red-500" : "border-gray-300"} flex items-center justify-center`}
            >
              {agreeTerms && <LuCheck className="h-3 w-3 text-white" />}
            </div>
          </div>
          <div className="text-sm text-gray-700">
            I agree to the{" "}
            <a href="#" className="text-red-600 underline hover:text-red-700">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-red-600 underline hover:text-red-700">
              Privacy Policy
            </a>
          </div>
        </label>
      </div>
    </div>
  );
}

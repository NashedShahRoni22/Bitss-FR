import { MdKeyboardArrowLeft } from "react-icons/md";
import usePaymentCalculation from "../../../hooks/usePaymentCalculation";
import { useEffect, useState } from "react";
import { validateEmailAvailability } from "../../../utils/validateEmailAvailability";
import { HiOutlineEye } from "react-icons/hi2";
import { HiOutlineEyeOff } from "react-icons/hi";
import { createBobosohoEmail } from "../../../utils/createBobosohoEmail";
import Loader from "../../../components/shared/Loader";

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const debouncedValidateEmailAvailability = debounce(
  validateEmailAvailability,
  300,
);

export default function Step2({
  register,
  watchStep2,
  setStep,
  setValue,
  errors,
  getValues,
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
  const [emailAvailable, setEmailAvailable] = useState(null);
  const [emailLoading, setEmailLoading] = useState(false);
  // const [subMissionLoading, setSubMissionLoading] = useState(false);
  const [emailPrefix, setEmailPrefix] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password hide & show
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Check if the coupon field is visible and has a value if required
  const isCouponValid =
    watchStep2[0] === "coupon"
      ? watchStep2[1] && watchStep2[1].trim() !== ""
      : true;

  // Handle User Input for Email Prefix
  const handleEmailChange = (e) => {
    const inputValue = e.target.value.replace(/[^a-zA-Z0-9._-]/g, ""); // Restrict special characters
    setEmailPrefix(inputValue);
    const fullEmail = `${inputValue}@bobosohomail.com`;
    setValue("bobosohoEmail", fullEmail); // Update react-hook-form value

    if (inputValue === "") {
      setEmailAvailable(null); // Reset email availability when the input is empty
    } else {
      // Skip validation if email is the default
      if (fullEmail !== "@bobosohomail.com") {
        debouncedValidateEmailAvailability(
          fullEmail,
          setEmailAvailable,
          setEmailLoading,
        );
      } else {
        setEmailAvailable(false); // Force "not available" when it's the default email
      }
    }
  };

  // show bobosomail and user typed email
  const appendToFixedEmail = (input) => {
    const fixedDomain = "@bobosohomail.com";
    return input + fixedDomain;
  };

  // Check Next Button Enable or Disable
  const isNextEnabled =
    watchStep2.every(Boolean) &&
    isCouponValid &&
    emailAvailable &&
    !errors.password;

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      debouncedValidateEmailAvailability.cancel?.();
    };
  }, []);

  const handleNextButton = () => {
    const bobosohoEmail = getValues().bobosohoEmail + "@bobosohomail.com";
    const password = getValues().password;
    setStep(3);
    // const result = createBobosohoEmail(
    //   bobosohoEmail,
    //   password,
    //   // setSubMissionLoading,
    // );
    // console.log(result);
  };

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
            {/* <option value={"coupon"}>12 Months with coupon code</option> */}
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

        {/* email field */}
        <div className="col-span-12 md:col-span-6">
          <label htmlFor="bobosohoEmail">Choose Bobosoho Username *</label>
          <div className="mt-3 flex items-center">
            <input
              className={`w-full rounded-l border border-r-0 px-4 py-2 outline-none ${emailAvailable === false && "border-red-600"} ${emailAvailable === true && getValues().bobosohoEmail !== "@bobosohomail.com" && "border-green-600"}`}
              type="text"
              id="bobosohoEmail"
              placeholder="Pick a username (ex. walterwhite)"
              value={emailPrefix}
              {...register("bobosohoEmail", {
                required: true,
                onChange: handleEmailChange,
              })}
            />
            <div
              className={`min-w-fit rounded-r border bg-gray-50 px-4 py-2 ${emailAvailable === false && "border-red-600"} ${emailAvailable === true && getValues().bobosohoEmail !== "@bobosohomail.com" && "border-green-600"}`}
            >
              @bobosohomail.com
            </div>
          </div>
          {emailLoading && <Loader />}
          {!emailLoading &&
            getValues().bobosohoEmail &&
            getValues().bobosohoEmail !== "@bobosohomail.com" &&
            emailAvailable !== null && (
              <p
                className={`mt-2 text-sm ${emailAvailable && !emailLoading ? "text-green-600" : "text-red-600"}`}
              >
                <span className="font-medium">
                  {appendToFixedEmail(emailPrefix)}
                </span>{" "}
                email is
                {emailAvailable ? " available" : " not available"}!
              </p>
            )}
        </div>

        {/* password field */}
        <div className="col-span-12 md:col-span-6">
          <label htmlFor="password">Password *</label>
          <div className="relative mt-3 w-full">
            <input
              className={`w-full rounded border py-2 pl-4 pr-12 outline-none ${getValues().password && !errors.password && "border-green-400"} ${getValues().password.length > 0 && errors.password && "border-red-600"}`}
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{13,}$/,
              })}
            />

            {showPassword ? (
              <HiOutlineEye
                onClick={togglePassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer bg-white text-2xl"
              />
            ) : (
              <HiOutlineEyeOff
                onClick={togglePassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer bg-white text-2xl"
              />
            )}
          </div>
          {getValues().password && errors.password && (
            <div className="mt-1.5 text-sm text-red-600">
              <p>
                Your password must be at least 13 characters long and include:
              </p>
              <ul className="mt-1 list-disc pl-4">
                <li>One uppercase letter (A-Z)</li>
                <li>One lowercase letter (a-z)</li>
                <li>One number (0-9)</li>
                <li>One special character (e.g., !, @, #, $, etc.)</li>
              </ul>
            </div>
          )}
          {getValues().password && !errors.password && (
            <p className="mt-1.5 text-sm text-green-600">
              Password is valid and secured!
            </p>
          )}
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
          onClick={handleNextButton}
          disabled={!isNextEnabled}
        >
          Next
        </button>
      </div>
    </>
  );
}

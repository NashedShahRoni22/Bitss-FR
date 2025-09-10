import { Link } from "react-router";
import FormField from "../../components/FormField";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { authFormValidationRules } from "../../data/authFormValidationRules";
import bitssLogo from "../../assets/logo/bitss-logo.png";

export default function Signup() {
  const [showPass, setShowPass] = useState(false);
  const [countries, setCountries] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("/country.json")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="w-full py-10 font-roboto">
      <div className="mx-5 flex flex-col gap-8 md:container md:mx-auto md:flex-row md:gap-16">
        {/* form container */}
        <div className="borer-gray-200 w-full rounded-lg border bg-white px-5 py-10 md:w-1/2">
          <h1 className="text-center text-2xl font-semibold">
            Create your account
          </h1>
          <p className="text-center text-lg">
            Join us to protect your digital life
          </p>

          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
            <FormField
              label="Full Name"
              name="name"
              required
              register={register}
              errors={errors}
            />

            <FormField
              label="Bobosohomail"
              type="email"
              name="bobosohomail"
              required
              toolTip
              register={register}
              errors={errors}
            />

            <FormField
              label="Password"
              type={showPass ? "text" : "password"}
              name="password"
              required
              togglePass={setShowPass}
              register={register}
              errors={errors}
              validation={authFormValidationRules.password}
            />

            <FormField
              label="Contact Email (Secondary)"
              type="email"
              name="contactEmail"
              required
              register={register}
              errors={errors}
              validation={authFormValidationRules.contactEmail}
            />

            {/* countries select dropdown */}
            <div className="space-y-2">
              <label htmlFor="country" className="text-sm font-medium">
                Country <span className="text-primary">*</span>
              </label>

              <select
                id="country"
                className="w-full rounded border px-4 py-2 outline-none focus:border-black"
                {...register("country", {
                  required: "Please select a country.",
                })}
              >
                <option value="" disabled>
                  Select country
                </option>
                {countries.map((country, i) => (
                  <option key={i} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* address */}
            <div className="space-y-2">
              <label htmlFor="address" className="text-sm font-medium">
                Address <span className="text-primary">*</span>
              </label>

              <textarea
                name="address"
                rows={3}
                {...register("address", { required: "Address is required" })}
                className={`w-full rounded border px-4 py-2 outline-none ${
                  errors?.address
                    ? "border-primary focus:border-primary"
                    : "border border-gray-200 focus:border-gray-300"
                }`}
              />

              {/* Error message display */}
              {errors?.address && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* terms & condition agreement */}
            <div className="flex gap-2 text-sm">
              <input
                type="checkbox"
                {...register("terms", authFormValidationRules.terms)}
              />
              <p>
                I agree to the{" "}
                <Link
                  to="/terms-and-conditions"
                  className="text-blue-500 hover:underline"
                >
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy-policy"
                  className="text-blue-500 hover:underline"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>

            {/* Error message display */}
            {errors?.terms && (
              <p className="mt-1 text-xs text-red-500">
                {errors.terms.message}
              </p>
            )}

            {/* submit button */}
            <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
              <Link
                to="/login"
                className="text-sm text-blue-500 hover:underline"
              >
                Already have an account? Sign in
              </Link>
              <button
                type="submit"
                className="w-full flex-shrink-0 rounded bg-primary px-4 py-2 font-medium text-white transition-all duration-200 ease-in-out hover:bg-primary-hover active:scale-[0.98] md:w-fit"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>

        {/* text info */}
        <div className="flex w-full flex-col justify-center px-5 py-10 md:w-1/2">
          <div>
            <img src={bitssLogo} className="mx-auto size-20" />
            <h2 className="mt-6 text-center text-2xl font-medium text-gray-900">
              Protect your devices with one account
            </h2>
            <p className="mx-auto mt-2 w-full max-w-lg text-balance text-center text-gray-700">
              Manage your digital security easily and efficiently. Anytime.
              Anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link, useNavigate } from "react-router";
import FormField from "../../components/FormField";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { authFormValidationRules } from "../../data/authFormValidationRules";
import bitssLogo from "../../assets/logo/bitss-logo.png";
import { postApi } from "../../api/api";

export default function Login() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const watchedFields = watch();

  // Check if form is valid and can be submitted
  const isFormValid = () => {
    // Check if all required fields have values
    const hasRequiredFields = watchedFields.email && watchedFields.password;

    // Check if there are no validation errors
    const hasNoErrors = Object.keys(errors).length === 0;

    return hasRequiredFields && hasNoErrors;
  };

  const onSubmit = async (data) => {
    if (isFormValid()) {
      const res = await postApi({
        endpoint: "/auth/user/login",
        payload: data,
      });

      if (res?.success) {
        localStorage.setItem("authInfo", JSON.stringify(res.data));
        navigate("/");
      }
    }
  };

  return (
    <section className="w-full py-10 font-roboto">
      <div className="mx-5 flex flex-col gap-8 md:container md:mx-auto md:flex-row md:gap-16">
        {/* left text/info */}
        <div className="flex w-full flex-col px-5 py-10 md:w-1/2">
          <div>
            <img src={bitssLogo} className="mx-auto size-20" alt="Bitss Logo" />
            <h2 className="mt-6 text-center text-2xl font-medium text-gray-900">
              Welcome back to Bitss Security
            </h2>
            <p className="mx-auto mt-2 w-full max-w-lg text-balance text-center text-gray-700">
              Sign in to access your account and manage your digital protection
              tools anytime, anywhere.
            </p>
          </div>
        </div>

        {/* login form */}
        <div className="borer-gray-200 w-full rounded-lg border bg-white px-5 py-10 md:w-1/2">
          <h1 className="text-center text-2xl font-semibold">Sign In</h1>
          <p className="text-center text-lg">Securely access your account</p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
            <FormField
              label="Bobosohomail"
              type="email"
              name="email"
              required
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

            {/* forgot password */}
            {/* <div className="flex justify-end text-sm">
              <Link
                to="/forgot-password"
                className="text-blue-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div> */}

            {/* submit + register link */}
            <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
              <Link
                to="/signup"
                className="text-sm text-blue-500 hover:underline"
              >
                Don’t have an account? Create one
              </Link>
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`w-full flex-shrink-0 rounded px-4 py-2 font-medium text-white transition-all duration-200 ease-in-out md:w-fit ${
                  isFormValid()
                    ? "bg-primary hover:bg-primary-hover active:scale-[0.98]"
                    : "cursor-not-allowed bg-gray-400"
                }`}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

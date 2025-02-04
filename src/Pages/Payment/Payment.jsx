import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";

export default function Payment() {
  const [paymentData, setPaymentData] = useState("");
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      country: "",
      password:
        "Default password is 'password'. You can change it after login.",
    },
  });

  // Watch input fileds
  const watchStep1 = watch([
    "customerName",
    "businessName",
    "mobile",
    "customerEmail",
    "phone",
    "country",
    "address",
  ]);
  const watchStep2 = watch(["duration", "coupon"]);
  const watchStep3 = watch(["paymentMethod"]);
  const emailStep1 = watch("customerEmail");
  const selectedCurrency = watch("currency");

  // Handle payment form submit
  const onSubmit = (data) => {
    console.log(data);
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
            watchStep1={watchStep1}
            setStep={setStep}
          />
        )}

        {/* Step 2 */}
        {step === 2 && (
          <Step2
            register={register}
            watchStep2={watchStep2}
            emailStep1={emailStep1}
            setValue={setValue}
            selectedCurrency={selectedCurrency}
            setStep={setStep}
          />
        )}

        {/* Step 3 */}
        {step === 3 && (
          <Step3
            register={register}
            watchStep3={watchStep3}
            setStep={setStep}
          />
        )}
      </form>
    </main>
  );
}

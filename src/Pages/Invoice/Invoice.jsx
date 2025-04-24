import { useEffect, useState } from "react";
import StripeInvoice from "../../components/StripeInvoice";
import { Link } from "react-router";

export default function Invoice() {
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("productInfo");

    if (savedData) {
      setOrderData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mx-5 py-10 font-roboto md:container md:mx-auto md:py-20">
      {orderData?.payment_type === "bank" ? (
        <div className="mx-auto w-full max-w-4xl rounded border p-6 text-center text-[15px]">
          <h1 className="text-center text-xl font-semibold md:text-3xl">
            Thank you for placing your order!
          </h1>
          <p className="mt-4 font-medium">
            Payment instructions and details have been sent to your email{" "}
            <span className="text-primary">{orderData?.personal_email}</span>
            <br /> Please check your inbox (and spam/junk folder just in case).
          </p>
          <p className="mt-12 text-sm text-gray-600">
            If you encounter any issues, feel free to reach out to us at{" "}
            <a
              className="text-blue-500 underline decoration-blue-500"
              href="mailto:support@bobosohomail.com"
              target="_blanck"
            >
              support@bobosohomail.com
            </a>{" "}
            <br /> or submit a query through our{" "}
            <Link
              className="text-blue-500 underline decoration-blue-500"
              to="/contact"
            >
              Contact Us
            </Link>{" "}
            section.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Thanks again for choosing BITSS Cyber Security System!
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              to="/"
              onClick={() => localStorage.removeItem("orderData")}
              className="flex items-center gap-2 rounded px-4 py-2 font-medium text-primary transition-all duration-200 ease-linear hover:text-primary-hover"
            >
              Back To Home
            </Link>
          </div>
        </div>
      ) : (
        <StripeInvoice orderData={orderData} />
      )}
    </section>
  );
}

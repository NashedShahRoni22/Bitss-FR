import { HiCheckCircle } from "react-icons/hi2";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect to home after 5 seconds
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="bg-gray-50">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full rounded-lg bg-white p-8 shadow-sm sm:p-12 md:w-2/3 lg:w-1/2">
          <div className="flex flex-col items-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <HiCheckCircle className="text-5xl text-green-600" />
            </div>

            <h1 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Payment Successful!
            </h1>

            <p className="mb-8 text-center text-lg text-gray-600">
              Thank you for your purchase. Your order has been received and is
              being processed.
            </p>

            <div className="mb-8 w-full rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">
                Order Summary
              </h2>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Order ID:</span>
                <span className="font-medium">#ORD-123456</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Total:</span>
                <span className="font-medium">$99.99</span>
              </div>
            </div>

            <div className="flex w-full flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button
                onClick={() => navigate("/orders")}
                className="flex-1 rounded-md bg-indigo-600 px-6 py-3 text-center text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                View Order
              </button>
              <button
                onClick={() => navigate("/")}
                className="flex-1 rounded-md border border-gray-300 px-6 py-3 text-center text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Continue Shopping
              </button>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              You&apos;ll be redirected to the homepage in 5 seconds...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

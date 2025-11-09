import React from "react";
import { CheckCircle, XCircle, Home, ShoppingBag } from "lucide-react";
import { Link } from "react-router";

export default function OrderStatus() {
  // Get URL parameters
  const isSuccess = window.location.pathname.includes("/success");
  const isCancel = window.location.pathname.includes("/cancel");

  const handleNavigate = (path) => {
    window.location.href = path;
  };

  if (isSuccess) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          <h1 className="mb-3 text-2xl font-semibold text-gray-900">
            Payment Successful
          </h1>

          <p className="mb-8 text-gray-600">
            Your order has been placed successfully. You will receive a
            confirmation email shortly.
          </p>

          <div className="space-y-3">
            <Link
              to={"/my-orders"}
              className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              View My Orders
            </Link>

            <Link
              to={"/"}
              className="flex w-full items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isCancel) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
            <XCircle className="h-10 w-10 text-red-600" />
          </div>

          <h1 className="mb-3 text-2xl font-semibold text-gray-900">
            Payment Cancelled
          </h1>

          <p className="mb-8 text-gray-600">
            Your payment was cancelled. No charges have been made to your
            account.
          </p>

          <div className="space-y-3">
            <Link
              to={"/cart"}
              className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Return to Cart
            </Link>

            <Link
              to={"/cart"}
              className="flex w-full items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Fallback
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-2xl font-semibold text-gray-900">
          Invalid Request
        </h1>
        <button
          onClick={() => handleNavigate("/")}
          className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}

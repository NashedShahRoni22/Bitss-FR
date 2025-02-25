import { useEffect, useState } from "react";
import { Link } from "react-router";
import { generateDate } from "../../utils/generateDate";
import { FaCloudDownloadAlt } from "react-icons/fa";

const productFiles = {
  "Bitss WAP Protection": "/bitss-wap-premium.zip",
  "Bitss VWAR Frontline Protection": "bitss-vwar-premium-1.0.1.zip",
};

export default function Invoice() {
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("productInfo");

    if (savedData) {
      setOrderData(JSON.parse(savedData));
    }
  }, []);

  const handlePrint = () => {
    const printContents = document.getElementById("invoice-section").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mx-5 py-10 font-roboto md:container md:mx-auto md:py-20">
      <div
        id="invoice-section"
        className="mx-auto w-full max-w-4xl rounded border p-6 text-[15px]"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-center text-2xl font-semibold md:text-3xl">
            Invoice
          </h1>
          <button
            onClick={handlePrint}
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            Print & Download
          </button>
        </div>

        <div className="mt-4 flex justify-between gap-16 border-t py-4">
          <div>
            <p className="font-semibold">Invoiced To:</p>
            <p>{orderData?.name}</p>
            <p>{orderData?.address}</p>
            <p>{orderData?.country}</p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Order ID:</span> #
              {orderData?.order_id}
            </p>
            <p>
              <span className="font-semibold">Date:</span>{" "}
              {generateDate(orderData?.createdAt)}
            </p>
          </div>
        </div>

        <p>
          <span className="font-semibold">Software Name:</span>{" "}
          {orderData?.software}
        </p>

        <p className="mt-1 capitalize">
          <span className="font-semibold">Version:</span> {orderData?.version}
        </p>

        {orderData.freeProduct && (
          <p className="mt-1 capitalize">
            <span className="font-semibold">Free Software:</span>{" "}
            {orderData?.freeProduct}
          </p>
        )}

        <p className="mt-1 capitalize">
          <span className="font-semibold">Payment Type:</span>{" "}
          {orderData?.payment_type}{" "}
          {orderData.duePrice && orderData.partialPrice && "(20%)"}
        </p>

        <table className="mt-3 w-full border-collapse border border-gray-300 text-lg">
          <thead>
            <tr className="bg-gray-100 text-[17px]">
              <th className="w-full border border-gray-300 px-4 py-2 text-left">
                Software
              </th>
              <th className="w-full border border-gray-300 px-4 py-2 text-left">
                Duration
              </th>
              <th className="w-fit border border-gray-300 px-4 py-2 text-left">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300 text-[15px]">
              <td className="border px-4 py-2">{orderData?.software}</td>
              <td className="border px-4 py-2">{orderData?.duration} months</td>
              <td className="border px-4 py-2">€{orderData?.price}</td>
            </tr>
            {orderData &&
              orderData?.addonsSoftwares &&
              orderData?.addonsSoftwares.length > 0 &&
              orderData?.addonsSoftwares?.map((addon, i) => (
                <tr key={i} className="border border-gray-300 text-[15px]">
                  <td className="border px-4 py-2">{addon.name}</td>
                  <td className="border px-4 py-2">€{addon.price}</td>
                </tr>
              ))}

            {orderData.duePrice && (
              <tr className="border border-gray-300 bg-gray-100 text-[17px]">
                <td className="border px-4 py-2 text-right">Due</td>
                <td className="border px-4 py-2">€{orderData?.duePrice}</td>
              </tr>
            )}

            {orderData.partialPrice ? (
              <tr className="border border-gray-300 bg-gray-100 text-[17px] font-semibold">
                <td className="border px-4 py-2 text-right">Total</td>
                <td className="border px-4 py-2">€{orderData?.partialPrice}</td>
              </tr>
            ) : (
              <tr className="border border-gray-300 bg-gray-100 text-[17px] font-semibold">
                <td colSpan={2} className="border px-4 py-2 text-right">
                  Total
                </td>
                <td className="border px-4 py-2">€{orderData?.price}</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="mt-8 flex justify-center">
          <a
            href={productFiles[orderData.software]}
            className="flex items-center justify-center gap-2 rounded bg-blue-500 px-4 py-2 text-lg font-medium text-white transition-all duration-200 ease-linear hover:bg-blue-600"
          >
            Download Software
            <FaCloudDownloadAlt />
          </a>
        </div>

        <p className="mt-8 text-lg font-semibold">
          Congratulations! <br />
          Visit your free access from BFINIT
        </p>
        <ul>
          <li>
            {" "}
            <span className="font-semibold">Bobosoho:</span>{" "}
            https://www.bobosohomail.com{" "}
          </li>
          <li>
            {" "}
            <span className="font-semibold">Pensaki:</span>{" "}
            https://office.bobosoho.com/login
          </li>
          <li>
            <span className="font-semibold">Email:</span> {orderData?.email}
          </li>

          <li>
            <span className="font-semibold">Password:</span>{" "}
            {orderData?.password}
          </li>
        </ul>
      </div>
      <p className="mt-8 text-center">
        Make your payment directly into the BFIN SASU bank account.
        <br />
        <span className="font-semibold">
          Please use your Order ID as the Payment Reference.
        </span>
      </p>

      <div className="mt-8 flex justify-center">
        <Link
          to="/"
          onClick={() => localStorage.removeItem("orderData")}
          className="flex items-center gap-2 rounded px-4 py-2 text-lg font-medium text-primary transition-all duration-200 ease-linear hover:text-primary-hover"
        >
          Back To Home
        </Link>
      </div>
    </section>
  );
}

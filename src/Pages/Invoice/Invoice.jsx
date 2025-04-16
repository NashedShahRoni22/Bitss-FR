import { useEffect, useState } from "react";
import { Link } from "react-router";
import { generateDate } from "../../utils/generateDate";
// import { FaCloudDownloadAlt } from "react-icons/fa";

/* const productFiles = {
  WordPress: {
    "Bitss C Contact Form": "/bitss-c-contact-form-wp-premium.zip",
    "Bitss WAP Protection": "/bitss-wap-protection-wp-premium.zip",
    "Bitss VWAR Frontline Protection": "bitss-vwar-wp-premium.zip",
  },
  JavaScript: {
    "Bitss C Contact Form": "/bitss-c-contact-form-js-premium.zip",
  },
}; */

export default function Invoice() {
  const [orderData, setOrderData] = useState({});
  /* const downloadUrl =
    orderData?.version && orderData?.software
      ? productFiles[orderData.version]?.[orderData.software]
      : ""; */

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
            Print
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
          <span className="font-semibold">Version:</span>{" "}
          {orderData?.version || orderData?.item_type}
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
              <th className="w-full border border-gray-300 px-4 py-2 text-left">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300 text-[15px]">
              <td className="border px-4 py-2">{orderData?.software}</td>
              <td className="border px-4 py-2">
                <p className="min-w-20">{orderData?.duration} Months</p>
              </td>
              <td className="border px-4 py-2">
                <p className="min-w-20">
                  {orderData?.price} {orderData?.currencey}
                </p>
              </td>
            </tr>
            {orderData &&
              orderData?.addonsSoftwares &&
              orderData?.addonsSoftwares.length > 0 &&
              orderData?.addonsSoftwares?.map((addon, i) => (
                <tr key={i} className="border border-gray-300 text-[15px]">
                  <td className="border px-4 py-2">{addon.name}</td>
                  <td className="border px-4 py-2">
                    {addon.price} {orderData?.currencey}
                  </td>
                </tr>
              ))}

            {orderData.duePrice && (
              <tr className="border border-gray-300 bg-gray-100 text-[17px]">
                <td className="border px-4 py-2 text-right">Due</td>
                <td className="border px-4 py-2">
                  {orderData?.duePrice} {orderData?.currencey}
                </td>
              </tr>
            )}

            {orderData.partialPrice ? (
              <tr className="border border-gray-300 bg-gray-100 text-[17px] font-semibold">
                <td className="border px-4 py-2 text-right">Total</td>
                <td className="border px-4 py-2">
                  {orderData?.partialPrice} {orderData?.currencey}
                </td>
              </tr>
            ) : (
              <tr className="border border-gray-300 bg-gray-100 text-[17px] font-semibold">
                <td colSpan={2} className="border px-4 py-2 text-right">
                  Total
                </td>
                <td className="border px-4 py-2">
                  {orderData?.price} {orderData?.currencey}
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* {downloadUrl ? (
          <div className="mt-8 flex justify-center">
            <a
              href={downloadUrl}
              className="flex items-center justify-center gap-2 rounded bg-blue-500 px-4 py-2 text-lg font-medium text-white transition-all duration-200 ease-linear hover:bg-blue-600"
            >
              Download Software
              <FaCloudDownloadAlt />
            </a>
          </div>
        ) : (
          <p className="mt-8 text-center text-lg font-semibold">
            Our Support Team will Contact with you within 48 Hours
          </p>
        )} */}

        <p className="mt-8 text-lg font-semibold">Congratulations!</p>

        {orderData?.payment_type === "bank" ? (
          <p className="mt-4 text-sm">
            We are glad that we have received your payment , To access your
            product you can log in using the credentials below to download :
            Product files | User manual | Login credentials & Payment receipt.
          </p>
        ) : (
          <p className="mt-4 text-sm">
            To access your product, simply log in using the credentials below to
            download: Product files | User manual | Login credentials & Payment
            receipt. <br />
            Also a confirmation email has also been sent to your provided
            address with the payment details.
          </p>
        )}

        <ul className="mt-2 text-sm">
          <li>
            {" "}
            <span className="font-semibold">Website:</span>{" "}
            https://www.bobosohomail.com{" "}
          </li>
          {/* <li>
            {" "}
            <span className="font-semibold">Pensaki:</span>{" "}
            https://office.bobosoho.com/login
          </li> */}
          {/* <li>
            <span className="font-semibold">Useremail:</span> {orderData?.email}
          </li> */}
          <li>
            <span className="font-semibold">Username:</span>{" "}
            {orderData?.user_name}
          </li>

          <li>
            <span className="font-semibold">Password:</span>{" "}
            {orderData?.password}
          </li>
        </ul>
      </div>

      {orderData?.payment_type === "bank" && (
        <p className="mt-8 text-center">
          Make your payment directly into the BFIN SASU bank account.
          <br />
          <span className="font-semibold">
            Please use your Order ID as the Payment Reference.
          </span>
        </p>
      )}

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

import { Link } from "react-router";

export default function BankTransferDetails() {
  return (
    <div className="w-full p-6">
      {/* Bank Information */}
      <h2 className="mb-4 text-center text-2xl font-bold">
        Our Bank Transfer Details
      </h2>

      <div className="rounded-md bg-gray-100 p-4">
        <p className="text-lg font-medium">
          <span className="font-semibold">Bank: </span>LCL Bank France
        </p>
        <p className="text-lg font-medium">
          <span className="font-semibold">IBAN: </span>
          <span className="text-blue-600">
            FR62 3000 2030 3700 0007 3125 M63
          </span>
        </p>
        <p className="text-lg font-medium">
          <span className="font-semibold">BIC: </span>
          <span className="text-blue-600">CRLYFRPP</span>
        </p>
      </div>

      {/* Payment Instructions */}
      <div className="mt-6">
        <p className="text-gray-600">
          Please make your payment directly into the{" "}
          <span className="font-semibold text-gray-800">BFIN SASU</span> bank
          account. Use your{" "}
          <span className="font-semibold text-gray-800">Order ID</span> as the
          payment reference.
        </p>
        <p className="mt-2 text-gray-600">
          Your order will not be processed until the funds have cleared in our
          account. Once the payment is received,{" "}
          <span className="font-semibold text-gray-800">BFIN</span> will contact
          you to begin the software transfer process, ensuring you receive full
          ownership.
        </p>
      </div>

      {/* Company Details */}
      <div className="mt-6 text-gray-600">
        <p>
          <span className="font-semibold text-black">
            Bank Transfer Payments:
          </span>{" "}
          Made to BFIN SASU (Reg No: 53521773100012, RCS Montpellier France).
        </p>
        <p>
          <span className="font-semibold text-black">Office Address:</span> 8
          RUE DUBLIN, 34200 SETE, FRANCE.
        </p>
        <p>
          <span className="font-semibold text-black">Support Email:</span>{" "}
          <a href="mailto:support@boboshomail.com" className="text-blue-600">
            support@boboshomail.com
          </a>
        </p>
        <p>
          <span className="font-semibold text-black">Website:</span>{" "}
          <Link
            to="https://www.officetools.bobosoho.com"
            className="text-blue-600"
            target="_blank"
          >
            www.officetools.bobosoho.com
          </Link>
        </p>
      </div>

      {/* Activation Info */}
      <div className="mt-6 border-l-4 border-blue-500 bg-blue-100 p-4">
        <p className="text-blue-700">
          After verifying your payment, the product will be activated within{" "}
          <strong>24 hours</strong>.
        </p>
      </div>
    </div>
  );
}

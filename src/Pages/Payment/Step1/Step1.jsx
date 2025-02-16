import { useEffect, useState } from "react";

export default function Step1({ register, watchStep1, setStep }) {
  const [countries, setCountries] = useState([]);

  // get all countries data
  useEffect(() => {
    fetch("/country.json")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Error loading country data:", err));
  }, []);

  return (
    <>
      <h2 className="text-2xl font-semibold">Personal info</h2>
      <div className="my-8 grid w-full grid-cols-12 gap-y-6 md:gap-x-12">
        <div className="col-span-12 w-full md:col-span-6">
          <label htmlFor="customerName">Customer Name *</label>
          <input
            className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
            type="text"
            id="customerName"
            {...register("customerName", {
              required: true,
            })}
          />
        </div>

        <div className="col-span-12 w-full md:col-span-6">
          <label htmlFor="businessName">Business Name *</label>
          <input
            className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
            type="text"
            id="businessName"
            {...register("businessName", {
              required: true,
            })}
          />
        </div>

        <div className="col-span-12 md:col-span-6">
          <label htmlFor="contact-email">Contact Email *</label>
          <input
            className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
            type="email"
            id="contact-email"
            {...register("contact-email", {
              required: true,
            })}
          />
        </div>

        <div className="col-span-12 md:col-span-6">
          <label htmlFor="country">Country *</label>
          <select
            className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
            id="country"
            {...register("country", {
              required: true,
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

        <div className="col-span-12 md:col-span-6">
          <label htmlFor="mobile">Mobile *</label>
          <input
            className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
            type="number"
            id="mobile"
            {...register("mobile", {
              required: true,
            })}
          />
        </div>

        <div className="col-span-12 md:col-span-6">
          <label htmlFor="phone">Phone *</label>
          <input
            className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
            type="number"
            id="phone"
            {...register("phone", {
              required: true,
            })}
          />
        </div>

        <div className="col-span-12 md:col-span-6">
          <label htmlFor="fax">Fax (optional)</label>
          <input
            className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
            type="number"
            id="fax"
            {...register("fax")}
          />
        </div>

        <div className="col-span-12 md:col-span-6">
          <label htmlFor="secondaryPhone">Secondary Phone (optional)</label>
          <input
            className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
            type="number"
            id="secondaryPhone"
            {...register("secondaryPhone")}
          />
        </div>

        <div className="col-span-12">
          <label htmlFor="address">Address *</label>
          <textarea
            className="mt-3 w-full rounded border px-4 py-2 outline-none focus:border-black"
            rows="3"
            id="address"
            {...register("address", {
              required: true,
            })}
          />
        </div>
      </div>

      {/* Form Step Changing Buttons */}
      <div className="mt-14 flex justify-center">
        <button
          className={`rounded border border-primary px-6 py-1.5 text-lg font-semibold ${watchStep1.every(Boolean) ? "bg-primary text-white" : "bg-white"}`}
          onClick={() => setStep(2)}
          disabled={!watchStep1.every(Boolean)}
        >
          Next
        </button>
      </div>
    </>
  );
}

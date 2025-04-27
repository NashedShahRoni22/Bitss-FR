import React from "react";
import banner from "../../../src/assets/bundle_banner.webp";
import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="py-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:py-16">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold md:text-6xl capitalize">
          We offer proven <span className="text-primary">website security</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 md:text-xl">
          Protect your website with our all-in-one security suite:
        </p>
        <ul className="mt-4 text-lg text-gray-700">
          <li>
            <span className="font-semibold">Bitss C Contact Form:</span> Secure
            and manage your contact forms
          </li>
          <li>
            <span className="font-semibold">Bitss V War:</span> Shield your
            database from threats
          </li>
          <li>
            <span className="font-semibold">Bitss WAP:</span> Keep login pages
            safe with advanced security
          </li>
        </ul>
        <div className="mt-6">
          <p className="text-xl font-bold mb-6">
            Get the complete package for only <span className="text-primary">€47.50</span> (Regular Price: €58.50) –
            Save 20%!
          </p>
          <Link to={"/contact"} className=" rounded bg-primary px-6 py-3 font-semibold text-white">
            Buy & Secure Website
          </Link>
        </div>
      </div>
      <div className="flex justify-center md:mt-0 md:w-1/2">
        <img
          src={banner}
          alt="Security Software"
          className="h-[400px] rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

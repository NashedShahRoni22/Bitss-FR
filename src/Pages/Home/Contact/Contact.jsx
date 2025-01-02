import { Link } from "react-router";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function Contact() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat px-5 py-10 md:container md:mx-auto md:py-20">
      <h2 className="mb-6 text-balance text-center text-3xl font-bold leading-[3.15rem] md:text-[2.5rem]">
        Which Cybersecurity Solution is Best for you?
      </h2>
      <p className="text-muted-text mb-20 w-full text-balance text-center text-xl font-light">
        Still unsure? Let us help you find the perfect solution—reach out to us
        or explore our FAQ!
      </p>

      <div className="flex flex-col-reverse items-center justify-center gap-4 sm:flex-row sm:items-start">
        {/* Contact Us Button */}
        <Link
          to="/contact"
          className={`bg-primary group inline-flex w-fit items-center rounded-full px-4 py-2.5 font-medium transition-all duration-200 ease-in-out`}
        >
          <span className="flex items-center px-3">
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              Contact Us
            </span>
          </span>
          <HiOutlineArrowLongRight className="-ml-3 min-w-fit scale-0 opacity-0 transition-opacity duration-300 group-hover:scale-150 group-hover:opacity-100" />
        </Link>
      </div>
    </section>
  );
}

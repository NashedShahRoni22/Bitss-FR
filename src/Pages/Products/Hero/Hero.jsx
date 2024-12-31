import { Link } from "react-router";
import navLinks from "../../../data/navLinks";
import { BsDot } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="px-5 py-10 md:container md:mx-auto md:py-20">
      <h1 className="mb-6 text-balance text-center text-4xl font-bold md:text-5xl">
        Bitss Cyber Security Products
      </h1>
      <p className="mb-20 w-full text-balance text-center text-xl font-light text-custom-gray">
        From anti-spam tools to network protection, explore our range of
        solutions that prioritize your security and peace of mind.
      </p>

      {navLinks.map(
        (link, i) =>
          link.name === "Products" && (
            <div
              key={i}
              className="grid grid-cols-1 rounded-lg bg-[#0c2636] md:grid-cols-2"
            >
              {link.categories.map((category, i) => (
                <div
                  key={i}
                  className={`border-black/20 p-6 ${i < 4 && i % 2 === 0 && "border-b border-r"} ${i % 2 !== 0 && "border-b"}`}
                >
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-white">
                    <img
                      src={category.icon}
                      alt=""
                      className="size-7 object-cover"
                    />
                    {category.title}
                  </h3>
                  <div className="space-y-2 text-[#B0BEC5]">
                    {category.items.map((product, i) => (
                      <div key={i}>
                        <Link
                          to={product.path}
                          className="flex max-w-fit items-center gap-1 capitalize transition-all duration-200 ease-in-out hover:text-custom-blue"
                        >
                          <BsDot className="min-w-fit text-lg" />
                          {product.name}
                        </Link>
                        {/* <p>{product.overview}</p> */}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ),
      )}
    </section>
  );
}

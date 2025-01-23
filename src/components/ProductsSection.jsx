import { Link } from "react-router";
import navLinks from "../data/navLinks";

export default function ProductsSection() {
  return (
    <section className="px-5 py-10 md:container md:mx-auto md:py-20">
      <h1 className="mb-6 text-center text-4xl font-bold md:text-5xl">
        Bitss Cyber Security Products
      </h1>
      <p className="mb-20 w-full text-balance text-center text-xl font-light">
        From anti-spam tools to network protection, explore our range of
        solutions that prioritize your security and peace of mind.
      </p>

      {navLinks.map(
        (link, i) =>
          link.name === "Products" && (
            <div key={i} className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {link.categories.map((category, i) => (
                <div
                  key={i}
                  className="min-h-[250px] rounded-lg p-4 shadow transition-shadow duration-200 ease-linear hover:shadow-custom-2"
                >
                  <h3 className="mb-4 flex flex-col gap-4 text-xl font-bold">
                    <img
                      src={category.icon}
                      alt={category.title}
                      loading="lazy"
                      className="size-16 object-cover"
                    />
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.items.map((product, i) => (
                      <div key={i}>
                        <Link
                          to={product.path}
                          className="max-w-fit capitalize transition-all duration-200 ease-in-out hover:text-primary"
                        >
                          {product.name}
                        </Link>
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

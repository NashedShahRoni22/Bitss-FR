import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { homeFaq } from "../../../data/faq/homeFaq";

export default function Faq() {
  const [faqOpen, setFaqOpen] = useState("");

  const toggleFaqOpen = (id) => {
    setFaqOpen((prevId) => (prevId === id ? "" : id));
  };

  return (
    <section className="px-5 py-10 md:container md:mx-auto md:py-20">
      <h2 className="mb-20 text-center text-3xl font-bold md:text-[2.5rem]">
        Frequently Asked Questions
      </h2>

      {/* FAQ Container */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {homeFaq.map((faq) => (
          <div key={faq.id}>
            <h4
              onClick={() => toggleFaqOpen(faq.id)}
              className="group flex cursor-pointer items-center justify-between gap-4 rounded-md border border-[#C5D6E0] p-4 text-lg font-medium"
            >
              {faq.que}
              <div
                className={`group-hover:border-dark flex min-h-8 min-w-8 items-center justify-center rounded-full border border-[#C5D6E0] transition-all duration-200 ease-linear ${faqOpen === faq.id && "bg-dark text-custom-white rotate-45"}`}
              >
                <AiOutlinePlus className="text-xl transition-all duration-200 ease-linear" />
              </div>
            </h4>

            <div
              className={`grid overflow-hidden px-4 transition-all duration-300 ease-in-out ${faqOpen === faq.id ? "grid-rows-[1fr] pt-4 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <p className="overflow-hidden">{faq.ans}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { tabsData } from "../../../data/tabsData";

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (i) => {
    setActiveTab(i);
  };

  return (
    <section className="px-5 py-10 text-center md:container md:mx-auto md:py-20">
      <h2 className="mb-14 text-center text-3xl font-bold md:text-[2.5rem]">
        Why Bitss is the Ultimate Solution for Website Security
      </h2>

      {/* Mobile Tab Titles */}
      <select className="text-background bg-light-background mb-12 w-full rounded px-2 py-2 text-xl md:hidden">
        {tabsData.map((tab, i) => (
          <option key={i} onClick={() => handleTabClick(i)}>
            {tab.title}
          </option>
        ))}
      </select>

      {/* Desktop Tab Titles */}
      <div className="bg-light-background mb-12 hidden items-center justify-center gap-3 rounded-full md:inline-flex">
        {tabsData.map((tab, i) => (
          <button
            key={i}
            className={`cursor-pointer rounded-full px-6 py-1.5 text-center text-xl transition-all duration-200 ease-in-out ${activeTab === i ? "bg-primary font-medium" : "hover:bg-primary text-black hover:text-white"}`}
            onClick={() => handleTabClick(i)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-left">
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <div className="w-full md:w-1/2">
            <h3 className="mb-4 text-center text-2xl font-medium md:text-left">
              {tabsData[activeTab].subTitle}
            </h3>
            <img
              src={tabsData[activeTab].image}
              alt={tabsData[activeTab].subTitle}
              className="mx-auto h-fit w-64 md:hidden"
            />
            <p className="text-muted-text my-6 text-lg font-light">
              {tabsData[activeTab].overview}
            </p>
            <ul className="text-muted-text space-y-4 font-light">
              {tabsData[activeTab].content.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <FaCheck className="text-primary mt-1.5 min-w-fit" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden w-full md:block md:w-1/2">
            <img
              src={tabsData[activeTab].image}
              alt={tabsData[activeTab].subTitle}
              className="ml-auto h-fit w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

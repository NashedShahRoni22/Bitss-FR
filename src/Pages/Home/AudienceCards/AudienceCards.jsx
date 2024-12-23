import { audienceData } from "../../../data/audienceData";

export default function AudienceCards() {
  return (
    <section className="px-5 py-10 md:container md:mx-auto md:py-20">
      <h2 className="mb-6 text-center text-3xl font-bold md:text-[2.5rem]">
        Safety Designed for Every Need
      </h2>
      <p className="text-custom-gray mb-20 w-full text-balance text-center text-xl font-light">
        Explore our tailored Cybersecurity Solutions designed to meet the unique
        needs of your Business and Personal life.
      </p>

      <div className="grid grid-cols-1 gap-8 divide-y md:grid-cols-2 md:gap-16 md:divide-y-0 lg:grid-cols-4">
        {audienceData.map((data) => (
          <div key={data.id} className="pt-8 md:pt-0">
            <div className="relative mx-auto w-fit">
              <img
                src={data.image}
                alt={data.title}
                className="mx-auto size-40 rounded-full object-cover md:size-52"
              />
              <h4 className="absolute -right-16 top-0 w-fit rounded-full bg-[#d32f2f] px-4 py-1 text-center text-sm font-medium">
                {data?.specialProperty || data?.title}
              </h4>
            </div>
            <h3 className="mb-3 mt-5 text-balance text-center text-[1.375rem] font-bold">
              {data.subtitle}
            </h3>
            <p className="text-custom-gray text-balance text-center text-lg font-light">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

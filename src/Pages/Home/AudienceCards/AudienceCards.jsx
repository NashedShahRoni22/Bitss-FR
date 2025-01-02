import { audienceData } from "../../../data/audienceData";

const AudienceCards = () => {
  return (
    <section className="px-5 py-10 md:container md:mx-auto md:py-20">
      {/* Title & Subtitle */}
      <h2 className="mb-6 text-center text-3xl font-bold md:text-[2.5rem]">
        Tailored Security Solutions for Every Website Owner
      </h2>
      <p className="text-muted-text mb-20 w-full text-balance text-center text-xl font-light">
        Comprehensive Contact Form Protection for WordPress and JavaScript
        Websites
      </p>
      {/* Cards Container */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {audienceData.map((card) => (
          <div
            key={card.id}
            className="bg-light-accent flex flex-col items-center rounded-lg p-6 text-center shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.title}
              className="mb-4 size-20 object-cover"
            />
            <span className="text-primary mb-2 rounded-full bg-red-50 px-3 py-1 text-sm font-semibold">
              {card.badge}
            </span>
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-muted-text mt-2 text-balance text-sm">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AudienceCards;

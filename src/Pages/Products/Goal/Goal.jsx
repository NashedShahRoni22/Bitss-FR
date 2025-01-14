import SectionTitle from "../../../components/SectionTitle";
import SectionContainer from "../../../components/shared/SectionContainer";
import { goals } from "../../../data/goals";

export default function Goal() {
  return (
    <SectionContainer>
      <SectionTitle>Our Prime Goal Ensuring Ultimate Security</SectionTitle>
      {/* Goals Container */}
      <div className="mx-auto mt-20 grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-5">
        {goals.map((goal, i) => (
          <div key={i} className="flex flex-col items-center gap-3.5">
            <img
              src={goal.icon}
              alt={goal.title}
              loading="lazy"
              className="size-20"
            />
            <h4 className="text-center font-medium capitalize">{goal.title}</h4>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

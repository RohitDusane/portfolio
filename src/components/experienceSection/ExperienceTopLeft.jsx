import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2013
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="11" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="25+" text="Publication" />
      </div>
      <p className="text-center">
        With 5 building data science, data analyst, machine learning projects.
      </p>
      <ExperienceInfo number="3"  text="End to end projects" />
    </div>
  );
};

export default ExperienceTopLeft;
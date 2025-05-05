import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2023
      </p>

      <div className="flex justify-center items-center gap-4">
        <p className="font-bold text-6xl text-lightBrown"></p>
        <ExperienceInfo number="8+" text="Projects" />
      </div>

      <p className="text-center">
        Hands-on experience in building responsive websites and real-world
        projects during internships, hackathons, and freelance work.
      </p>

      <ExperienceInfo number="6+" text="Hackathons" />
    </div>
  );
};

export default ExperienceTopLeft;

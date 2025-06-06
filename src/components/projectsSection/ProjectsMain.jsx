import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Shiksha Samagam",
    year: "Sep 2024",
    link: "https://github.com/shikshasamagam/shiksha_samagam",
    align: "right",
    image: "/images/website-img-1.jpg",
  },
  {
    name: "KitabGhar",
    year: "2023",
    link: "https://github.com/Rajanjha12/KitabGhar",
    align: "left",
    image: "/images/website-img-2.webp",
  },
  {
    name: "CodSoft Internship",
    year: "2023",
    link: "https://github.com/Rajanjha12/codsoft",
    align: "right",
    image: "/images/website-img-3.jpg",
  },
  {
    name: "Ankush Driving School",
    year: "2023",
    link: "https://github.com/Rajanjha12/Ankushdrivingschool",
    align: "left",
    image: "/images/website-img-4.jpg",
  },
  {
    name: "Lottery Game",
    year: "2023",
    link: "https://github.com/Rajanjha12/Lotterygame",
    align: "right",
    image: "/images/website-img-3.jpg",
  },
];
const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;

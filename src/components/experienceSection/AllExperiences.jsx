import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Intern",
    company: "CodSoft",
    date: "Jan 2024 – Mar 2024",
    responsibilities: [
      "Developed responsive websites using HTML, CSS, and JavaScript.",
      "Built dynamic components using C++ and React.",
      "Collaborated with mentors on real-world problem statements.",
      
    ],
  },
  {
    job: "Student Ambassador",
    company: "Let's Upgrade",
    date: "June 2024 – Aug 2024",
    responsibilities: [
      "Represented Let’s Upgrade in the student community.",
      "Connected with 300+ learners and tech professionals.",
      "Conducted sessions and webinars for developers.",
      "Won the Gold Award for excellence in outreach.",
    ],
  },
  {
    job: "Hackathon Finalist",
    company: "IITM Janakpuri",
    date: "Sep 2024",
    responsibilities: [
      "Secured Top 5 position among 1000+ participants.",
      "Presented 'Shiksha Samagam' – an educational web platform.",
      "Led frontend development for event and note modules.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center">
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden mx-4" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperiences;

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { TypeAnimation } from "react-type-animation";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      
      {/* Typing animation for job title */}
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        <TypeAnimation
          sequence={[
            "MERN Stack Web Developer", // first text
            2000, // wait 2s
            "Software Engineer",        // second text
            2000, // wait 2s
            "", // clears text
          ]}
          speed={50}
          deletionSpeed={40}
          repeat={Infinity}
        />
      </motion.h2>

      {/* Your name */}
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Rajan Kumar Jha <br className="sm:hidden md:block" />
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        A Passionate Web Developer and Quick Learner <br />
      </motion.p>
    </div>
  );
};

export default HeroText;

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-start relative p-4 overflow-hidden"
    >
      <img
  src="/images/me.jpg"
  alt="Rajan Kumar Jha"
  className="rounded-full border-4 border-orange-500 shadow-lg shadow-black/50 hover:scale-105 transition-all duration-300 ease-in-out object-face-cover object-top w-[500px] h-[500px] sm:w-[200px] sm:h-[200px] md:w-[430px] md:h-[430px]"
/>


      <div className="absolute -z-10 flex justify-center items-center animate-pulse left-0 bottom-0">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan-400 blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;

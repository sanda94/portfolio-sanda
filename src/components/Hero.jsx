import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/myprofile.jpg";
import { motion } from "framer-motion";

const Container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-neutral-900 p-4 lg:p-20 flex flex-col lg:flex-row items-center justify-center lg:justify-start space-y-8 lg:space-y-0 lg:space-x-8 pt-20"> {/* Added pt-20 for top padding */}
      {/* Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <motion.h1
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          variants={Container(1.2)}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-black-100 leading-tight mb-4 lg:mb-6"
        >
          Lahiru Sandaruwan
        </motion.h1>
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          className="bg-gradient-to-r from-pink-700 via-gray-500 to-purple-700 bg-clip-text text-3xl lg:text-5xl text-transparent block mb-4"
        >
          Full Stack Developer
        </motion.span>
        <motion.p
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          variants={Container(1.5)}
          initial="hidden"
          animate="visible"
          className="text-base sm:text-lg lg:text-xl text-black-300 leading-relaxed max-w-full lg:max-w-2xl mx-auto lg:mx-0 mb-6"
        >
          {HERO_CONTENT}
        </motion.p>
      </div>

      {/* Profile Picture */}
      <div className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-end">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          src={profilepic}
          alt="Lahiru Sandaruwan"
          className="max-w-xs sm:max-w-sm lg:max-w-md rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;

import { motion } from "framer-motion";
import aboutImg1 from "../assets/about 1.jpg";
import aboutImg2 from "../assets/about 2.jpg";
import aboutImg3 from "../assets/about 3.jpeg";
import aboutImg4 from "../assets/about 4.jpeg";
import aboutImg6 from "../assets/about 6.jpeg";
import aboutImg7 from "../assets/about 7.jpeg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  const images = [aboutImg1, aboutImg2, aboutImg3, aboutImg4, aboutImg6 , aboutImg7]; // Array of image paths

  return (
    <div className="border-b border-neutral-900 p-8 lg:p-20 bg-gray-900 text-gray-100">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl font-semibold text-white mb-10"
      >
        About <span className="text-white-400">Me</span>
      </motion.h2>

      <div className="flex flex-wrap justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
        {/* About Images */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex justify-center"
            >
              <img
                className="rounded-2xl shadow-lg w-full object-cover"
                src={img}
                alt={`About ${index + 1}`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* About Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-6 lg:p-8 flex justify-center items-center"
        >
          <p className="text-lg lg:text-xl leading-relaxed font-light text-gray-300">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

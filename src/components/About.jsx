import { motion } from "framer-motion";
import aboutImg1 from "../assets/about 1.jpg";
import aboutImg2 from "../assets/about 2.jpg";
import aboutImg3 from "../assets/about 3.jpeg";
import aboutImg4 from "../assets/about 4.jpeg";
import aboutImg6 from "../assets/about 6.jpeg";
import aboutImg7 from "../assets/about 7.jpeg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  const images = [aboutImg1, aboutImg2, aboutImg3, aboutImg4, aboutImg6, aboutImg7]; // Array of image paths

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

      {/* Images Section */}
      <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-10">
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
          >
            <img
              className="rounded-2xl shadow-lg w-full object-cover"
              src={img}
              alt={`About ${index + 1}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Description Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="text-center lg:text-left mx-auto max-w-4xl"
      >
        <p className="text-lg lg:text-xl leading-relaxed font-light text-gray-300">
          {ABOUT_TEXT}
        </p>
      </motion.div>
    </div>
  );
};

export default About;

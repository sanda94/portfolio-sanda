import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 p-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }} 
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap justify-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4 text-center" // Aligning content to center
            >
              <p className="mb-2 text-sm text-neutral-400 font-bold text-center">{education.year}</p> {/* Making year bold */}
            </motion.div>
            <div className="w-full lg:w-3/4">
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="mb-2 text-sm text-neutral-400"
              >
                <h1 className="mb-5 text-sm text-neutral-800 font-bold">{education.role}</h1>
                <p>{education.institute}</p>
                <p>{education.description}</p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

import aboutImg from "../assets/about 1.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 p-4">
      <h2 className="my-20 text-center text-neutral-500 text-4xl"> About 
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap justify-center">
        < motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{ opacity:0,x:-100}}
        transition={{ duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="About" />
          </div>
        </motion.div>
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8 flex justify-center items-center">
          <p className="text-neutral-500">{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

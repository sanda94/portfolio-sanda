import aboutImg from "../assets/about 1.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 p-4">
      <h2 className="my-20 text-center text-neutral-300 text-4xl"> About 
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="About" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center items-center">
          <p className="text-neutral-500">{ABOUT_TEXT}</p>
        </div>
      </div>
    </div>
  );
};

export default About;

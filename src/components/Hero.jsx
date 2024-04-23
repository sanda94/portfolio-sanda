import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/myprofile.jpg";

const Hero = () => {
  return (
    <div className="border-neutral-900 p-4 lg:md-35 flex flex-wrap items-center justify-center lg:justify-start">
      <div className="w-full lg:w-1/2">
        <h1 className="pd-16 text-6xl font-thing tracking-tight lg:mt-16 lg:text-8xl">
          Lahiru Sandaruwan
        </h1>
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent block mt-4">
          Full Stack Developer
        </span>
        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
          {HERO_CONTENT}
        </p>
      </div>
      <div className="w-full lg:w-1/2 lg:p-8 flex justify-end">
        <img src={profilepic} alt="Lahiru Sandaruwan" className="max-w-full rounded-2xl" />
      </div>
    </div>
  );
};

export default Hero;

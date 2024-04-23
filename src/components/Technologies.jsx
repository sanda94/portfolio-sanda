import { FaLinkedin } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs, FaGit } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 p-4">
      <h2 className="my-8 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="rounded-full border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-full border-4 border-neutral-800 p-4">
          <FaLinkedin className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-full border-4 border-neutral-800 p-4">
          <DiRedis className="text-7xl text-red-800" />
        </div>
        <div className="rounded-full border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-full border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded-full border-4 border-neutral-800 p-4">
          <FaGit className="text-7xl text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;

import { PROJECTS } from "../constants"
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pd-4 ">
        <motion.h2  whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }} className="my-20  text-center text-4xl ">Project</motion.h2>
      <div> 
        {PROJECTS.map ((Project,index ) =>  (
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{ opacity:0,x:-100}}
        transition={{ duration:0.5}} 
        key ={index} className="mb-8 flex flex-wrap  lg:justify-center">
            <div  className="w full lg:w-1/4 ">
        <img src={Project.image} width= {150} height={150} alt={Project.title} className ="mb-6 rounded" />
        </div>
        <div className="w-full max-w-xl lg:w-3/4"> 
        <h6 className="mb-2 font-semibold">{Project.title}</h6>
        <p className="mb-4 text-neutral-400">{Project.description}</p>
        {Project.technologies.map((tech, index) => (<span key ={index} className="mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-300"> {tech}</span>))}
        <div/>
        </div>
        </motion.div>
       ))}
    </div>
    </div>
  )
}

export default Project

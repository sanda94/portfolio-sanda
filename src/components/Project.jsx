import { PROJECTS } from "../constants"

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pd-4 ">
        <h2 className="my-20  text-center text-4xl ">Project</h2>
      <div> 
        {PROJECTS.map ((Project,index ) =>  (
        <div key ={index} className="mb-8 flex flex-wrap  lg:justify-center">
            <div  className="w full lg:w-1/4 ">
        <img src={Project.image} width= {150} height={150} alt={Project.title} className ="mb-6 rounded" />
        </div>
        <div className="w-full max-w-xl lg:w-3/4"> 
        <h6 className="mb-2 font-semibold">{Project.title}</h6>
        <p className="mb-4 text-neutral-400">{Project.description}</p>
        <div/>
        </div>
        </div>
       ))}
    </div>
    </div>
  )
}

export default Project
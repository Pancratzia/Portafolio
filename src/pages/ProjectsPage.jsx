import { Link } from "react-router-dom"
import MainLayout from "../components/Layouts/MainLayout"
import { PROJECTS } from "../data/data"
import { FaGithub, FaEye } from "react-icons/fa6"

const ProjectsPage = () => {
  return (
    <MainLayout title={"< My Projects />"} pageName={"Projects"}>
      <main className="my-5">
        <div className="container">
            <h3 className="font-bold fluid-2xl uppercase text-center mb-5 italic   text-yellow-600">My Projects</h3>

            <div className="mt-2 border-yellow-600 border rounded-xl p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {PROJECTS.map((project, index) => (
                <div key={index} className="mb-5 text-slate-300">
                  <h3 className="font-bold fluid-lg uppercase text-center mb-5">{project.title}</h3>

                  <div className="grid grid-cols-2 gap-5">
                    <div>

                      <img src={`./img/projects/${project.image}.png`} alt={project.title} className="rounded-xl" />

                    </div>

                    <div>

                      <p className="text-justify">{project.description}</p>

                      <div className="grid grid-cols-2 gap-5">
                        <Link to={project.github} target="_blank" rel="noreferrer">
                          <FaGithub className="w-8 h-8 md:w-10 md:h-10 text-slate-300" />
                        </Link>

                        <Link to={project.demo} target="_blank" rel="noreferrer">
                          <FaEye className="w-8 h-8 md:w-10 md:h-10 text-slate-300" />
                        </Link>
                      </div>

                    </div>

                  </div>

                </div>
              ))}
            </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default ProjectsPage
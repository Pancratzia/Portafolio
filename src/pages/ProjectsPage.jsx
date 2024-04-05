import MainLayout from "../components/Layouts/MainLayout"
import { PROJECTS } from "../data/data"
import Project from "../components/Projects/Project"

const ProjectsPage = () => {
  return (
    <MainLayout title={"< My Projects />"} pageName={"Projects"}>
      <main className="my-5">
        <div className="container">
            <h3 className="font-bold fluid-2xl uppercase text-center mb-5 italic   text-yellow-600">My Projects</h3>

            <div className="mt-2 border-yellow-600 border rounded-xl p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            
              {PROJECTS.map((project, index) => (
                <Project key={index} project={project} />
              ))}
            </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default ProjectsPage;
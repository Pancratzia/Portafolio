import MainLayout from "../components/Layouts/MainLayout"
import { PROJECTS } from "../data/data"
import Project from "../components/Projects/Project"
import YellowCard from "../components/Projects/YellowCard"

const ProjectsPage = () => {
  return (
    <MainLayout title={"< My Projects />"} pageName={"Projects"}>
      <main className="my-5">
        <div className="container">
            <h3 className="font-bold fluid-2xl uppercase text-center mb-5 italic   text-yellow-600">My Projects</h3>

            <YellowCard>
            {PROJECTS.map((project, index) => (
                <Project key={index} project={project} />
              ))}
            </YellowCard>

            <YellowCard>
              
            </YellowCard>
        </div>
      </main>
    </MainLayout>
  )
}

export default ProjectsPage;
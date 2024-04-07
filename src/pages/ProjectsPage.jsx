import MainLayout from "../components/Layouts/MainLayout";
import { PROJECTS, EXTRA_PROJECTS } from "../data/data";
import Project from "../components/Projects/Project";
import YellowCard from "../components/Projects/YellowCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./../components/Projects/swiperOverride.css";
import { Autoplay } from "swiper/modules";

const ProjectsPage = () => {
  return (
    <MainLayout title={"< My Projects />"} pageName={"Projects"}>
      <main className="my-5">
        <div className="container">
          <h3 className="font-bold fluid-2xl uppercase text-center mb-5 italic   text-yellow-600">
            My Projects
          </h3>

          <YellowCard>
            {PROJECTS.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </YellowCard>

          <h3 className="font-bold fluid-2xl uppercase text-center my-5 italic  text-yellow-600">
            Extra Projects
          </h3>

          <YellowCard grid={false}>
            <Swiper
              navigation={true}
              centeredSlides={true}
              grabCursor={true}
              loop
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="text-slate-300 container bg-yell"
            >
              {EXTRA_PROJECTS.map((project, index) => (
                <SwiperSlide key={index}>
                  <Project project={project} isPrincipal={false} />
                </SwiperSlide>
              ))}
            </Swiper>
          </YellowCard>
        </div>
      </main>
    </MainLayout>
  );
};

export default ProjectsPage;

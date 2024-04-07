import MainLayout from "../components/Layouts/MainLayout";
import { PROJECTS } from "../data/data";
import Project from "../components/Projects/Project";
import YellowCard from "../components/Projects/YellowCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./../components/Projects/swiperOverride.css";

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

          <h3 className="font-bold fluid-2xl uppercase text-center my-5 italic   text-yellow-600">
            Extra Projects
          </h3>

          <YellowCard grid={false}>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="text-slate-300 container"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </YellowCard>
        </div>
      </main>
    </MainLayout>
  );
};

export default ProjectsPage;

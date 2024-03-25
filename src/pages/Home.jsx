import AnimatedText from "../components/utils/AnimatedText";
import RoundedPicture from "../components/utils/RoundedPicture";

const Home = () => {
  return (
    <div
      className="flex items-center justify-center flex-col 
    container my-0 mx-auto min-h-screen"
    >
      {/* main title */}
      <header className="mb-6 flex items-center justify-center flex-col">
        <h1 className="fluid-4xl py-1 md:py-5 font-extrabold">
          <AnimatedText text={"< Laura Ortega />"} />
        </h1>
        <h3 className="mt-5 fluid-2xl font-bold inline-block text-transparent text-stroke text-stroke-white ">
          FullStack Web Developer
        </h3>
      </header>

      <div className="w-80 h-80 md:w-96 md:h-96">
        <RoundedPicture
          imageUrl="./img/personal/profile"
          description="Laura Ortega - FullStack Web Developer Picture"
        />
      </div>
    </div>
  );
};

export default Home;

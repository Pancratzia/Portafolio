import RoundedPicture from "../components/utils/RoundedPicture";

const Home = () => {
  return (
    <div
      className="flex items-center justify-center flex-col 
    container my-0 mx-auto min-h-screen"
    >
      {/* main title */}
      <header className="mb-6 flex items-center justify-center flex-col">
        <h1 className="text-4xl md:text-6xl py-1 md:py-5 font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.800),theme(colors.indigo.500),theme(colors.yellow.600),theme(colors.indigo.500),theme(colors.purple.800))] bg-[length:200%_auto] animate-gradient">
          {"< Laura Ortega />"}
        </h1>
        <h3 className="mt-5 text-2xl md:text-3xl font-bold inline-block text-transparent text-stroke text-stroke-white ">
          FullStack Web Developer
        </h3>
      </header>

      <div className="w-80 h-80 md:w-96 md:h-96">
        <RoundedPicture
          imageUrl="./img/personal/profile"
          description="Picture with an animated gradient"
        />
      </div>
    </div>
  );
};

export default Home;

import { motion } from "framer-motion";
import RoundedPicture from "../utils/RoundedPicture";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="container my-0 mx-auto grid md:grid-cols-[repeat(1,1fr)] lg:grid-cols-[2fr_3fr] items-center gap-2 lg:gap-10">
    <motion.div
      className="w-64 h-64 my-5 mx-auto lg:w-96 lg:h-96"
      initial={{ rotate: 45, scale: 0.5, opacity: 0 }}
      animate={{ rotate: 0, scale: 1, opacity: 1 }}
      exit={{ rotate: 45, scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <RoundedPicture
        imageUrl="./img/personal/profile"
        description="Laura Ortega - FullStack Web Developer Picture"
      />
    </motion.div>

    <div className="border-2 border-yellow-600 p-5 rounded-xl text-indigo-100">
      <p className="text-center text-slate-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi libero quis explicabo possimus debitis, illo quo dignissimos perspiciatis sapiente cupiditate quos quibusdam, inventore voluptate quas officiis cum molestias atque vero eos. Vel, dolores saepe ipsum quisquam laudantium at veniam reiciendis minima optio distinctio culpa pariatur dolorum quae soluta. Illo quos veritatis cumque asperiores, ut dolores dolor? Tempora blanditiis debitis consequuntur quis a officia unde aspernatur odit ad animi, necessitatibus doloribus.
      </p>

      <div className="flex justify-center mt-5 py-2">
        <Link className="font-bold uppercase text-slate-100 hover:text-purple-200 " to={"https://drive.google.com/file/d/1WLwEsZ-HxfsULa-ulTUeLAwWk9sYMwou/view"} target="_blank"> Read My CV </Link>
      </div>
    </div>

    
  </div>
  )
}

export default AboutMe
import { Link } from "react-router-dom";

const InfoCard = () => {
  return (
    <div className="border-2 border-yellow-600 p-5 rounded-xl text-indigo-100">
      <p className="text-center text-slate-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi libero
        quis explicabo possimus debitis, illo quo dignissimos perspiciatis
        sapiente cupiditate quos quibusdam, inventore voluptate quas officiis
        cum molestias atque vero eos. Vel, dolores saepe ipsum quisquam
        laudantium at veniam reiciendis minima optio distinctio culpa pariatur
        dolorum quae soluta. Illo quos veritatis cumque asperiores, ut dolores
        dolor? Tempora blanditiis debitis consequuntur quis a officia unde
        aspernatur odit ad animi, necessitatibus doloribus.
      </p>

      <div className="flex justify-center mt-5 py-2">
        <Link
          className="font-bold uppercase text-slate-100 hover:text-purple-200 "
          to={
            "https://drive.google.com/file/d/1WLwEsZ-HxfsULa-ulTUeLAwWk9sYMwou/view"
          }
          target="_blank"
        >
          {" "}
          Read My CV{" "}
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;

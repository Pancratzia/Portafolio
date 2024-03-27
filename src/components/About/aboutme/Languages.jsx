import { languages } from "../../../data/data";

const Languages = () => {
  return (
    <div className="rounded-xl p-5 text-slate-100 border-2 border-indigo-100">
      <h3 className="font-bold fluid-lg uppercase text-center mb-5">
        Languages
      </h3>

      <ul className="grid grid-cols-2 gap-5">
        {languages.map(({ text, level }, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b border-slate-300 pb-3"
          >
            <span className="font-bold">{text}</span>
            <span className="text-yellow-600">{level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;

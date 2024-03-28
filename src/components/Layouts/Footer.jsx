import { Link } from "react-router-dom";
import Socials from "../Home/Socials";

const Footer = () => {
  return (
    <footer className="text-center text-slate-100 md:border-t md:mt-8 border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center container">
        <Socials />
        <section>
          <p className="opacity-90">
            &copy; {new Date().getFullYear()}. All Rights Reserved
          </p>
          <small className="opacity-70">
            By{" "}
            <Link
              to="https://github.com/pancratzia"
              target="_blank"
              className="underline"
            >
              Laura Ortega
            </Link>
          </small>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

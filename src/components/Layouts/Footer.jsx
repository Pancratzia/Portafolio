import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div className="text-center mt-5 text-slate-100">
      <p className="pt-5 opacity-90">&copy; {new Date().getFullYear()}. All Rights Reserved</p>
      <small className="opacity-70">By <Link to="https://github.com/pancratzia" target="_blank" className="underline">Laura Ortega</Link></small>
    </div>
  )
}

export default Footer
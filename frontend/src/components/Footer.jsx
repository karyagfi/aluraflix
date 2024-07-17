import { FaHome, FaPlusCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="flex justify-center p-2 border-t-2 border-blue-400 fixed md:relative bottom-0 w-full bg-slate-800">
      <img src="./images/logo.svg" alt="" className="w-32 hidden md:block" />
      <div className="md:hidden flex gap-8">
        <Link to="/" className="bg-inherit text-blue-400 border border-blue-400 px-6 py-1 rounded-lg flex items-center gap-2">
          <FaHome /> HOME
        </Link>
        <Link to="/create" className="text-2xl items-center p-2">
          <FaPlusCircle /> 
        </Link>
      </div>
    </footer>
  )
}

export default Footer
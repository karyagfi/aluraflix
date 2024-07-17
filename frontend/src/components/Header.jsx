import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="hidden md:flex justify-between bg-slate-950 items-center p-4">
      <img className="w-32" src="/images/logo.svg" alt="" />
      <div className="flex gap-2"> 
        <Link to="/" className="bg-inherit text-blue-400 border border-blue-400 px-6 py-1 rounded text-xs">
          HOME
        </Link>
        <Link to="/create" className="bg-inherit text-white border border-white px-6 py-1 rounded text-xs">
          NUEVO VIDEO
        </Link>
      </div>
    </header>
  )
}

export default Header
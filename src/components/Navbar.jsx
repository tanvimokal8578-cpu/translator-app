import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg p-4 flex justify-center gap-10 text-blue-600 font-semibold text-lg">
      <Link className="hover:text-purple-600 transition" to="/">Home</Link>
<Link className="hover:text-purple-600 transition" to="/about">About</Link>
<Link className="hover:text-purple-600 transition" to="/contact">Contact</Link>
    </nav>
  )
}
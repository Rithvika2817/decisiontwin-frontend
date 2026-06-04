import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-6 border-b border-white/10 gap-4">

      <h1 className="text-2xl md:text-3xl font-bold">

        DecisionTwin

      </h1>

      <div className="flex flex-wrap justify-center gap-3">

        <Link
          to="/upload"
          className="text-gray-300 hover:text-white"
        >
          Upload
        </Link>

        <Link
          to="/dashboard"
          className="text-gray-300 hover:text-white"
        >
          Dashboard
        </Link>
        <Link
  to="/chat"
  className="text-gray-300 hover:text-white"
>
  AI Copilot
</Link>

      </div>

    </nav>

  );

}

export default Navbar;
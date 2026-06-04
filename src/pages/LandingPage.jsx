import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function LandingPage() {
  return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen overflow-hidden bg-[#050816] text-white"
  >

      <div className="absolute left-[-100px] top-[100px] h-[300px] w-[300px] rounded-full bg-purple-600 opacity-30 blur-[120px]"></div>

      <div className="absolute right-[-100px] top-[200px] h-[300px] w-[300px] rounded-full bg-orange-500 opacity-20 blur-[120px]"></div>

      <nav className="relative z-10 flex flex-col md:flex-row items-center justify-between border-b border-white/10 bg-black/20 px-4 md:px-10 py-6 gap-4">

        <h1 className="text-3xl font-bold">
          DecisionTwin
        </h1>

        <div className="flex flex-wrap justify-center gap-3">

  <Link
  to="/login"
  className="
    rounded-lg
    border
    border-white/20
    px-5
    py-2
    hover:bg-white
    hover:text-black
    transition-all
    duration-300
    hover:scale-105
  "
>
  Login
</Link>

  <Link
  to="/signup"
  className="
    rounded-lg
    bg-gradient-to-r
    from-orange-500
    to-pink-500
    px-5
    py-2
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-lg
    hover:shadow-pink-500/30
    active:scale-95
  "
>
  Sign Up
</Link>


        </div>

      </nav>

        <section className="relative z-10 grid min-h-[90vh] items-center gap-12 px-4 md:px-10 py-12 md:py-20 md:grid-cols-2">
        <div>

          <div className="mb-6 inline-block rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2">
            AI-Powered Decision Intelligence
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">

            AI-Powered

            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {" "}Business Decision
            </span>

            Simulator

          </h1>

          <p className="mt-8 text-gray-300 text-base md:text-lg">
            Securely analyze business strategies,
            compare scenarios and gain AI-powered insights.
          </p>

        </div>

        <div className="rounded-3xl bg-white/5 p-4 md:p-6 backdrop-blur-xl">

          <div className="grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl bg-black/30 p-5">
              <p className="text-gray-400">Revenue</p>
              <h3 className="text-3xl font-bold">$2.4M</h3>
              <p className="text-green-400">+12%</p>
            </div>

            <div className="rounded-2xl bg-black/30 p-5">
              <p className="text-gray-400">Risk</p>
              <h3 className="text-3xl font-bold">Low</h3>
            </div>

            <div className="rounded-2xl bg-black/30 p-5">
              <p className="text-gray-400">Confidence</p>
              <h3 className="text-3xl font-bold">85%</h3>
            </div>

          </div>

        </div>

      </section>

        </motion.div>
  );
}

export default LandingPage;
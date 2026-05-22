import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white">

      <div className="w-[400px] rounded-3xl bg-white/5 p-8 backdrop-blur-xl border border-white/10">

        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg bg-black/30 p-3 outline-none border border-white/10"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg bg-black/30 p-3 outline-none border border-white/10"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg bg-black/30 p-3 outline-none border border-white/10"
          />

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 p-3 font-bold"
          >
            Sign Up
          </button>

        </form>

        <p className="mt-5 text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-400">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;
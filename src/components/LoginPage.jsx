import React, { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const response = await API.post("/api/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      setIsLoading(false);
      navigate("/account");
    } catch (error) {
      setIsLoading(false);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FCF7E6]">
      <div
        className="login px-[12.5vw] max-sm:px-[4vw] w-[50vw] max-sm:w-full 
      pt-[30vh] max-sm:pt-[5vh] pb-[10vh] max-sm:pb-[3vh]"
      >
        <h1 className="font-[headline] text-[4vw] max-sm:text-[9vw] text-center mb-[5vh]">
          Login
        </h1>

        {/* Show error message*/}
        {error && <p className="text-red-500 text-center mb-[2vh]">{error}</p>}

        {isLoading && (
          <p className="text-center mb-[2vh]">
            Verifying... <span className="loader"></span>
          </p>
        )}

        <form onSubmit={handleLogin}>
          <div className="input flex flex-col gap-[8vh] max-sm:gap-[5vh]">
            <input
              className="bg-transparent w-[25vw] max-sm:w-full outline-none border-b-[1px] border-black 
              font-[medium] placeholder:text-black max-sm:placeholder:text-[4vw] placeholder:font-[medium]"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
            <input
              className="bg-transparent w-[25vw] max-sm:w-full outline-none border-b-[1px] border-black 
              font-[medium] placeholder:text-black max-sm:placeholder:text-[4vw] placeholder:font-[medium]"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <h5
            className="font-[light] uppercase tracking-[3px] max-sm:tracking-[0.5vw] text-[0.9vw] max-sm:text-[3vw] mt-[5vh] 
            text-center underline underline-offset-[0.3vw] cursor-pointer"
          >
            Forgot Password?
          </h5>

          {/* Submit button triggers form submission */}
          <button
            type="submit"
            className="button w-full mt-[5vh] py-[1vh] bg-[#FCF7E6] overflow-hidden border-[1px] border-black 
            rounded-[5vw] uppercase font-[light] text-[0.9vw] max-sm:text-[3vw] tracking-[2px]"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
            <div className="button-bg"></div>
          </button>
        </form>

        {/* Register Link */}
        <p className="font-[light] text-[1.1vw] max-sm:text-[4vw] mt-[5vh] max-sm:mt-[3vh] text-center">
          Don't have an account?
        </p>
        <Link to={"/register"}>
          <button
            className="button w-full mt-[5vh] max-sm:mt-[3vh] py-[1vh] bg-[#FCF7E6] overflow-hidden border-[1px] border-black 
            rounded-[5vw] uppercase font-[light] text-[0.9vw] max-sm:text-[3vw] tracking-[2px]"
          >
            Create Account
            <div className="button-bg"></div>
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;

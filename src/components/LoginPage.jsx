import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="w-full min-h-screen bg-[#FCF7E6]">
      <div className="login px-[12.5vw] w-[50vw] pt-[30vh]">
        <h1 className="font-[headline] text-[4vw] text-center mb-[5vh]">
          Login
        </h1>
        <div className="input flex flex-col gap-[8vh]">
          <input
            className="bg-transparent w-[25vw] outline-none border-b-[1px] border-black font-[medium]
            placeholder:text-black placeholder:font-[medium]"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="bg-transparent w-[25vw] outline-none border-b-[1px] border-black font-[medium] 
            placeholder:text-black placeholder:font-[medium]"
            type="password"
            placeholder="Enter password"
          />
        </div>
        <h5
          className="font-[light] uppercase tracking-[3px] text-[0.9vw] mt-[5vh] text-center 
        underline underline-offset-[0.3vw] cursor-pointer"
        >
          Forgot Password?
        </h5>
        <button
          className="button w-full mt-[5vh] py-[1vh] bg-[#FCF7E6] overflow-hidden 
        border-[1px] border-black rounded-[5vw] uppercase font-[light] text-[0.9vw] tracking-[2px]"
        >
          Login
          <div className="button-bg"></div>
        </button>
        <p className="font-[light] text-[1.1vw] mt-[5vh] text-center">
          Don't have an account?
        </p>
        <Link to={"/register"}>
          <button
            className="button w-full mt-[5vh] py-[1vh] bg-[#FCF7E6] overflow-hidden 
        border-[1px] border-black rounded-[5vw] uppercase font-[light] text-[0.9vw] tracking-[2px]"
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

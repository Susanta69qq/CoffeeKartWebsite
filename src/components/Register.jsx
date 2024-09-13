import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="w-full min-h-screen bg-[#FCF7E6]">
      <div className="register px-[12.5vw] w-[60vw] pt-[14vh]">
        <h1 className="font-[headline] text-[4vw] mb-[5vh]">Create account</h1>
        <div className="input flex flex-col gap-[8vh]">
          <input
            className="bg-transparent w-[30vw] outline-none border-b-[1px] border-black font-[medium]
            placeholder:text-black placeholder:font-[medium]"
            type="text"
            placeholder="First Name*"
          />
          <input
            className="bg-transparent w-[30vw] outline-none border-b-[1px] border-black font-[medium]
            placeholder:text-black placeholder:font-[medium]"
            type="text"
            placeholder="Last Name*"
          />
          <input
            className="bg-transparent w-[30vw] outline-none border-b-[1px] border-black font-[medium]
            placeholder:text-black placeholder:font-[medium]"
            type="email"
            placeholder="Email Address*"
          />
          <input
            className="bg-transparent w-[30vw] outline-none border-b-[1px] border-black font-[medium] 
            placeholder:text-black placeholder:font-[medium]"
            type="password"
            placeholder="Password*"
          />
        </div>
        {/* <h5
          className="font-[light] uppercase tracking-[3px] text-[0.9vw] mt-[5vh] text-center 
        underline underline-offset-[0.3vw] cursor-pointer"
        >
          Forgot Password?
        </h5> */}
        <div className="flex flex-col w-[30vw]">
          <button
            className="button w-[30vw] mt-[5vh] py-[1vh] bg-[#FCF7E6] overflow-hidden 
        border-[1px] border-black rounded-[5vw] uppercase font-[light] text-[0.9vw] tracking-[2px]"
          >
            create
            <div className="button-bg"></div>
          </button>
          <p className="font-[light] text-[1.1vw] mt-[5vh] text-center">
            Already have an account?
          </p>
          <Link to={"/login"}>
            <button
              className="button w-[30vw] mt-[5vh] py-[1vh] bg-[#FCF7E6] overflow-hidden 
        border-[1px] border-black rounded-[5vw] uppercase font-[light] text-[0.9vw] tracking-[2px]"
            >
              Login Account
              <div className="button-bg"></div>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;

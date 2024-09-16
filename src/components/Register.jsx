import React, { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/api/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      setError("Email id already registered. Please try with other email id.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FCF7E6]">
      <div className="register px-[12.5vw] max-sm:px-[4vw] w-[60vw] max-sm:w-full 
      pt-[14vh] max-sm:pt-[5vh] pb-[10vh] max-sm:pb-[3vh]">
        <h1 className="font-[headline] text-[4vw] max-sm:text-[9vw] mb-[5vh] max-sm:text-center">Create account</h1>

        {/* Show error message */}
        {error ? (
          <p className="text-red-500 text-center mb-[2vh]">{error}</p>
        ) : (
          <p className="text-center mb-[2vh]">Loading...</p>
        )}

        {/* Form to handle registration */}
        <form onSubmit={handleRegister}>
          <div className="input flex flex-col gap-[8vh] max-sm:gap-[5vh]">
            <input
              className="bg-transparent w-[30vw] max-sm:w-full outline-none border-b-[1px] border-black font-[medium] 
              placeholder:text-black placeholder:font-[medium] max-sm:placeholder:text-[4vw]"
              type="text"
              placeholder="First Name*"
              value={firstName} // Bind firstName state
              onChange={(e) => setFirstName(e.target.value)} // Update firstName state on change
              required
            />
            <input
              className="bg-transparent w-[30vw] max-sm:w-full outline-none border-b-[1px] border-black font-[medium] 
              placeholder:text-black placeholder:font-[medium] max-sm:placeholder:text-[4vw]"
              type="text"
              placeholder="Last Name*"
              value={lastName} // Bind lastName state
              onChange={(e) => setLastName(e.target.value)} // Update lastName state on change
              required
            />
            <input
              className="bg-transparent w-[30vw] max-sm:w-full outline-none border-b-[1px] border-black font-[medium] 
              placeholder:text-black placeholder:font-[medium] max-sm:placeholder:text-[4vw]"
              type="email"
              placeholder="Email Address*"
              value={email} // Bind email state
              onChange={(e) => setEmail(e.target.value)} // Update email state on change
              required
            />
            <input
              className="bg-transparent w-[30vw] max-sm:w-full outline-none border-b-[1px] border-black font-[medium] 
              placeholder:text-black placeholder:font-[medium] max-sm:placeholder:text-[4vw]"
              type="password"
              placeholder="Password*"
              value={password} // Bind password state
              onChange={(e) => setPassword(e.target.value)} // Update password state on change
              required
            />
          </div>

          {/* Register button that triggers form submission */}
          <div className="flex flex-col w-[30vw] max-sm:w-full">
            <button
              type="submit" // Form submission handled by handleRegister
              className="button w-[30vw] max-sm:w-full mt-[5vh] py-[1vh] bg-[#FCF7E6] overflow-hidden 
              border-[1px] border-black 
              rounded-[5vw] uppercase font-[light] text-[0.9vw] max-sm:text-[3vw] tracking-[2px]"
            >
              Create
              <div className="button-bg"></div>
            </button>
            <p className="font-[light] text-[1.1vw] max-sm:text-[4vw] mt-[5vh] max-sm:mt-[3vh] text-center">
              Already have an account?
            </p>
            <Link to={"/login"}>
              <button className="button w-[30vw] max-sm:w-full mt-[5vh] max-sm:mt-[3vh] py-[1vh] bg-[#FCF7E6] 
              overflow-hidden border-[1px] 
              border-black rounded-[5vw] uppercase font-[light] text-[0.9vw] max-sm:text-[3vw] tracking-[2px]">
                Login
                <div className="button-bg"></div>
              </button>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Register;

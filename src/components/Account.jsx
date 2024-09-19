import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import { AuthContext } from "../AuthContext";
import Footer from "./Footer";
import { useCart } from "../CartContext";

function Account() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);
  const { setCart } = useCart();

  const fetchData = async () => {
    try {
      const response = await API.get("/api/auth/me");
      setName(response.data.name);
      setEmail(response.data.email);
    } catch (error) {
      setError("Failed to fetch user data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("cart");
      setCart([]);
      setIsAuthenticated(false);
      console.log("Navigating to /login");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      setError("Logout failed. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FCF7E6]">
      <div
        className="content w-full px-[2vw] pt-[10vh] max-sm:pt-[2vh] flex 
      max-sm:flex-col-reverse gap-[5vw] items-start pb-[10vh] max-sm:pb-[2vh]"
      >
        <div className="left">
          <h5 className="font-[light] text-[0.9vw] max-sm:text-[4vw] uppercase tracking-[3px]">
            Account
          </h5>
          <div className="max-sm:flex max-sm:flex-col max-sm:py-[2vh] max-sm:gap-[2vh]">
            {[
              "My Account",
              "Personal & Address.",
              "My Orders.",
              "My Subscriptions.",
              "Need Help?",
              "Change Password",
              "Logout",
            ].map((item, index) => (
              <div key={index}>
                <Link
                  className="font-[headline] text-[2.75vw] max-sm:text-[5.5vw] max-sm:opacity-100 opacity-25 transition-opacity 
                duration-300 hover:opacity-100 
                hover:border-b-[2px] hover:border-b-black cursor-pointer"
                  to={item === "My Orders." ? "/my-orders" : "/"} // Change this line
                  onClick={item === "Logout" ? handleLogout : undefined}
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <h3 className="font-[headline] text-[2vw] max-sm:text-[5vw] mb-[5vh] max-sm:mb-[2vh]">
            Account Details.
          </h3>
          <div
            className="userDetails w-[60vw] max-sm:w-[96vw] py-[5vh]   
          max-sm:text-[5vw] max-sm:py-[2vh] border-t-[1px] border-black 
          flex flex-col gap-[2.5vh] max-sm:gap-[1vh]"
          >
            <h4 className="font-[medium]">Name: {name || "Loading..."}</h4>
            <h4 className="font-[medium]">Email: {email || "Loading..."}</h4>
            {error && <h4 className="font-[medium] text-red-500">{error}</h4>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Account;

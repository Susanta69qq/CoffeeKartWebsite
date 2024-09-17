import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [cartToggle, setCartToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(null);
  const [isCoffeeHovered, setIsCoffeeHovered] = useState(false);
  const [isEquipmentHovered, setIsEquipmentHovered] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCartMenu = () => {
    setCartOpen(!cartOpen);
  };

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
    if (cartToggle) setCartToggle(false);
  };

  const toggleCart = () => {
    setCartToggle(!cartToggle);
    if (menuToggle) setMenuToggle(false);
  };

  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  // const handleMouseEnter = (item) => {
  //   if (item === "Coffee") setIsCoffeeHovered(true);
  //   if (item === "Equipment") setIsEquipmentHovered(true);
  // };

  // const handleMouseLeave = (item) => {
  //   if (item === "Coffee") setIsCoffeeHovered(false);
  //   if (item === "Equipment") setIsEquipmentHovered(false);
  // };

  const mobileView = (
    <div
      className={`w-full max-sm:px-[3vw] max-sm:py-[1vh] flex justify-between 
      ${menuToggle ? "bg-white" : "bg-[#F5F0DF]"}`}
    >
      <div className="nav flex items-center max-sm:gap-[20vw]">
        <span onClick={toggleMenu} className="menu text-[6vw] relative">
          <i class="ri-menu-line"></i>
        </span>

        <div
          className={`w-[90vw] h-full bg-[#F5F0DF] absolute top-0 left-0
            rounded-tr-[50px] rounded-br-[50px] max-sm:px-[3vw] max-sm:py-[2vh]
            ${
              menuToggle
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-100%]"
            }
            transition-all duration-500 ease-in-out max-sm:z-[10]`}
        >
          <div className="header flex justify-end">
            <img
              onClick={toggleMenu}
              className="max-sm:w-[6vw]"
              src="./images/close.svg"
              alt=""
            />
          </div>
          <div className="border-b-[1px] border-[#000] max-sm:mt-[2vh]"></div>
          <div className="contents">
            {[
              "All products",
              "Subscribe",
              "Coffee",
              "Equipment",
              "Locations",
            ].map((item, index) => (
              <div key={index} className="max-sm:py-[2vh]">
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="font-[medium]"
                >
                  {item}
                </Link>
                <div className="border-b-[1px] border-[#000] max-sm:mt-[2vh] opacity-20"></div>
              </div>
            ))}
            <div className="help max-sm:mt-[2vh]">
              <p>Help</p>
              <div className="border-b-[1px] border-[#000] max-sm:mt-[1vh]"></div>
              <div className="faqs max-sm:py-[1.5vh] flex items-center gap-[3vw]">
                <img src="./images/question.svg" alt="" />
                <h5 className="font-[medium]">Help & FAQs</h5>
              </div>
              <div className="border-b-[1px] border-[#000]  opacity-20"></div>
              <div className="faqs max-sm:py-[1.5vh] flex items-center gap-[3vw]">
                <img src="./images/message.svg" alt="" />
                <h5 className="font-[medium]">Talk to us</h5>
              </div>
              <div className="border-b-[1px] border-[#000]  opacity-20"></div>
            </div>
            <div className="socialLinks flex gap-[5vw] justify-center max-sm:mt-[3vh]">
              <img
                className="max-sm:w-[4vw]"
                src="./images/facebook.svg"
                alt=""
              />
              <img
                className="max-sm:w-[6vw]"
                src="./images/instagram.svg"
                alt=""
              />
              <img
                className="max-sm:w-[6vw]"
                src="./images/twitter.svg"
                alt=""
              />
              <img
                className="max-sm:w-[6vw]"
                src="./images/linkedin.svg"
                alt=""
              />
              <img
                className="max-sm:w-[6vw]"
                src="./images/random.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <Link to={"/"}>
          <img className="logo max-sm:w-[40vw]" src="/images/logo.svg" alt="" />
        </Link>
      </div>
      <div className="nav2 flex max-sm:gap-[6vw] items-center">
        <Link to={"/login"}>
          <img className="max-sm:w-[6vw]" src="./images/user.svg" alt="" />
        </Link>
        <img className="max-sm:w-[6vw]" src="./images/cart.svg" alt="" />
      </div>
    </div>
  );

  return (
    <div>
      {isMobile ? (
        mobileView
      ) : (
        <div
          className="w-full bg-[#F5F0DF] px-[3vw] py-[5vh] flex items-center justify-between 
        relative overflow-hidden"
        >
          <div className="flex items-center">
            {[
              "All products",
              "Subscribe",
              "Coffee",
              "Equipment",
              "Locations",
            ].map((item, index) => (
              <div key={index} className="relative">
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="links font-[medium] mr-[2vw] transition-transform ease-in-out duration-500"
                >
                  {item}
                </Link>
              </div>
            ))}
            <Link to={"/"}>
              <img src="/images/logo.svg" alt="Logo" />
            </Link>
          </div>

          <div className="flex gap-[2vw] items-center">
            <Link to={"/login"}>
              <span className="text-[1.7vw]">
                <i className="ri-user-line"></i>
              </span>
            </Link>
            <span onClick={toggleCartMenu} className="text-[1.7vw] cursor-pointer">
              <i className="ri-shopping-bag-line"></i>
            </span>
          </div>
        </div>
      )}

      {/* Background dimming overlay */}
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-[9]"
          onClick={toggleCartMenu}
        ></div>
      )}

      <div
        className={`cartDiv w-[45vw] min-h-[100vh] bg-[#FCF7E6] fixed top-0 right-0 
                rounded-[2vw] z-[10] px-[3vw] py-[6vh] flex flex-col justify-between 
                transition-all duration-500 ease-in-out ${
                  cartOpen ? "right-0" : "right-[-50vw]"
                }`}
      >
        <div className="top">
          <div className="topText flex items-center justify-between">
            <h1 className="font-[headline] text-[3vw]">Your Cart</h1>
            <p
              onClick={toggleCartMenu}
              className="font-[light] uppercase text-[0.9vw] tracking-[2px] 
                    underline underline-offset-[0.5vh] cursor-pointer"
            >
              close
            </p>
          </div>
          <div className="delivery mt-[5vh] border-[1px] border-black rounded-[2vw]">
            <h2 className="font-[light] uppercase text-[.95vw] px-[1.5vw] py-[2vh] tracking-[2px]">
              Delivery Information
            </h2>
          </div>
        </div>

        <div className="bottom">
          <div className="border border-t-[1px] border-black"></div>
          <div className="bottomContent mt-[2vh]">
            <h1 className="font-[headline] text-[2.75vw]">
              Your cart is currently empty.
            </h1>
            <Link to={"/all-products"}>
              <button
                className="button w-full mt-[3.5vh] uppercase text-[0.9vw] tracking-[2px] 
                    border border-black py-[1.3vh] rounded-[2vw] overflow-hidden"
              >
                shop now
                <div className="button-bg"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

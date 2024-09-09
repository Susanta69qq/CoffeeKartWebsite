import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [cartToggle, setCartToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(null);
  const [isCoffeeHovered, setIsCoffeeHovered] = useState(false);
  const [isEquipmentHovered, setIsEquipmentHovered] = useState(false);

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
    <div className={`w-full max-sm:px-[3vw] max-sm:py-[1vh] flex justify-between 
      ${menuToggle ? "bg-white" : "bg-[#F5F0DF]"}`}>
      <div className="nav flex items-center max-sm:gap-[20vw]">
        <span onClick={toggleMenu} className="menu text-[6vw] relative">
          <i class="ri-menu-line"></i>
        </span>

        <div
          className={`w-[90vw] h-full bg-[#F5F0DF] absolute top-0 left-0
            rounded-tr-[50px] rounded-br-[50px] max-sm:px-[3vw] max-sm:py-[2vh]
            ${menuToggle ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-100%]"}
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

        <img className="logo max-sm:w-[40vw]" src="./images/logo.svg" alt="" />
      </div>
      <div className="nav2 flex max-sm:gap-[6vw] items-center">
        <img className="max-sm:w-[6vw]" src="./images/user.svg" alt="" />
        <img className="max-sm:w-[6vw]" src="./images/cart.svg" alt="" />
      </div>
    </div>
  );

  return (
    <div>
      {isMobile ? (
        mobileView
      ) : (
        <div className="w-full bg-[#F5F0DF] px-[3vw] py-[5vh] flex items-center justify-between relative">
          <div className="flex items-center">
            {/* Navigation Links */}
            {[
              "All products",
              "Subscribe",
              "Coffee",
              "Equipment",
              "Locations",
            ].map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={() => handleMouseLeave(item)}
              >
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="links font-[medium] mr-[2vw] transition-transform ease-in-out duration-500"
                >
                  {item}
                </Link>

                {/* Coffee Hover Menu */}
                {item === "Coffee" && (
                  <div
                    className={`coffee-menu hover-menu fixed top-[14vh] left-0 w-full bg-[#F5F0DF] 
                  font-[medium] flex flex-col px-[3vw] py-[1vh] z-10 hidden ${
                    isCoffeeHovered ? "show" : ""
                  }`}
                  >
                    {[
                      "Subscribe & Save",
                      "1829 Espresso",
                      "New this month",
                      "Trending coffees",
                      "Whole bean & ground",
                      "Pods",
                      "Decaf",
                    ].map((subItem, subIndex) => (
                      <Link
                        to={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                        key={subIndex}
                        className="sublinks font-[medium] text-[3vw] leading-[3vw] py-2 tracking-tighter"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Equipment Hover Menu */}
                {item === "Equipment" && (
                  <div
                    className={`equipment-menu hover-menu fixed top-[14vh] left-0 w-full bg-[#F5F0DF] 
                  font-[medium] flex flex-col px-[3vw] py-[1vh] z-10 hidden ${
                    isEquipmentHovered ? "show" : ""
                  }`}
                  >
                    {[
                      "Brewers",
                      "Grinders",
                      "Barista Accessories",
                      "Pod machines",
                      "Bundles",
                    ].map((subItem, subIndex) => (
                      <Link
                        to={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                        key={subIndex}
                        className="sublinks font-[medium] text-[3vw] leading-[3vw] py-2 tracking-tighter"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* SVG Logo */}
            <Link to={"/"}>
              <img src="./images/logo.svg" alt="Logo" />
            </Link>
          </div>

          {/* User and Cart Icons */}
          <div className="flex gap-[2vw] items-center">
            <Link>
              <span className="text-[1.7vw]">
                <i className="ri-user-line"></i>
              </span>
            </Link>
            <Link>
              <span className="text-[1.7vw]">
                <i className="ri-shopping-bag-line"></i>
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

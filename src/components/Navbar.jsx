import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext.jsx";
import { AuthContext } from "../AuthContext.jsx";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [cartToggle, setCartToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(null);
  const [isCoffeeHovered, setIsCoffeeHovered] = useState(false);
  const [isEquipmentHovered, setIsEquipmentHovered] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const { cart, removeFromCart, cartItemCount, totalPrice } = useCart();

  const toggleCartMenu = () => {
    setCartOpen(!cartOpen);
    if(menuToggle) setMenuToggle(false);
  };
  
  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
    if (cartToggle) setCartToggle(false);
  };

  const toggleCart = () => {
    setCartToggle(!cartToggle);
    if (menuToggle) setMenuToggle(false);
  };

  const handleUserIconClick = () => {
    const token = localStorage.getItem("token");

    if (token && isAuthenticated) {
      console.log("Navigating to /account page...");
      navigate("/account");
    } else {
      console.log("Navigating to /login page...");
      navigate("/login");
    }
  };

  const handleProceedCheckout = () => {
    const token = localStorage.getItem("token");

    if (token && isAuthenticated) {
      navigate("/order-confirmation");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

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
        <span onClick={handleUserIconClick}>
          <img
            className="max-sm:w-[6vw]"
            src="./images/user.svg"
            alt="User Icon"
          />
        </span>
        <span onClick={toggleCartMenu}>
          <img className="max-sm:w-[6vw]" src="./images/cart.svg" alt="" />
        </span>
        
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
            <span
              onClick={handleUserIconClick}
              className="text-[1.7vw] cursor-pointer"
            >
              <i className="ri-user-line"></i>
            </span>

            <span
              onClick={toggleCartMenu}
              className="text-[1.7vw] cursor-pointer"
            >
              <i className="ri-shopping-bag-line"></i>
              {cartItemCount > 0 && (
                <span
                  className="cart-count absolute top-[2.5vw] right-[2.5vw] bg-red-500 text-white rounded-full 
                text-xs w-[20px] h-[20px] flex items-center justify-center"
                >
                  {cartItemCount}
                </span>
              )}
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
        className={`cartDiv w-[45vw] max-sm:w-[100vw] min-h-[100vh] overflow-y-auto bg-[#FCF7E6] fixed top-0 right-0
          
                rounded-[2vw] z-[10] px-[3vw] py-[6vh] flex flex-col justify-between 
                transition-all duration-500 ease-in-out ${
                  cartOpen ? "right-0 max-sm:right-0" : "right-[-50vw] max-sm:right-[-100vw]"
                }`}
      >
        <div className="top">
          <div className="topText flex items-center justify-between">
            <h1 className="font-[headline] text-[3vw] max-sm:text-[6vw]">Your Cart</h1>
            <p
              onClick={toggleCartMenu}
              className="font-[light] uppercase text-[0.9vw] max-sm:text-[3vw] tracking-[2px] 
                    underline underline-offset-[0.5vh] cursor-pointer"
            >
              close
            </p>
          </div>
          <div className="delivery mt-[5vh] border-[1px] border-black rounded-[2vw] max-sm:rounded-[6vw]">
            <h2 className="font-[light] uppercase text-[.95vw] max-sm:text-[3vw] px-[1.5vw] max-sm:px-[5vw] 
            py-[2vh] tracking-[2px]">
              Delivery Information
            </h2>
          </div>
        </div>

        <div className="bottom max-h-[60vh] overflow-y-auto">
          <div className="bottomContent mt-[2vh]">
            {cart.length === 0 ? (
              <div className="bottomCartContent">
                <div className="border border-t-[1px] border-black"></div>
                <h1 className="font-[headline] text-[2.75vw] max-sm:text-[6vw] max-sm:py-[1.5vh]">
                  Your cart is currently empty.
                </h1>
                <Link to={"/all-products"}>
                  <button
                    className="button w-full mt-[3.5vh] max-sm:mt-[1.5vh] uppercase text-[0.9vw] max-sm:text-[3vw] 
                    tracking-[2px] 
                   border border-black py-[1.3vh] rounded-[2vw] max-sm:rounded-[6vw ] overflow-hidden"
                  >
                    shop now
                    <div className="button-bg"></div>
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-[2vw] max-sm:gap-[5vw]">
                {cart.map((item) => (
                  <div
                    key={item.product._id}
                    className="cart-item flex flex-col gap-[2vw] 
                  border-t-[1px] border-gray-600 py-[2vh] max-sm:py-[1vh]"
                  >
                    <div className="flex justify-between items-center max-sm:flex-col">
                      <img
                        className="w-[10vw] max-sm:w-[50vw]"
                        src={item.product.image}
                        alt=""
                      />
                      <h2 className="font-[medium] w-[10vw] max-sm:w-full text-[1.35vw] 
                      max-sm:text-[8vw] max-sm:text-center">
                        {item.product.name}
                      </h2>
                      <p className="font-[light] text-[.95vw] max-sm:text-[4vw]">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="flex justify-between items-center border-t-[1px] border-black py-[2vh]">
                      <p className="font-[light]">
                        Price: Rs. {item.product.price}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.product._id)}
                        className="delete-button font-[medium] text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}

                <div
                  className="totalPrice mt-[2vh] flex justify-between items-center border-t-[1px] 
                border-black pt-[2vh]"
                >
                  <h2 className="font-[medium] text-[1.35vw] max-sm:text-[5vw]">Total Price:</h2>
                  <p className="font-[medium] text-[1.3vw] max-sm:text-[5vw]">Rs. {totalPrice}</p>
                </div>

                <button
                  onClick={handleProceedCheckout}
                  className="button w-full mt-[3.5vh] uppercase text-[0.9vw] max-sm:text-[3vw] tracking-[2px] 
     border border-black py-[1.3vh] rounded-[2vw] max-sm:rounded-[6vw] overflow-hidden"
                >
                  Proceed to Checkout
                  <div className="button-bg"></div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

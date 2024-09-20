import React, { useContext, useEffect, useState } from "react";
import { useCart } from "../CartContext";
import Footer from "./Footer";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function OrderConfirmation() {
  const { cart, setCart, totalPrice, removeFromCart, cartItemCount } =
    useCart();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleConfirmOrder = async () => {
    try {
      const newOrder = {
        products: cart.map((item) => ({
          product: item.product._id,
          quantity: item.quantity,
        })),
        totalPrice: totalPrice,
      };

      const response = await API.post("/api/orders/neworder", newOrder);

      if (response.status === 200 || response.status === 201) {
        console.log("Order successfully placed!!!");

        setCart([]);
        localStorage.removeItem("cart");

        navigate("/account");
      } else {
        console.error("Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const mobileView = (
    <div className="w-full min-h-screen bg-[#F5F0DF]">
      <div className="head px-[2vw] py-[5vh] max-sm:py-[2vh]">
        <h1 className="font-[headline] text-[3.5vw] max-sm:text-[8vw]">
          Your Cart
        </h1>
      </div>
      <div className="content px-[2vw] py-[5vh] max-sm:py-[2vh] flex max-sm:flex-col gap-[2vw]">
        <div className="left w-[65%] max-sm:w-full">
          <div className="bottom flex flex-col mt-[5vh] max-sm:mt-[2vh]">
            {cart.map((item, index) => (
              <div
                key={item.product._id}
                className="flex flex-col py-[5vh] max-sm:py-[1vh] 
              border-t-[1px] border-black"
              >
                <div className="flex items-center border-b-[1px] border-black">
                  <img
                    className="w-[15vw] max-sm:w-[40vw]"
                    src={item.product.image}
                    alt=""
                  />
                  <div>
                    <h2 className="font-[medium] text-[1.6vw] max-sm:text-[6vw]">
                      {item.product.name}
                    </h2>
                    <p className="font-[light] text-gray-600 text-[4.5vw]">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex justify-between mt-[2vh]">
                  <p className="font-[light] text-[1.2vw] max-sm:text-[4vw]">
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
          </div>
        </div>
        <div className="right w-full h-[45vh] bg-[#e0dccdb2] px-[2vw] py-[3vh] rounded-[2vw]">
          <h1 className="font-[headline] text-[6vw] mb-[2vh]">Order Summary</h1>
          <div className="cont flex justify-between items-center border-t-[1px] border-gray-600 mb-[5vh] py-[3vh]">
            <h5 className="font-[light] text-gray-600 uppercase tracking-[1.5px]">
              Total
            </h5>
            <p className="font-[light] text-[7vw]">Rs. {totalPrice}.00</p>
          </div>
          <h5 className="font-[light] text-gray-600 border-b-[1px] border-gray-600 py-[3vh] mb-[2vh]">
            Shipping & taxes calculated at checkout
          </h5>
          <button
            onClick={handleConfirmOrder}
            className="button overflow-hidden w-full rounded-[6vw] font-[medium] py-[1vh] mt-[2vw]"
          >
            Confirm Order
            <div className="button-bg"></div>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );

  return (
    <div>
      {isMobile ? (
        mobileView
      ) : (
        <div className="w-full min-h-screen bg-[#F5F0DF]">
          <div className="head px-[2vw] py-[5vh] max-sm:py-[2vh]">
            <h1 className="font-[headline] text-[3.5vw] max-sm:text-[8vw]">
              Your Cart
            </h1>
          </div>
          <div className="content px-[2vw] py-[5vh] max-sm:py-[2vh] flex max-sm:flex-col max-sm:items-center gap-[2vw]">
            <div className="left w-[65%] max-sm:w-full">
              <div className="bottom flex flex-col mt-[5vh] max-sm:mt-[2vh]">
                {cart.map((item, index) => (
                  <div
                    key={item.product._id}
                    className="flex items-center justify-between py-[5vh] max-sm:py-[1vh] 
                border-t-[1px] border-black"
                  >
                    <img
                      className="w-[15vw] max-sm:w-[40vw]"
                      src={item.product.image}
                      alt=""
                    />
                    <h2 className="font-[medium] text-[1.6vw] max-sm:text-[5vw]">
                      {item.product.name}
                    </h2>
                    <p className="font-[light] text-[1.2vw] max-sm:text-[4vw]">
                      Rs. {item.product.price}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.product._id)}
                      className="delete-button font-[medium] text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="right w-[35%] h-[60vh] bg-[#e0dccdb2] px-[2vw] py-[5vh] rounded-[2vw]">
              <h1 className="font-[headline] text-[3vw] mb-[2vh]">
                Order Summary
              </h1>
              <div className="cont flex justify-between items-center border-t-[1px] border-gray-600 mb-[5vh] py-[3vh]">
                <h5 className="font-[light] text-gray-600 uppercase tracking-[1.5px]">
                  Total
                </h5>
                <p className="font-[light] text-[2vw]">Rs. {totalPrice}.00</p>
              </div>
              <h5 className="font-[light] text-gray-600 border-b-[1px] border-gray-600 py-[3vh]">
                Shipping & taxes calculated at checkout
              </h5>
              <button
                onClick={handleConfirmOrder}
                className="button overflow-hidden w-full rounded-[2vw] font-[medium] py-[1vh] mt-[2vw]"
              >
                Confirm Order
                <div className="button-bg"></div>
              </button>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default OrderConfirmation;

import React, { useContext } from "react";
import { useCart } from "../CartContext";
import Footer from "./Footer";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function OrderConfirmation() {
  const { cart, setCart, totalPrice, removeFromCart } = useCart();
  const navigate = useNavigate();

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

  return (
    <div className="w-full min-h-screen bg-[#F5F0DF]">
      <div className="head px-[2vw] py-[5vh]">
        <h1 className="font-[headline] text-[3.5vw]">Your Cart</h1>
      </div>
      <div className="content px-[2vw] py-[5vh] flex gap-[2vw]">
        <div className="left w-[65%]">
          <div className="bottom flex flex-col mt-[5vh]">
            {cart.map((item, index) => (
              <div
                key={item.product._id}
                className="flex items-center justify-between py-[5vh] 
              border-t-[1px] border-black"
              >
                <img className="w-[15vw]" src={item.product.image} alt="" />
                <h2 className="font-[medium] text-[1.6vw]">
                  {item.product.name}
                </h2>
                <p className="font-[light] text-[1.2vw]">
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
          <h1 className="font-[headline] text-[3vw] mb-[2vh]">Order Summary</h1>
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
  );
}

export default OrderConfirmation;

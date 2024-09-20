import React, { useEffect, useState } from "react";
import API from "../services/api";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // New loading state

  const fetchOrders = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await API.get("/api/orders/getorders");
      setOrders(response.data);
      console.log(response.data);
    } catch (error) {
      setError("Failed to fetch orders");
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#FCF7E6]">
      <div className="px-[2vw] py-[5vh] max-sm:py-[2vh]">
        <h3 className="font-[headline] text-[3vw] max-sm:text-[7vw] py-[3vh] border-b-[1px] border-gray-600">
          My Orders
        </h3>
        {loading ? ( // Show loading message while fetching
          <h4 className="font-[medium] text-[2vw] max-sm:text-[6vw] text-gray-600 py-[3vh]">
            Loading your orders...
          </h4>
        ) : (
          <>
            {error && <h4 className="text-red-500">{error}</h4>}
            {orders.length === 0 ? (
              <div>
                <h4 className="font-[medium] text-[2vw] max-sm:text-[6vw] text-gray-600 py-[3vh]">
                  You have not placed any orders yet.
                </h4>
                <Link to={"/all-products"}>
                  <button
                    className="button overflow-hidden border-[1px] border-black 
                  w-[15vw] max-sm:w-full rounded-[2vw] max-sm:rounded-[6vw] font-[light] py-[1vh]"
                  >
                    Visit our products gallery <div className="button-bg"></div>
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                {orders.map((order) => (
                  <div key={order._id}>
                    <div className="top flex items-center gap-[2vw] py-[2vh] border-b-[1px] 
                    border-gray-600 max-sm:border-green-800">
                      <img
                        className="w-[15vw] max-sm:w-[35vw]"
                        src={order.products[0].product.image}
                        alt=""
                      />
                      <h1 className="font-[medium] max-sm:w-[37vw] text-[2vw] max-sm:text-[6vw] max-sm:leading-[7vw]">
                        {order.products[0].product.name}
                      </h1>
                      <p className="font-[light] text-[1vw] max-sm:text-[4vw]">
                        Quantity: {order.products[0].quantity}
                      </p>
                    </div>
                    <div className="price py-[2vh] border-b-[1px] border-gray-600 flex max-sm:flex-col 
                    items-center justify-between max-sm:justify-start max-sm:items-start">
                      <p className="font-[light] text-[2.25vw] max-sm:text-[5vw]">
                        Total Price: Rs. {order.totalPrice}
                      </p>
                      <p className="font-[light] text-[1.25vw] max-sm:text-[5vw]">
                        Order ID: {order._id}
                      </p>
                      <p className="font-[light] text-[1vw] max-sm:text-[5vw]">
                        Ordered on: {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                      <p className="font-[light] text-[1vw] max-sm:text-[5vw]">
                        Time: {new Date(order.createdAt).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default MyOrders;

import React, { useEffect, useState } from "react";
import ProductsHeader from "../ProductsHeader";
import Footer from "./Footer";
import API from "../services/api";
import { Link } from "react-router-dom";

function Coffee() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await API.get("/api/products?category=coffee");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="w-full min-h-screen px-[2vw] bg-[#FCF7E6] pb-[15vh]">
        <ProductsHeader
          title={"Speciality Coffee Beans"}
          description={
            "Our beans pods and coffee gift subscriptions all in one place"
          }
        />

        <div className="products grid grid-cols-3 gap-[3vw] items-start mt-[10vh]">
          {products.map((product) => (
            <div
              className="product flex flex-col gap-[2vh] group hover:bg-[#F5F0DF] rounded-[2vw] px-[1.3vw] 
              transition-colors duration-300 ease-in-out"
              key={product._id}
            >
              <img src={product.image} alt="product" />
              <h2 className="font-[headline] text-[1.3vw] text-center">
                {product.name}
              </h2>
              <h5 className="font-[light] text-[1.2vw] text-center leading-[1.5vw]">
                {product.description}
              </h5>
              <h5 className="font-[medium] text-center">
                Rs. {product.price}.00
              </h5>
              <div
                className="mt-[2vw] flex flex-col gap-[2vw] opacity-0 
                transition-opacity duration-300 group-hover:opacity-100 mb-[2vh]"
              >
                <Link>
                  <button
                    className="button overflow-hidden font-[light] tracking-widest 
          text-[0.9vw] border border-black px-[2vw] py-[1vh] rounded-[2vw] w-full
          transition-colors duration-300 ease-in-out group-hover:bg-[#F5F0DF]"
                  >
                    Buy Now
                    <div className="button-bg"></div>
                  </button>
                </Link>
                <h5
                  className="font-[light] uppercase text-[0.9vw] text-center tracking-widest 
                  underline underline-offset-[0.7vh]"
                >
                  Read More
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Coffee;

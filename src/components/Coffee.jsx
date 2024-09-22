import React, { useEffect, useState } from "react";
import ProductsHeader from "../ProductsHeader";
import Footer from "./Footer";
import API from "../services/api";
import { Link } from "react-router-dom";

function Coffee() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await API.get("/api/products?category=coffee");
        setProducts(response.data);

        response.data.forEach((product, index) => {
          setTimeout(() => {
            setVisibleProducts((prev) => [...prev, product]); // Add product to visible state
          }, index * 100); // Delay each product by 100ms
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
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

        {loading ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <h2 className="text-xl font-semibold">Loading products...</h2>
          </div>
        ) : (
          <div className="products grid grid-cols-3 max-sm:grid-cols-1 gap-[3vw] max-sm:gap-[2vw] items-start mt-[10vh] max-sm:mt-[2vh]">
            {visibleProducts.map((product) => (
              <Link to={`/products/${product._id}`} key={product._id}>
                <div
                  className="product flex flex-col gap-[2vh] group hover:bg-[#F5F0DF] rounded-[2vw] px-[1.3vw] 
              transition-colors duration-300 ease-in-out"
                >
                  <img src={product.image} alt="product" />
                  <h2 className="font-[headline] text-[1.3vw] max-sm:text-[4.5vw] text-center">
                    {product.name}
                  </h2>
                  <h5
                    className="font-[light] text-[1.2vw] max-sm:text-[4vw] 
                text-center leading-[1.5vw] max-sm:leading-[4.5vw]"
                  >
                    {product.description}
                  </h5>
                  <h5 className="font-[medium] text-center">
                    Rs. {product.price}.00
                  </h5>
                  <div
                    className="mt-[2vw] flex flex-col gap-[2vw] max-sm:gap-[4vw] opacity-0 max-sm:opacity-100
                transition-opacity duration-300 group-hover:opacity-100 mb-[2vh]"
                  >
                    <Link>
                      <button
                        className="button overflow-hidden font-[light] tracking-widest 
          text-[0.9vw] max-sm:text-[4vw] border border-black px-[2vw] py-[1vh] max-sm:py-[0.5vh] rounded-[2vw] max-sm:rounded-[6vw] w-full
          transition-colors duration-300 ease-in-out group-hover:bg-[#F5F0DF]"
                      >
                        Buy Now
                        <div className="button-bg"></div>
                      </button>
                    </Link>
                    <h5
                      className="font-[light] uppercase text-[0.9vw] max-sm:text-[3.5vw] text-center tracking-widest 
                  underline underline-offset-[0.7vh]"
                    >
                      Read More
                    </h5>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Coffee;

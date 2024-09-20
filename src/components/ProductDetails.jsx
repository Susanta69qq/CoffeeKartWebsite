import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api.js";
import Footer from "./Footer";
import { useCart } from "../CartContext.jsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const imgRef = useRef(null);
  const textRef = useRef(null);

  // useEffect(() => {
  //   gsap.from(imgRef.current, {
  //     y: 100,
  //     duration: 1.5,
  //     ease: "power3.out",
  //     scrollTrigger: {
  //       trigger: imgRef.current,
  //       start: "top 90%",
  //       scrub: 2,
  //     },
  //   })
  // }, [])

  // useEffect(() => {
  //   gsap.from(textRef.current, {
  //     y: 100,
  //     duration: 1.5,
  //     ease: "power3.out",
  //     scrollTrigger: {
  //       trigger: textRef.current,
  //       start: "top 90%",
  //       scrub: 2,
  //     },
  //   })
  // }, [])

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await API.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  return (
    <div>
      {product ? (
        <div className="w-full bg-[#BB9978]">
          <div className="w-full min-h-screen max-sm:min-h-[75vh] px-[4vw] flex max-sm:flex-col items-center">
            <div className="left">
              <img
                className="object-cover"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="right mt-[10vh] max-sm:mt-[2vh]">
              <div className="topContent">
                <h1 className="font-[headline] text-[3vw] max-sm:text-[7vw] max-sm:text-center leading-[3vw] 
                max-sm:leading-[7vw] w-[30vw] max-sm:w-full mb-[2vh]">
                  {product.name}
                </h1>
                <p className="font-[light] w-[30vw] max-sm:w-full max-sm:text-center leading-5">
                  {product.description}
                </p>
              </div>
              <div className="bottomContent flex items-center justify-between mt-[5vh] max-sm:mt-[3vh]">
                <h4 className="font-[medium]">Quantity.</h4>
                <div className="quantNumber w-[10vw] max-sm:w-[35vw] flex items-center justify-between">
                  <div
                    onClick={() =>
                      quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
                    }
                    className="minus border-[1px] border-black rounded-full w-[2.5vw] 
                    max-sm:w-[8vw] h-[2.5vw] max-sm:h-[8vw] 
                    cursor-pointer flex justify-center items-center"
                  >
                    <i className="ri-subtract-line"></i>
                  </div>
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="number w-[2.5vw] max-sm:w-[8vw] text-center"
                    min="1"
                    max="10"
                  />
                  <div
                    onClick={() =>
                      quantity < 10
                        ? setQuantity(quantity + 1)
                        : setQuantity(10)
                    }
                    className="plus border-[1px] border-black rounded-full 
                    w-[2.5vw] max-sm:w-[8vw] h-[2.5vw] max-sm:h-[8vw]
                    cursor-pointer flex justify-center items-center"
                  >
                    <i className="ri-add-line"></i>
                  </div>
                </div>
              </div>
              <button
                className="button font-[light] text-[1.1vw] max-sm:text-[3.5vw] tracking-[2px] mt-[5vh] 
            w-full rounded-[2vw] max-sm:rounded-[8vw] py-[.8vh] overflow-hidden"
                onClick={handleAddToCart}
              >
                Rs. {product.price} - ADD TO CART
                <div className="button-bg"></div>
              </button>
            </div>
          </div>
          <div className="imageDiv px-[3vw] relative mb-[5vh] max-sm:mb-[0.5vh]">
            <img ref={imgRef}
              className="w-full max-sm:h-screen object-cover rounded-[2vw]"
              src="/images/HeroProductDesktop.jpeg"
              alt="Hero Product"
            />
            <div ref={textRef} className="textContent absolute top-0 px-[4vw] py-[10vh] max-sm:py-[2vh]">
              <h1 className="font-[headline] text-[5vw] max-sm:text-[10vw] text-[#2B2B27]">
                Our approach.
              </h1>
              <p className="font-[light] w-[42vw] max-sm:w-full text-[#2B2B27]">
                Our aspiration is to be the local hero of choice, a home to
                customers who make decisions with craft and quality in mind. We
                are dedicated to transparent, ethical coffee & food supply
                chains and source seasonally from the best producers around the
                world. We share these sourcing stories with you, as we believe
                enjoyment of food & coffee is more than just consumption, it's
                knowledge. We take equal pride in the skill that goes into
                sourcing, production, and presentation.
              </p>
            </div>
          </div>
          <div className="about flex justify-between bg-[#F5F0DF] px-[2vw] py-[5vh] mb-[10vh] max-sm:hidden ">
            <div className="farmer flex items-center gap-[1vw]">
              <img className="w-[6vw]" src="/images/farmer.svg" alt="Farmer" />
              <div className="text flex flex-col gap-[1vw]">
                <div className="header font-[headline] text-[1.75vw] leading-[1.75vw]">
                  <h1>Globally sourced.</h1>
                  <h1>Locally crafted.</h1>
                </div>
                <div className="details font-[light] text-[1.25vw] leading-[1.7vw]">
                  <p>
                    Cupped, tested, developed, and roasted <br />
                    at our Coffee Lab right here in South <br />
                    London.
                  </p>
                </div>
              </div>
            </div>

            <div className="lab flex items-center gap-[1vw]">
              <img
                className="w-[6vw]"
                src="/images/labtest.svg"
                alt="Lab Test"
              />
              <div className="text flex flex-col gap-[1vw]">
                <div className="header font-[headline] text-[1.75vw] leading-[1.75vw]">
                  <h1>Modern Coffee.</h1>
                  <h1>Holistic Approach.</h1>
                </div>
                <div className="details font-[light] text-[1.25vw] leading-[1.7vw]">
                  <p>
                    It encapsulates the attention to detail, <br />
                    creativity, and focus on provenance and <br />
                    quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="aroma flex items-center gap-[1vw]">
              <img className="w-[6vw]" src="/images/aroma.svg" alt="Aroma" />
              <div className="text flex flex-col gap-[1vw]">
                <div className="header font-[headline] text-[1.75vw] leading-[1.75vw]">
                  <h1>Twenty Houses, no two</h1>
                  <h1>the same.</h1>
                </div>
                <div className="details font-[light] text-[1.25vw] leading-[1.7vw]">
                  <p>
                    Each of our locations is designed to <br />
                    play a contemporary role in the Modern <br />
                    Coffee experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default ProductDetails;

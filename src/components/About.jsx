import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const [showProducts, setShowProducts] = useState(true);
  const [pods, setPods] = useState([
    {
      name: "Pods - Rituals.",
      details:
        "Compostable coffee pods. Warm, comforting and familiar for those who prefer a more classic approach.",
      price: "From Rs. 1,700.00",
      image: "./images/rituals.avif",
      bg: "#DBC1A2",
    },
    {
      name: "Pods - Fruity.",
      details:
        "Compostable coffee pods. Expressive and unique. Pushing the boundaries of flavour.",
      price: "From Rs. 2,100.00",
      image: "./images/fruity.avif",
      bg: "#F2EDDB",
    },
  ]);
  const [isMobile, setIsMobile] = useState(false);

  const headlineRef = useRef(null);
  const productsRef = useRef(null);

  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  // useEffect(() => {
  //   gsap.fromTo(
  //     headlineRef.current.querySelectorAll("h1"),
  //     {
  //       opacity: 0,
  //       y: 100,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       ease: "power3.out",
  //       stagger: 0.3,
  //       scrollTrigger: {
  //         trigger: headlineRef.current,
  //         start: "top 90%",
  //       },
  //     }
  //   );

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  // useEffect(() => {
  //   gsap.fromTo(
  //     productsRef.current.querySelectorAll(".products > div"),
  //     {
  //       opacity: 0,
  //       y: 100,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       ease: "power3.out",
  //       stagger: 0.3,
  //       scrollTrigger: {
  //         trigger: productsRef.current,
  //         start: "top 90%",
  //       },
  //     }
  //   );

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  const products = [
    {
      name: "1829 Espresso",
      details:
        "Only £10 for our birthday month, our 1829 Espresso is our seasonal espresso for milk. We source, roast and brew this coffee specifically for an exceptional milk based experience.",
      price: "Rs. 1,200.00",
      image: "./images/1829Espresso.avif",
      bg: "#D2B596",
    },
    {
      name: "Roaster's Spotlight Subscription",
      details:
        "Explore the best of our single origin roasts; each delivery will be a different stand out coffee hand picked by our Roastery team for you to enjoy.",
      price: "Rs. 1,700.00",
      image: "./images/roasterSpot.webp",
      bg: "#B07571",
    },
    {
      name: "Galeras Decaf.",
      details:
        "Clean, sweet and complex. Notes of peach, smooth milk chocolate and a clear orange acidity that will surprise even the most discerning coffee connoisseurs.",
      price: "Rs. 1,400.00",
      image: "./images/galerasDecaf.avif",
      bg: "#DFC6A7",
    },
  ];

  return (
    <div>
      {isMobile ? (
        mobileView
      ) : (
        <div className="w-full min-h-screen bg-[#FCF7E6] pb-[5vh] overflow-hidden">
          <div className="about flex justify-between bg-[#F5F0DF] px-[2vw] py-[5vh]">
            <div className="farmer flex items-center gap-[1vw]">
              <img className="w-[6vw]" src="./images/farmer.svg" alt="" />
              <div className="text flex flex-col gap-[1vw]">
                <div
                  ref={headlineRef}
                  className="header font-[headline] text-[1.75vw] leading-[1.75vw]"
                >
                  <h1>Globally sourced.</h1>
                  <h1>Locally crafted.</h1>
                </div>
                <div className="details font-[light] text-[1.25vw] leading-[1.7vw]">
                  <p>
                    Cupped, tested, developed and roasted <br />
                    at out Coffee Lab right here in South <br />
                    London.
                  </p>
                </div>
              </div>
            </div>

            <div className="lab flex items-center gap-[1vw]">
              <img className="w-[6vw]" src="./images/labtest.svg" alt="" />
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
              <img className="w-[6vw]" src="./images/aroma.svg" alt="" />
              <div className="text flex flex-col gap-[1vw]">
                <div className="header font-[headline] text-[1.75vw] leading-[1.75vw]">
                  <h1>Twenty Houses, no two</h1>
                  <h1>the same.</h1>
                </div>
                <div className="details font-[light] text-[1.25vw] leading-[1.7vw]">
                  <p>
                    Each of our loactions are designed to <br />
                    play a contemporary role in the Modern <br />
                    Coffee experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="productsSection w-full px-[2vw] mt-[30vh] flex justify-between gap-[2.5vw]">
            <div className="header flex flex-col gap-[3.5vh]">
              <div className="head">
                <h1 className="font-[headline] text-[4vw] leading-[4vw]">
                  Subscribe
                </h1>
                <h1 className="font-[headline] text-[4vw] leading-[4vw]">
                  today.
                </h1>
              </div>
              <div className="headText flex flex-col gap-[3.5vh]">
                <h2 className="font-[light]">
                  WatchHouse. YourHouse. <br />
                  The Modern Coffee experience in the comfort of your own home.
                </h2>
                <h2 className="font-[light]">
                  Subscribe for a neverending cup.
                </h2>
                <div className="toggleButton font-[medium] flex gap-[1vw] items-center">
                  <h3 className="font-[medium]">Coffee</h3>
                  <div
                    onClick={() => toggleProducts()}
                    className="w-[4.5vw] h-[4vh] border-[1px] border-black rounded-[2vw] relative"
                  >
                    <div
                      className={`w-[1.5vw] h-[3vh] bg-black rounded-full 
                transition-transform duration-500 absolute top-[0.5vh] left-[0.2vw] ${
                  !showProducts ? "translate-x-[2.5vw]" : "translate-x-0"
                }`}
                    ></div>
                  </div>
                  <h3 className="font-[medium]">Pods</h3>
                </div>
              </div>
            </div>
            <div
              className={`products w-full flex gap-[2.5vw] transition-all duration-500 ease-in-out
              ${showProducts ? "opacity-100 translate-y-0" : "translate-y-5"}`}
            >
              {(showProducts ? products : pods).map((product, index) => (
                <div
                  key={index}
                  className={`relative w-[32%] px-[2vw] flex flex-col gap-[1vw] py-[2vh] rounded-[2vw] pt-[25vh]
      ${
        product.name === "Roaster's Spotlight Subscription"
          ? "bg-[#B27A75] text-[#FCF7E6]"
          : index === 1 && !showProducts
          ? "bg-[#F3EDDB]"
          : "bg-[#CFB192]"
      }`}
                >
                  <img
                    className="absolute top-[-20vh] left-0"
                    src={product.image}
                    alt=""
                  />
                  <h1 className="font-[headline] text-[1.5vw] leading-[1.5vw]">
                    {product.name}
                  </h1>
                  <p className="font-[light] text-[1.05vw] leading-[1.5vw]">
                    {product.details}
                  </p>
                  <p className="font-[light] text-[1.1vw]">{product.price}</p>
                  <div className="mt-[2vh]">
                    <div className="border-[1px] border-black"></div>
                    <h3 className="font-[medium] mb-[2vh]">Subscribe today</h3>
                    <div className="promises font-[light] text-[1vw] flex flex-col gap-[1vw]">
                      <p>Free UK shipping. ✔</p>
                      <p>Always 10% off. ✔</p>
                      <p>Pause, skip or cancel at any time. ✔</p>
                    </div>
                    <button
                      className=" button mt-[4vh] w-full bg-[#FCF7E6] rounded-[2vw]
          uppercase font-[light] text-[1vw] tracking-[2px] py-[0.5vh] overflow-hidden"
                    >
                      Subscribe now
                      <span className="button-bg"></span>
                    </button>
                    <h4 className="font-[light] text-[1vw] text-center tracking-[2px] mt-[2vh]">
                      SAVE 10%
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { gsap } from "gsap";
// import { useGsap } from "@gsap/react";

// gsap.registerPlugin(useGsap);

function About() {
  const [showProducts, setShowProducts] = useState(true);
  const [showPods, setShowPods] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const headlineRef = useRef(null);

  // useGsap(() => {
  //   gsap.to(headlineRef.current, {
  //     x: 100,
  //     duration: 2,
  //     delay: 0.5,
  //   });
  // }, []);

  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const toggleProducts = () => {
    setShowProducts(!showProducts);
    setShowPods(true);
  };

  const togglePods = () => {
    setShowPods(!showPods);
    setShowProducts(false);
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

  const pods = [
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
  ];

  const mobileView = (
    <div>
      <div className="about flex justify-between bg-[#F5F0DF] px-[2vw] py-[5vh] mt-[-25vh]">
        <Swiper slidesPerView={1}>
          <SwiperSlide>
            <div className="farmer flex items-center justify-center gap-[4vw]">
              <img className="w-[20vw]" src="./images/farmer.svg" alt="" />
              <div className="text flex flex-col gap-[5vw]">
                <div className="header font-[headline] text-[5vw] leading-[5vw]">
                  <h1>Globally sourced.</h1>
                  <h1>Locally crafted.</h1>
                </div>
                <div className="details font-[light] text-[4vw] leading-[5vw]">
                  <p>
                    Cupped, tested, developed and roasted <br />
                    at out Coffee Lab right here in South <br />
                    London.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lab flex items-center justify-center gap-[4vw]">
              <img className="w-[20vw]" src="./images/labtest.svg" alt="" />
              <div className="text flex flex-col gap-[5vw]">
                <div className="header font-[headline] text-[5vw] leading-[5vw]">
                  <h1>Modern Coffee.</h1>
                  <h1>Holistic Approach.</h1>
                </div>
                <div className="details font-[light] text-[4vw] leading-[5vw]">
                  <p>
                    It encapsulates the attention to detail, <br />
                    creativity, and focus on provenance and <br />
                    quality.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aroma flex items-center gap-[4vw]">
              <img className="w-[20vw]" src="./images/aroma.svg" alt="" />
              <div className="text flex flex-col gap-[5vw]">
                <div className="header font-[headline] text-[5vw] leading-[5vw]">
                  <h1>Twenty Houses, no two</h1>
                  <h1>the same.</h1>
                </div>
                <div className="details font-[light] text-[4vw] leading-[5vw]">
                  <p>
                    Each of our loactions are designed to <br />
                    play a contemporary role in the Modern <br />
                    Coffee experience.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="subscribe h-[122.5vh] px-[2vw] pt-[3vh] bg-[#FCF7E6] ">
        <div className="header flex flex-col gap-[3vh] items-start">
          <div className="head font-[headline] text-[10vw] leading-[10vw]">
            <h1>Subscribe</h1>
            <h1>today.</h1>
          </div>
          <div className="text">
            <h5>
              WatchHouse. YourHouse. <br />
              The Modern Coffee experience in the comfort <br /> of your own
              home.
            </h5>
          </div>
          <div className="subscribing">
            <h5 className="font-[medium]">Subscribe for a neverending cup.</h5>
          </div>
          <div className="toggleButton font-[medium] flex gap-[3vw] items-center">
            <h3 className="font-[headline] text-[5vw]">Coffee</h3>
            <div
              onClick={() => toggleProducts()}
              className="w-[12vw] h-[2.5vh] border-[1px] border-black rounded-[2vw] relative"
            >
              <div
                className={`w-[3vw] h-[1.5vh] bg-black rounded-full 
                transition-transform duration-500 absolute top-[0.4vh] left-[0.4vw] ${
                  !showProducts ? "translate-x-[8vw]" : "translate-x-0"
                }`}
              ></div>
            </div>
            <h3 className="font-[headline] text-[5vw]">Pods</h3>
          </div>
        </div>

        <Swiper className="mt-[15vh]" slidesPerView={1} spaceBetween={-30}>
          {showProducts && (
            <div
              className={`products transition-opacity duration-500 
              ${showProducts ? "opacity-100" : "opacity-0"}`}
            >
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`flex flex-col gap-[4vw] w-[85vw] h-[75vh] px-[4vw] py-[2vh] rounded-[5vw] 
                  ${index === 2 ? "gap-[22px]" : ""} relative `}
                    style={{ backgroundColor: product.bg }}
                    key={index}
                  >
                    <h1 className="font-[medium] text-[5vw] leading-[5vw] w-[15vw] mt-[15vh]">
                      {product.name}
                    </h1>
                    <p className="w-[80vw] text-[4vw] leading-[5vw]">
                      {product.details}
                    </p>
                    <h5>{product.price}</h5>
                    <img
                      className="absolute top-[-7vh] left-0 z-[999]"
                      src={product.image}
                      alt=""
                    />

                    <div className="mt-[2vh]">
                      <div className="border-[1px] border-black"></div>
                      <h3 className="font-[medium] text-[5vw]">
                        Subscribe today
                      </h3>
                      <div className="assurances mt-[2vh] flex flex-col gap-[2vh]">
                        <div className="flex items-center gap-[4vw]">
                          <div
                            className="tick bg-gray-500 w-[4vw] h-[2vh] rounded-full 
                      flex justify-center items-center"
                          >
                            <img
                              className="w-[4vw]"
                              src="./images/tick.svg"
                              alt=""
                            />
                          </div>
                          <h4 className="font-[light] text-[4vw]">
                            Free UK shippng
                          </h4>
                        </div>
                        <div className="flex items-center gap-[4vw]">
                          <div
                            className="tick bg-gray-500 w-[4vw] h-[2vh] rounded-full 
                      flex justify-center items-center"
                          >
                            <img
                              className="w-[4vw]"
                              src="./images/tick.svg"
                              alt=""
                            />
                          </div>
                          <h4 className="font-[light] text-[4vw]">
                            Always 10% off
                          </h4>
                        </div>
                        <div className="flex items-center gap-[1vw]">
                          <div
                            className="tick bg-gray-500 w-[4vw] h-[2vh] rounded-full 
                      flex justify-center items-center"
                          >
                            <img
                              className="w-[4vw]"
                              src="./images/tick.svg"
                              alt=""
                            />
                          </div>
                          <h4 className="font-[light] text-[4vw]">
                            Pause, skip or cancel anytime
                          </h4>
                        </div>
                      </div>
                      <button
                        className=" button mt-[4vh] w-full bg-[#FCF7E6] rounded-[4vw] 
                  uppercase font-[light] tracking-widest text-[3vw] py-[1vh] overflow-hidden"
                      >
                        Subscribe now
                        <span className="button-bg"></span>
                      </button>
                      <h4 className="font-[medium] text-[3vw] text-center tracking-widest mt-[2vh]">
                        SAVE 10%
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          )}
        </Swiper>

        <Swiper slidesPerView={1} spaceBetween={-35}>
          {showPods && (
            <div
              className={`pods transition-all duration-500  
              ${!showProducts ? "opacity-100" : "opacity-0"}`}
            >
              {pods.map((pod, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="flex flex-col gap-[4vw] w-[85vw] h-[75vh] px-[4vw] py-[2vh] rounded-[5vw]"
                    key={index}
                    style={{ backgroundColor: pod.bg }}
                  >
                    <h1 className="font-[medium] text-[5vw] leading-[5vw] w-[15vw] mt-[15vh]">
                      {pod.name}
                    </h1>
                    <p className="w-[75vw] text-[4vw] leading-[5vw]">
                      {pod.details}
                    </p>
                    <h5>{pod.price}</h5>
                    <img
                      className="absolute top-[-6vh] left-0 z-[999]"
                      src={pod.image}
                      alt=""
                    />

                    <div className="mt-[2vh]">
                      <div className="border-[1px] border-black"></div>
                      <div className="mt-[25vh]">
                        <button
                          className=" button mt-[4vh] w-full bg-[#FCF7E6] rounded-[4vw] 
                  uppercase font-[light] tracking-widest text-[3vw] py-[1vh] overflow-hidden"
                        >
                          Subscribe now
                          <span className="button-bg"></span>
                        </button>
                        <h4 className="font-[medium] text-[3vw] text-center tracking-widest mt-[1vh]">
                          SAVE 10%
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );

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
          <div className="subscribe h-[80vh] px-[2vw] mt-[50vh] flex items-start gap-[1.1vw] relative">
            <div className="header flex flex-col gap-[3vh] items-start">
              <div ref={headlineRef} className="head font-[headline] text-[3.7vw] leading-[4vw]">
                <h1>Subscribe</h1>
                <h1>today.</h1>
              </div>
              <div className="text">
                <h5>
                  WatchHouse. YourHouse. <br />
                  The Modern Coffee experience in the comfort <br /> of your own
                  home.
                </h5>
              </div>
              <div className="subscribing">
                <h5 className="font-[medium]">
                  Subscribe for a neverending cup.
                </h5>
              </div>
              <div className="toggleButton font-[medium] flex gap-[1vw] items-center">
                <h3>Coffee</h3>
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
                <h3>Pods</h3>
              </div>
            </div>

            {showProducts && (
              <div
                className={`products flex gap-[2vw] pl-[6vw] transition-opacity duration-500 absolute top-0 left-[21vw]
              ${showProducts ? "opacity-100" : "opacity-0"}`}
              >
                {products.map((product, index) => (
                  <div
                    className={`flex flex-col gap-[1vw] relative w-[22vw] px-[2vw] py-[2vh] rounded-[2vw]
                  ${index === 2 ? "gap-[3vh]" : ""}`}
                    style={{ backgroundColor: product.bg }}
                    key={index}
                  >
                    <h1 className="font-[medium] text-[1.5vw] leading-[1.5vw] w-[15vw] mt-[15vh]">
                      {product.name}
                    </h1>
                    <p className="w-[18vw] text-[1.2vw] leading-[1.5vw]">
                      {product.details}
                    </p>
                    <h5>{product.price}</h5>
                    <img
                      className="absolute top-[-10vw] left-0"
                      src={product.image}
                      alt=""
                    />

                    <div className="mt-[2vh]">
                      <div className="border-[1px] border-black"></div>
                      <h3 className="font-[medium] text-[1vw]">
                        Subscribe today
                      </h3>
                      <div className="assurances mt-[2vh] flex flex-col gap-[2vh]">
                        <div className="flex items-center gap-[1vw]">
                          <div
                            className="tick bg-gray-500 w-[1vw] h-[2vh] rounded-full 
                      flex justify-center items-center"
                          >
                            <img
                              className="w-[1.2vw]"
                              src="./images/tick.svg"
                              alt=""
                            />
                          </div>
                          <h4 className="font-[light] text-[1vw]">
                            Free UK shippng
                          </h4>
                        </div>
                        <div className="flex items-center gap-[1vw]">
                          <div
                            className="tick bg-gray-500 w-[1vw] h-[2vh] rounded-full 
                      flex justify-center items-center"
                          >
                            <img
                              className="w-[1.2vw]"
                              src="./images/tick.svg"
                              alt=""
                            />
                          </div>
                          <h4 className="font-[light] text-[1vw]">
                            Always 10% off
                          </h4>
                        </div>
                        <div className="flex items-center gap-[1vw]">
                          <div
                            className="tick bg-gray-500 w-[1vw] h-[2vh] rounded-full 
                      flex justify-center items-center"
                          >
                            <img
                              className="w-[1.2vw]"
                              src="./images/tick.svg"
                              alt=""
                            />
                          </div>
                          <h4 className="font-[light] text-[1vw]">
                            Pause, skip or cancel anytime
                          </h4>
                        </div>
                      </div>
                      <button
                        className=" button mt-[4vh] w-full bg-[#FCF7E6] rounded-[2vw] 
                  uppercase font-[light] tracking-widest text-[.8vw] py-[1vh] overflow-hidden"
                      >
                        Subscribe now
                        <span className="button-bg"></span>
                      </button>
                      <h4 className="font-[medium] text-[.9vw] text-center tracking-widest mt-[2vh]">
                        SAVE 10%
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {showPods && (
              <div
                className={`pods flex gap-[2vw] transition-all duration-500 absolute top-0 left-[27vw]  
              ${!showProducts ? "opacity-100" : "opacity-0"}`}
              >
                {pods.map((pod, index) => (
                  <div
                    className="flex flex-col gap-[1vw] relative w-[22vw] px-[2vw] py-[2vh] rounded-[2vw]"
                    key={index}
                    style={{ backgroundColor: pod.bg }}
                  >
                    <h1 className="font-[medium] text-[1.5vw] leading-[1.5vw] w-[15vw] mt-[15vh]">
                      {pod.name}
                    </h1>
                    <p className="w-[18vw] text-[1.2vw] leading-[1.5vw]">
                      {pod.details}
                    </p>
                    <h5>{pod.price}</h5>
                    <img
                      className="absolute top-[-10vw] left-0"
                      src={pod.image}
                      alt=""
                    />

                    <div className="mt-[2vh]">
                      <div className="border-[1px] border-black"></div>
                      <div className="mt-[25vh]">
                        <button
                          className=" button mt-[4vh] w-full bg-[#FCF7E6] rounded-[2vw] 
                  uppercase font-[light] tracking-widest text-[.8vw] py-[1vh] overflow-hidden"
                        >
                          Subscribe now
                          <span className="button-bg"></span>
                        </button>
                        <h4 className="font-[medium] text-[.9vw] text-center tracking-widest mt-[2vh]">
                          SAVE 10%
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default About;

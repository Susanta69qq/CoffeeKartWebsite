import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Favourites() {
  const [currentIndex, setCurrentIndex] = useState(14);
  const [isMobile, setIsMobile] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const products = [
    {
      name: "1829 Espresso",
      details:
        "Only £10 for our birthday month, our 1829 Espresso is our seasonal espresso for milk. We source, roast and brew this coffee specifically for an exceptional milk based experience.",
      price: "Rs 1,200.00",
      image: "./images/1829Espresso.avif",
    },
    {
      name: "Pods Discovery Bundle",
      details:
        "The perfect idea for those looking to take a journey through flavours, processes, countries. Save £2.00",
      price: "Rs 2,300.00",
      image: "./images/podsbundles.webp",
    },
    {
      name: "Discovery Bundle",
      details:
        "The perfect idea for those looking to take a journey through flavours, processes, countries. Save £4.50.",
      price: "Rs 4,300.00",
      image: "./images/discoverybundle.webp",
    },
    {
      name: "Aeropress",
      details: "AeroPress coffee maker original, 3-in-1 coffee press.",
      price: "Rs 3,400.00",
      image: "./images/aeropress.webp",
    },
    {
      name: "Aesir Filter Papers",
      details:
        "Aesir filters for Aeropress are the highest quality paper for a cleaner, brighter cup.",
      price: "Rs 1,200.00",
      image: "./images/aesirfilter.webp",
    },
    {
      name: "Pods-Rituals",
      details:
        "Compostable coffee pods. Warm, comforting and familiar for those who prefer a more classic approach.",
      price: "Rs 1,700.00",
      image: "./images/rituals.avif",
    },
    {
      name: "Fellow Stag EKG Electric Kettle",
      details:
        "Only £10 for our birthday month, our 1829 Espresso is our seasonal espresso for milk. We source, roast and brew this coffee specifically for an exceptional milk based experience.",
      price: "Rs 16,900.00",
      image: "./images/kettle.webp",
    },
    {
      name: "1829 Espresso",
      details:
        "Only £10 for our birthday month, our 1829 Espresso is our seasonal espresso for milk. We source, roast and brew this coffee specifically for an exceptional milk based experience.",
      price: "Rs 1,200.00",
      image: "./images/1829Espresso.avif",
    },
    {
      name: "Pods Discovery Bundle",
      details:
        "The perfect idea for those looking to take a journey through flavours, processes, countries. Save £2.00",
      price: "Rs 2,300.00",
      image: "./images/podsbundles.webp",
    },
    {
      name: "Discovery Bundle",
      details:
        "The perfect idea for those looking to take a journey through flavours, processes, countries. Save £4.50.",
      price: "Rs 4,300.00",
      image: "./images/discoverybundle.webp",
    },
    {
      name: "Aeropress",
      details: "AeroPress coffee maker original, 3-in-1 coffee press.",
      price: "Rs 3,400.00",
      image: "./images/aeropress.webp",
    },
    {
      name: "Aesir Filter Papers",
      details:
        "Aesir filters for Aeropress are the highest quality paper for a cleaner, brighter cup.",
      price: "Rs 1,200.00",
      image: "./images/aesirfilter.webp",
    },
    {
      name: "Pods-Rituals",
      details:
        "Compostable coffee pods. Warm, comforting and familiar for those who prefer a more classic approach.",
      price: "Rs 1,700.00",
      image: "./images/rituals.avif",
    },
    {
      name: "Fellow Stag EKG Electric Kettle",
      details:
        "Only £10 for our birthday month, our 1829 Espresso is our seasonal espresso for milk. We source, roast and brew this coffee specifically for an exceptional milk based experience.",
      price: "Rs 16,900.00",
      image: "./images/kettle.webp",
    },
    {
      name: "1829 Espresso",
      details:
        "Only £10 for our birthday month, our 1829 Espresso is our seasonal espresso for milk. We source, roast and brew this coffee specifically for an exceptional milk based experience.",
      price: "Rs 1,200.00",
      image: "./images/1829Espresso.avif",
    },
    {
      name: "Pods Discovery Bundle",
      details:
        "The perfect idea for those looking to take a journey through flavours, processes, countries. Save £2.00",
      price: "Rs 2,300.00",
      image: "./images/podsbundles.webp",
    },
    {
      name: "Discovery Bundle",
      details:
        "The perfect idea for those looking to take a journey through flavours, processes, countries. Save £4.50.",
      price: "Rs 4,300.00",
      image: "./images/discoverybundle.webp",
    },
    {
      name: "Aeropress",
      details: "AeroPress coffee maker original, 3-in-1 coffee press.",
      price: "Rs 3,400.00",
      image: "./images/aeropress.webp",
    },
    {
      name: "Aesir Filter Papers",
      details:
        "Aesir filters for Aeropress are the highest quality paper for a cleaner, brighter cup.",
      price: "Rs 1,200.00",
      image: "./images/aesirfilter.webp",
    },
    {
      name: "Pods-Rituals",
      details:
        "Compostable coffee pods. Warm, comforting and familiar for those who prefer a more classic approach.",
      price: "Rs 1,700.00",
      image: "./images/rituals.avif",
    },
    {
      name: "Fellow Stag EKG Electric Kettle",
      details:
        "Only £10 for our birthday month, our 1829 Espresso is our seasonal espresso for milk. We source, roast and brew this coffee specifically for an exceptional milk based experience.",
      price: "Rs 16,900.00",
      image: "./images/kettle.webp",
    },
    {
      name: "1829 Espresso",
      details:
        "Only £10 for our birthday month, our 1829 Espresso is our seasonal espresso for milk. We source, roast and brew this coffee specifically for an exceptional milk based experience.",
      price: "Rs 1,200.00",
      image: "./images/1829Espresso.avif",
    },
    {
      name: "Pods Discovery Bundle",
      details:
        "The perfect idea for those looking to take a journey through flavours, processes, countries. Save £2.00",
      price: "Rs 2,300.00",
      image: "./images/podsbundles.webp",
    },
    {
      name: "Discovery Bundle",
      details:
        "The perfect idea for those looking to take a journey through flavours, processes, countries. Save £4.50.",
      price: "Rs 4,300.00",
      image: "./images/discoverybundle.webp",
    },
    {
      name: "Aeropress",
      details: "AeroPress coffee maker original, 3-in-1 coffee press.",
      price: "Rs 3,400.00",
      image: "./images/aeropress.webp",
    },
    {
      name: "Aesir Filter Papers",
      details:
        "Aesir filters for Aeropress are the highest quality paper for a cleaner, brighter cup.",
      price: "Rs 1,200.00",
      image: "./images/aesirfilter.webp",
    },
    {
      name: "Pods-Rituals",
      details:
        "Compostable coffee pods. Warm, comforting and familiar for those who prefer a more classic approach.",
      price: "Rs 1,700.00",
      image: "./images/rituals.avif",
    },
    {
      name: "Fellow Stag EKG Electric Kettle",
      details:
        "Only £10 for our birthday month, our 1829 Espresso is our seasonal espresso for milk. We source, roast and brew this coffee specifically for an exceptional milk based experience.",
      price: "Rs 16,900.00",
      image: "./images/kettle.webp",
    },
    {
      name: "1829 Espresso",
      details:
        "Only £10 for our birthday month, our 1829 Espresso is our seasonal espresso for milk. We source, roast and brew this coffee specifically for an exceptional milk based experience.",
      price: "Rs 1,200.00",
      image: "./images/1829Espresso.avif",
    },
    {
      name: "Pods Discovery Bundle",
      details:
        "The perfect idea for those looking to take a journey through flavours, processes, countries. Save £2.00",
      price: "Rs 2,300.00",
      image: "./images/podsbundles.webp",
    },
    {
      name: "Discovery Bundle",
      details:
        "The perfect idea for those looking to take a journey through flavours, processes, countries. Save £4.50.",
      price: "Rs 4,300.00",
      image: "./images/discoverybundle.webp",
    },
    {
      name: "Aeropress",
      details: "AeroPress coffee maker original, 3-in-1 coffee press.",
      price: "Rs 3,400.00",
      image: "./images/aeropress.webp",
    },
    {
      name: "Aesir Filter Papers",
      details:
        "Aesir filters for Aeropress are the highest quality paper for a cleaner, brighter cup.",
      price: "Rs 1,200.00",
      image: "./images/aesirfilter.webp",
    },
    {
      name: "Pods-Rituals",
      details:
        "Compostable coffee pods. Warm, comforting and familiar for those who prefer a more classic approach.",
      price: "Rs 1,700.00",
      image: "./images/rituals.avif",
    },
    {
      name: "Fellow Stag EKG Electric Kettle",
      details:
        "Only £10 for our birthday month, our 1829 Espresso is our seasonal espresso for milk. We source, roast and brew this coffee specifically for an exceptional milk based experience.",
      price: "Rs 16,900.00",
      image: "./images/kettle.webp",
    },
    {
      name: "1829 Espresso",
      details:
        "Only £10 for our birthday month, our 1829 Espresso is our seasonal espresso for milk. We source, roast and brew this coffee specifically for an exceptional milk based experience.",
      price: "Rs 1,200.00",
      image: "./images/1829Espresso.avif",
    },
    {
      name: "Pods Discovery Bundle",
      details:
        "The perfect idea for those looking to take a journey through flavours, processes, countries. Save £2.00",
      price: "Rs 2,300.00",
      image: "./images/podsbundles.webp",
    },
    {
      name: "Discovery Bundle",
      details:
        "The perfect idea for those looking to take a journey through flavours, processes, countries. Save £4.50.",
      price: "Rs 4,300.00",
      image: "./images/discoverybundle.webp",
    },
    {
      name: "Aeropress",
      details: "AeroPress coffee maker original, 3-in-1 coffee press.",
      price: "Rs 3,400.00",
      image: "./images/aeropress.webp",
    },
    {
      name: "Aesir Filter Papers",
      details:
        "Aesir filters for Aeropress are the highest quality paper for a cleaner, brighter cup.",
      price: "Rs 1,200.00",
      image: "./images/aesirfilter.webp",
    },
    {
      name: "Pods-Rituals",
      details:
        "Compostable coffee pods. Warm, comforting and familiar for those who prefer a more classic approach.",
      price: "Rs 1,700.00",
      image: "./images/rituals.avif",
    },
    {
      name: "Fellow Stag EKG Electric Kettle",
      details:
        "Only £10 for our birthday month, our 1829 Espresso is our seasonal espresso for milk. We source, roast and brew this coffee specifically for an exceptional milk based experience.",
      price: "Rs 16,900.00",
      image: "./images/kettle.webp",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  const productsPerPage = 3;
  const maxIndex = products.length - productsPerPage;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < maxIndex) {
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex;
    });
  };

  const mobileView = (
    <div className="w-full min-h-screen bg-[#FCF7E6] relative">
      <div className="header pt-[15vh] flex flex-col mb-[5vh] px-[2vw] gap-[2vh]">
        <h1 className="font-[headline] text-[8vw]">Our Favourites.</h1>
        <button
          className="button uppercase font-[light] tracking-widest 
        text-[3.4vw] border border-black px-[2vw] py-[1vh] rounded-[5vw] overflow-hidden"
        >
          shop now
          <div className="button-bg"></div>
        </button>
      </div>
      <div className="favProducts pb-[20vh] overflow-hidden">
        <Swiper slidesPerView={1} speed={500}>
          <div
            className="products flex gap-[1.5vw] px-[2vw] transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div
                  className="text-center rounded-[4vw] px-[4vw] w-full group 
              hover:bg-[#F5F0DF] transition-colors duration-300 ease-in-out"
                  key={index}
                >
                  <img
                    className="w-full object-cover"
                    src={product.image}
                    alt=""
                  />
                  <div className="flex flex-col gap-[1vw] items-center">
                    <h1 className="font-[headline] text-[4.5vw] leading-[4.5vw]">
                      {product.name}
                    </h1>
                    <p className="font-[light] text-[4vw] w-[65vw] leading-[5vw] mt-[2vh]">
                      {product.details}
                    </p>
                    <h4 className="font-[medium] mt-[2vh]">{product.price}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );

  return (
    <div>
      {isMobile ? (
        mobileView
      ) : (
        <div className="w-full min-h-screen bg-[#FCF7E6] relative">
          <div className="header pt-[30vh] flex justify-between items-center mb-[5vh] px-[2vw]">
            <h1
              ref={headerRef}
              className="header-text font-[headline] text-[4vw]"
            >
              Our Favourites.
            </h1>
            <button
              className="button uppercase font-[light] tracking-widest 
          text-[0.9vw] border border-black px-[2vw] py-[1vh] rounded-[2vw] overflow-hidden"
            >
              shop now
              <div className="button-bg"></div>
            </button>
          </div>
          <div className="favProducts pb-[20vh] overflow-hidden">
            <div
              className="products flex gap-[2vw] px-[2vw] transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {products.map((product, index) => (
                <div
                  className="product text-center rounded-[4vw] px-[4vw] w-1/3 group 
                hover:bg-[#F5F0DF] transition-colors duration-300 ease-in-out"
                  key={index}
                >
                  <img
                    className="w-[30vw] object-cover"
                    src={product.image}
                    alt=""
                  />
                  <div className="flex flex-col gap-[1vw] items-center">
                    <h1 className="font-[headline] text-[1.3vw] leading-[1.5vw]">
                      {product.name}
                    </h1>
                    <p className="font-[light] text-[1.25vw] w-[23vw] leading-[1.6vw]">
                      {product.details}
                    </p>
                    <h4 className="font-[medium]">{product.price}</h4>
                  </div>
                  <div
                    className="mt-[2vw] flex flex-col gap-[2vw] opacity-0 
                transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <button
                      className="button overflow-hidden font-[light] tracking-widest 
          text-[0.9vw] border border-black px-[2vw] py-[1vh] rounded-[2vw] w-full
          transition-colors duration-300 ease-in-out group-hover:bg-[#F5F0DF]"
                    >
                      Buy Now
                      <div className="button-bg"></div>
                    </button>
                    <h5 className="font-[light] uppercase text-[0.9vw] tracking-widest underline underline-offset-[0.7vh]">
                      Read More
                    </h5>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex absolute top-[75vh] w-full justify-between mt-[5vh]">
              <div
                className="sticky bg-gray-400 w-[4vw] h-[8vh] 
          flex justify-center rounded-[0.5vw] transition-all duration-200 select-none"
                onClick={handlePrev}
              >
                <img
                  className="w-[1.2vw] transition-transform duration-200 hover:translate-x-[-0.5vw]"
                  src="./images/leftarrow.svg"
                  alt=""
                />
              </div>
              <div
                className="sticky bg-gray-400 w-[4vw] h-[8vh] 
          flex justify-center rounded-[0.5vw] transition-all duration-200 select-none"
                onClick={handleNext}
              >
                <img
                  className="w-[1.2vw] transition-transform duration-200 hover:translate-x-[0.5vw]"
                  src="./images/rightarrow.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favourites;

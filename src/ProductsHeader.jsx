import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function ProductsHeader({ title, description }) {
  const [isMobile, setIsMobile] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      }
    );
  }, [isMobile]);

  const categoryPaths = {
    coffee: "/category/coffee",
    equipment: "/category/equipment",
    merch: "/all-products",
    bundles: "/category/bundles",
    gifts: "/all-products",
  };

  const mobileView = (
    <div className="w-full py-[5vh] px-[2vw] border-b-[3px] border-opacity-20 border-black">
      <div className="top flex justify-between">
        <h5 className="font-[light] uppercase tracking-widest text-[3.2vw]">
          shop
        </h5>
        <h5 className="font-[light] uppercase text-[3.2vw] tracking-[1.5px]">
          WatchHouse ©
        </h5>
      </div>
      <div className="filterLinks flex flex-col gap-[2vw] mt-[2vh]">
        {["coffee", "equipment", "merch", "bundles", "gifts"].map(
          (item, index) => (
            <Link to={categoryPaths[item]}>
              <h1
                className="w-[max-content] font-[headline] capitalize text-[6vw] opacity-20 transition-opacity 
                  ease-in-out duration-500
                  hover:opacity-100 hover:border-b-[1px] hover:border-black cursor-pointer"
                key={index}
              >
                {item}
              </h1>
            </Link>
          )
        )}
      </div>
      <div className="header w-full flex flex-col gap-[3vh] mt-[5vh]">
        <h1 ref={headerRef} className="w-full font-[headline] text-[15.5vw] leading-[16vw]">
          {title}
        </h1>
        <p className="font-[light]">{description}</p>
      </div>
    </div>
  );

  return (
    <div>
      {isMobile ? (
        mobileView
      ) : (
        <div
          className="top w-full h-[80vh] py-[10vh] flex items-end gap-[15vw] relative 
      border-b-[1px] border-opacity-20 border-black"
        >
          <div className="left">
            <div className="filterLinks flex flex-col gap-[1.5vh]">
              <h5 className="font-[light] uppercase tracking-widest text-[0.9vw]">
                shop
              </h5>
              {["coffee", "equipment", "merch", "bundles", "gifts"].map(
                (item, index) => (
                  <Link to={categoryPaths[item]}>
                    <h1
                      className="w-[max-content] font-[headline] capitalize text-[3vw] opacity-20 transition-opacity 
                  ease-in-out duration-500
                  hover:opacity-100 hover:border-b-[1px] hover:border-black cursor-pointer"
                      key={index}
                    >
                      {item}
                    </h1>
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="right flex flex-col gap-[2vh]">
            <h1 ref={headerRef} className="font-[headline] text-[7vw] leading-[8vw] w-[50vw]">
              {title}
            </h1>
            <p className="font-[light] w-[45vw]">{description}</p>
          </div>
          <div className="logo absolute top-[10vh] right-0">
            <h5 className="font-[light] uppercase text-[0.9vw] tracking-[3px]">
              WatchHouse ©
            </h5>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsHeader;

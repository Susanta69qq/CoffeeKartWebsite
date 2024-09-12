import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ImageBack() {
  const imgRef = useRef(null);
  const elementRef = useRef(null);
  const layoverRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth <= 640);
    };
  
    resizeHandler(); // Set initial value based on current window size
  
    window.addEventListener("resize", resizeHandler);
  
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);
  
  useEffect(() => {
    // Animation for imgRef, applies to both mobile and desktop
    gsap.to(imgRef.current, {
      y: -100,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 90%",
        scrub: 1,
      },
    });
  }, []);
  
  useEffect(() => {
    // Animation for elementRef, only for non-mobile devices
    if (!isMobile) {
      gsap.to(elementRef.current, {
        y: -250,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 90%",
          scrub: 1,
        },
      });
    } else {
      // Clean up animation if on mobile
      gsap.killTweensOf(elementRef.current);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }, [isMobile]);
  
  useEffect(() => {
    // Animation for layoverRef, only for non-mobile devices
    if (!isMobile) {
      gsap.to(layoverRef.current.querySelectorAll("h1"), {
        width: "100%",
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
        stagger: 0.5,
        scrollTrigger: {
          trigger: layoverRef.current,
          start: "-50% 50%",
          end: "100% 50%",
          scrub: 1,
        },
      });
    } else {
      // Clean up animation if on mobile
      gsap.killTweensOf(layoverRef.current.querySelectorAll("h1"));
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }, [isMobile]);

  return (
    <div className="w-full min-h-screen mt-[20vh] max-sm:mt-[7vh]">
      <div className="movingImg relative">
        <img
          ref={imgRef}
          className="w-full max-sm:h-screen object-cover opacity-90"
          src="./images/movingImg.webp"
          alt=""
        />
        <div
          ref={elementRef}
          className="elements absolute 
        flex flex-col gap-[8vw] max-sm:gap-[8vh] w-full h-full top-[30vh] 
        max-sm:top-[25vh] items-center justify-center px-[6vw]"
        >
          <div className="header relative text-center">
            <div className="text-area white-space-nowrap">
              <h1
                className="text-[#FCF7E6] font-[headline] text-[5vw] max-sm:text-[13vw] 
              leading-[6vw] max-sm:leading-[15vw] opacity-35"
              >
                WatchHouse is a slow take on instant
              </h1>{" "}
              <h1
                className="text-[#FCF7E6] font-[headline] text-[5vw] max-sm:text-[13vw] 
              leading-[6vw] max-sm:leading-[15vw] opacity-35"
              >
                gratification. Thoughtful pours, rare
              </h1>
              <h1
                className="text-[#FCF7E6] font-[headline] text-[5vw] max-sm:text-[13vw] 
              leading-[6vw] max-sm:leading-[15vw] opacity-35"
              >
                flavour profiles and paraphernalia
              </h1>
              <h1
                className="text-[#FCF7E6] font-[headline] text-[5vw] max-sm:text-[13vw] 
              leading-[6vw] max-sm:leading-[15vw] opacity-35"
              >
                for your daily cup.
              </h1>
            </div>
            <div
              ref={layoverRef}
              className="layover absolute top-0 left-0 text-center max-sm:hidden"
            >
              <h1
                className="text-[#FCF7E6] font-[headline] text-[5vw] max-sm:text-[13vw] 
              leading-[6vw] max-sm:leading-[15vw]"
              >
                WatchHouse is a slow take on instant
              </h1>{" "}
              <h1
                className="text-[#FCF7E6] font-[headline] text-[5vw] max-sm:text-[13vw] 
              leading-[6vw] max-sm:leading-[15vw]"
              >
                gratification. Thoughtful pours, rare
              </h1>
              <h1
                className="text-[#FCF7E6] font-[headline] text-[5vw] max-sm:text-[13vw] 
              leading-[6vw] max-sm:leading-[15vw]"
              >
                flavour profiles and paraphernalia
              </h1>
              <h1
                className="text-[#FCF7E6] font-[headline] text-[5vw] max-sm:text-[13vw] 
              leading-[6vw] max-sm:leading-[15vw]"
              >
                for your daily cup.
              </h1>
            </div>
          </div>

          <button
            className="button overflow-hidden w-[12vw] max-sm:w-[50vw]
        px-[3vw] max-sm:px-[8vw] py-[0.75vw] max-sm:py-[3vw] rounded-[5vw] font-[medium] 
        uppercase tracking-wider text-[0.9vw] max-sm:text-[3vw]"
          >
            Our Story
            <div className="button-bg"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageBack;

import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VisitUs() {
  const [isMobile, setIsMobile] = useState(false);
  const visitRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const reasizeHandler = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    reasizeHandler();

    window.addEventListener("resize", reasizeHandler);

    return () => window.removeEventListener("resize", reasizeHandler);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      visitRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: { trigger: visitRef.current, start: "top 90%" },
      }
    );
  }, []);

  useEffect(() => {
    let tl = gsap.timeline();

    if (isMobile) {
      // Mobile animations
      tl.to(leftImgRef.current, {
        y: -50,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          scrub: 2,
        },
      });

      tl.to(rightImgRef.current, {
        y: 100,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          scrub: 2,
        },
      });
    } else {
      // Desktop animations
      tl.to(leftImgRef.current, {
        y: -100,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          scrub: 1,
        },
      });

      tl.to(rightImgRef.current, {
        y: 50,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          scrub: 1,
        },
      });
    }

    return () => tl.revert();
  }, [isMobile]);

  const mobileView = (
    <div className="w-full px-[2vw] max-sm:mt-[15vh]" ref={containerRef}>
      <div className="imageContainer w-full flex justify-between gap-[2vw]">
        <div className="left">
          <img
            ref={leftImgRef}
            className="w-full object-cover rounded-[4vw]"
            src="./images/visithome.webp"
            alt=""
          />
        </div>
        <div className="right mt-[-12vh]">
          <img
            ref={rightImgRef}
            className="w-full object-cover rounded-[4vw]"
            src="./images/visithome2.webp"
            alt=""
          />
        </div>
      </div>
      <div className=" flex flex-col gap-[5vw]">
        <div className="text">
          <h1 className="font-[headline] text-[11vw]">Visit Us</h1>
          <p className="font-[light] text-[4vw] leading-[5vw] mt-[4vw]">
            25 square meters on London’s famous Bermondsey Street was all it
            took to conceive WatchHouse and lay the foundations of everything to
            come.
          </p>
          <button
            className="button font-[light] uppercase text-[3.5vw] tracking-widest 
            px-[7vw] py-[1.2vh] border border-black rounded-[5vw] mt-[5vw] overflow-hidden"
          >
            our locations
            <div className="button-bg"></div>
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      {isMobile ? (
        mobileView
      ) : (
        <div className="w-full min-h-screen px-[2vw] mt-[15vh]">
          <div
            ref={containerRef}
            className="imageContainer w-full flex justify-between gap-[2vw]"
          >
            <div ref={leftImgRef} className="left w-[70vw]">
              <img
                className="w-full object-cover rounded-[2vw]"
                src="./images/visithome.webp"
                alt=""
              />
            </div>
            <div className="right w-[30vw] mt-[2vw] flex flex-col gap-[5vw]">
              <div className="text">
                <h1 ref={visitRef} className="font-[headline] text-[5vw]">
                  Visit Us
                </h1>
                <p className="font-[light] text-[1.2vw] leading-[1.7vw] w-[30vw] mt-[1.5vw]">
                  25 square meters on London’s famous Bermondsey Street was all
                  it took to conceive WatchHouse and lay the foundations of
                  everything to come.
                </p>
                <button
                  className="button font-[light] uppercase text-[0.9vw] tracking-widest 
              px-[2vw] py-[1vh] border border-black rounded-[5vw] mt-[2vw] overflow-hidden"
                >
                  our locations
                  <div className="button-bg"></div>
                </button>
              </div>
              <div ref={rightImgRef} className="image">
                <img
                  className="w-[30vw] object-cover rounded-[2vw]"
                  src="./images/visithome2.webp"
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

export default VisitUs;

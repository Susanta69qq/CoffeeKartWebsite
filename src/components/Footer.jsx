import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
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
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
          },
        }
      );
    }
  
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]); // Re-run this effect when isMobile changes
  

  const mobileView = (
    <div
      className="w-full min-h-screen mt-[15vh] max-sm:mt-[2vh] bg-black rounded-tl-[2vw] 
    rounded-tr-[2vw] px-[3vw] py-[6vh]"
    >
      <div className="header w-full text-[#FCF7E6] flex flex-col justify-between gap-[3.75vw]">
        <h1 ref={headerRef} className="font-[headline] text-[9vw] leading-[11vw]">
          Proudly originating in a former 19th century watch house on London's
          famous Bermondsey Street.
        </h1>
        <div className="inbox mt-[2vh]">
          <h2 className="font-[headline] text-[4.5vw]">Perk up your inbox.</h2>
          <p className="text-[4vw] leading-[5vw] font-[light] mt-[1.5vh]">
            Become a subscriber and enjoy 10% off your first order plus access
            to the hottest coffee beans while they’re still cooling.
          </p>
          <div className="input mt-[4vh] relative">
            <input
              className="px-[4vw] py-[2vh] rounded-[10vw] w-full 
            bg-transparent border border-[#FCF7E6] placeholder:text-[#FCF7E6] 
            placeholder:text-[4vw] placeholder:font-[medium]"
              type="email"
              placeholder="Enter your email address"
            />
            <div className="arrow absolute right-[1.5vw] top-[1vh]">
              <div
                className="arrowContainer bg-[#FCF7E6] w-[10vw] h-[10vw] 
              rounded-full relative transition-colors duration-300 group hover:bg-[#26d885]"
              >
                <img
                  className="absolute top-[50%] left-[50%] translate-x-[-50%] 
                  translate-y-[-50%]"
                  src="/images/rightarrow.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-b-[#FCF7E6] mt-[5vh]"></div>
      <div className="links text-[#FCF7E6] flex flex-col justify-between mt-[10vh]">
        <div className="flex gap-[5vw] justify-between">
          {[
            {
              id: "Locations.",
              contents: ["find our houses.", "our food."],
            },
            {
              id: "Shop.",
              contents: [
                "coffee.",
                "pods.",
                "equipment.",
                "bundles.",
                "merch.",
                "our app.",
              ],
            },
            {
              id: "Enquiries.",
              contents: ["contact.", "careers.", "events.", "franchise."],
            },
            {
              id: "Info.",
              contents: [
                "our story.",
                "faqs.",
                "returns.",
                "shipping.",
                "spotlight.",
              ],
            },
          ].map((item, index) => (
            <div key={index}>
              <h4 className="font-[medium] text-[4vw]">{item.id}</h4>
              {item.contents.map((content, index) => (
                <div className="mt-[2vh]">
                  <Link className="link font-[light] text-[3vw] uppercase tracking-widest">
                    {content}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="paymentOptions mt-[4vh]">
          <h4 className="font-[medium] text-[4vw]">Payment Methods.</h4>
          <div className="logos flex gap-[2vw] mt-[3vh]">
            <img
              className="w-[20vw]"
              src="/images/mastercardlogo.avif"
              alt=""
            />
            <img className="w-[20vw]" src="/images/visalogo.webp" alt="" />
            <img className="w-[20vw]" src="/images/paypal.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="social mt-[10vh] flex flex-col gap-[3vh]">
        <div className="socialLinks flex gap-[8vw] cursor-pointer">
          <img
            className="w-[4vw] hover:opacity-50 transition-opacity duration-300"
            src="/images/whitefb.svg"
            alt=""
          />
          <img
            className="w-[4.5vw] hover:opacity-50 transition-opacity duration-300"
            src="/images/whiteinsta.svg"
            alt=""
          />
          <img
            className="w-[4.5vw] hover:opacity-50 transition-opacity duration-300"
            src="/images/whitetwitter.svg"
            alt=""
          />
          <img
            className="w-[4.5vw] hover:opacity-50 transition-opacity duration-300"
            src="/images/whitelinked.svg"
            alt=""
          />
          <img
            className="w-[4.5vw] hover:opacity-50 transition-opacity duration-300"
            src="/images/whiterandom.svg"
            alt=""
          />
        </div>
        <div
          className="currency border border-[#FCF7E6] px-[1vw] py-[0.5vw] 
        rounded-[5vw] flex items-center gap-[1vw] "
        >
          <img src="/images/ukflag.svg" alt="" />
          <h3 className="font-[light] text-[#FCF7E6] ml-4">UK - GBP</h3>
        </div>
        <div className="importantLinks flex gap-[4vw] mt-[5vh]">
          {["2024", "terms", "privacy", "cookies"].map((item, index) => (
            <div
              className="impLink text-[#FCF7E6] uppercase text-[4vw] tracking-widest font-[light]"
              key={index}
            >
              <Link>{item}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {isMobile ? (
        mobileView
      ) : (
        <div
          className="w-full min-h-screen pt-[15vh] bg-black rounded-tl-[2vw] 
     rounded-tr-[2vw] px-[2vw] py-[6vh]"
        >
          <div className="header w-full text-[#FCF7E6] flex justify-between gap-[3.75vw]">
            <h1
              ref={headerRef}
              className="font-[headline] text-[4vw] leading-[4vw]"
            >
              Proudly originating in a former 19th century watch house on
              London's famous Bermondsey Street.
            </h1>
            <div className="inbox mt-[2vh]">
              <h2 className="font-[headline] text-[1.8vw]">
                Perk up your inbox.
              </h2>
              <p className="text-[1.2vw] w-[35vw] leading-[1.5vw] font-[light] mt-[1.5vh]">
                Become a subscriber and enjoy 10% off your first order plus
                access to the hottest coffee beans while they’re still cooling.
              </p>
              <div className="input mt-[4vh] relative">
                <input
                  className="px-[2vw] py-[1vw] rounded-[2vw] w-[32vw] 
             bg-transparent border border-[#FCF7E6] placeholder:text-[#FCF7E6] placeholder:font-[medium]"
                  type="email"
                  placeholder="Enter your email address"
                />
                <div className="arrow absolute right-[3.5vw] top-[1vh]">
                  <div
                    className="arrowContainer bg-[#FCF7E6] w-[3vw] h-[3vw] 
               rounded-full relative transition-colors duration-300 group hover:bg-[#26d885]"
                  >
                    <img
                      className="absolute top-[50%] left-[50%] translate-x-[-50%] 
                   translate-y-[-50%]"
                      src="/images/rightarrow.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-b-[#FCF7E6] mt-[10vh]"></div>
          <div className="links text-[#FCF7E6] flex justify-between mt-[10vh]">
            <div className="flex gap-[5vw]">
              {[
                {
                  id: "Locations.",
                  contents: ["find our houses.", "our food."],
                },
                {
                  id: "Shop.",
                  contents: [
                    "coffee.",
                    "pods.",
                    "equipment.",
                    "bundles.",
                    "merch.",
                    "our app.",
                  ],
                },
                {
                  id: "Enquiries.",
                  contents: ["contact.", "careers.", "events.", "franchise."],
                },
                {
                  id: "Info.",
                  contents: [
                    "our story.",
                    "faqs.",
                    "returns.",
                    "shipping.",
                    "spotlight.",
                  ],
                },
              ].map((item, index) => (
                <div key={index}>
                  <h4 className="font-[medium] text-[1vw]">{item.id}</h4>
                  {item.contents.map((content, index) => (
                    <div className="mt-[2vh]">
                      <Link className="link font-[light] text-[0.9vw] uppercase tracking-widest">
                        {content}
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="paymentOptions">
              <h4 className="font-[medium] text-[1vw]">Payment Methods.</h4>
              <div className="logos flex gap-[1vw] mt-[3vh]">
                <img src="/images/mastercardlogo.avif" alt="" />
                <img src="/images/visalogo.webp" alt="" />
                <img src="/images/paypal.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="social mt-[10vh] flex justify-between items-center">
            <div className="socialLinks w-[10vw] flex gap-[2vw] cursor-pointer">
              <img
                className="w-[1vw] hover:opacity-50 transition-opacity duration-300"
                src="/images/whitefb.svg"
                alt=""
              />
              <img
                className="w-[1.5vw] hover:opacity-50 transition-opacity duration-300"
                src="/images/whiteinsta.svg"
                alt=""
              />
              <img
                className="w-[1.5vw] hover:opacity-50 transition-opacity duration-300"
                src="/images/whitetwitter.svg"
                alt=""
              />
              <img
                className="w-[1.5vw] hover:opacity-50 transition-opacity duration-300"
                src="/images/whitelinked.svg"
                alt=""
              />
              <img
                className="w-[1.5vw] hover:opacity-50 transition-opacity duration-300"
                src="/images/whiterandom.svg"
                alt=""
              />
            </div>
            <div
              className="currency border border-[#FCF7E6] px-[1vw] py-[0.5vw] 
         rounded-[2vw] flex items-center gap-[1vw] w-[11vw]"
            >
              <img src="/images/ukflag.svg" alt="" />
              <h3 className="font-[light] text-[#FCF7E6]">UK - GBP</h3>
            </div>
            <div className="importantLinks flex gap-[2vw]">
              {["2024", "terms", "privacy", "cookies"].map((item, index) => (
                <div
                  className="impLink text-[#FCF7E6] uppercase text-[0.9vw] tracking-widest font-[light]"
                  key={index}
                >
                  <Link>{item}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;

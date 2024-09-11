import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="w-full min-h-screen mt-[15vh] bg-black rounded-tl-[2vw] 
    rounded-tr-[2vw] px-[2vw] py-[6vh]"
    >
      <div className="header w-full text-[#FCF7E6] flex justify-between gap-[3.75vw]">
        <h1 className="font-[headline] text-[4vw] leading-[4vw]">
          Proudly originating in a former 19th century watch house on London's
          famous Bermondsey Street.
        </h1>
        <div className="inbox mt-[2vh]">
          <h2 className="font-[headline] text-[1.8vw]">Perk up your inbox.</h2>
          <p className="text-[1.2vw] w-[35vw] leading-[1.5vw] font-[light] mt-[1.5vh]">
            Become a subscriber and enjoy 10% off your first order plus access
            to the hottest coffee beans while they’re still cooling.
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
                  src="./images/rightarrow.svg"
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
                  <Link className="font-[light] text-[0.9vw] uppercase tracking-widest">
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
            <img src="./images/mastercardlogo.avif" alt="" />
            <img src="./images/visalogo.webp" alt="" />
            <img src="./images/paypal.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="social">
        
      </div>
    </div>
  );
}

export default Footer;

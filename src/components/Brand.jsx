import React, { useEffect, useState } from "react";

// Reusable component for displaying a logo and quote
const LogoQuote = ({ imgSrc, quote }) => (
  <div className="flex items-center gap-[2vw] font-[light] max-sm:gap-[4vw]">
    <img className="w-[35%] max-sm:w-[150px]" src={imgSrc} alt="" />
    <h4 className="font-[medium] w-[35vw] max-sm:w-[100vw]">{quote}</h4>
  </div>
);

function Brand() {
  
  // Array of logo and quote data
  const logosQuotes = [
    {
      imgSrc: "./images/europeanlogo.webp",
      quote: "Best Independent Coffee Shop - Europe",
    },
    {
      imgSrc: "./images/forbeslogo.webp",
      quote:
        "WatchHouse have placed a focus on sourcing the best quality coffee, as fairly and sustainably as possible.",
    },
    {
      imgSrc: "./images/wallpaperlogo.webp",
      quote:
        "WatchHouse’s well-crafted coffee might just tip into the bucket of essentialism.",
    },
    {
      imgSrc: "./images/voguelogo.webp",
      quote: "The food at every one of its locations is excellent.",
    },
  ];

  return (
    <div className="w-full pt-[10vh] overflow-hidden py-[10vh] relative bg-[#F5F0DF]">
      <div className="movingAnimation font-[light] flex gap-[2vw] max-sm:gap-[8vw] text-[1.1vw] 
      max-sm:text-[3.5vw] leading-[1.5vw] max-sm:leading-[3.5vw]">
        {/* Loop through the data array */}
        {logosQuotes.map((item, index) => (
          <LogoQuote key={index} imgSrc={item.imgSrc} quote={item.quote} />
        ))}
        {/* Repeat logos and quotes for seamless scrolling */}
        {logosQuotes.map((item, index) => (
          <LogoQuote key={`repeat-${index}`} imgSrc={item.imgSrc} quote={item.quote} />
        ))}
      </div>
    </div>
  );
}

export default Brand;

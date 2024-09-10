import React from "react";

function ImageBack() {
  return (
    <div className="w-full min-h-screen mt-[20vh] max-sm:mt-[7vh]">
      <div className="movingImg relative">
        <img
          className="w-full h-[80%] max-sm:h-screen object-cover opacity-90"
          src="./images/movingImg.webp"
          alt=""
        />
        <h1
          className="absolute top-[50vh] max-sm:top-[5vh] px-[5vw] text-[#FCF7E6] font-[headline] 
        text-[5vw] max-sm:text-[13vw] leading-[6vw] max-sm:leading-[15vw] text-center opacity-35"
        >
          WatchHouse is a slow take on instant gratification. Thoughtful pours,
          rare flavour profiles and paraphernalia for your daily cup.
        </h1>
        <button className="button absolute bottom-[14vh] max-sm:bottom-[14vh] left-[43vw] max-sm:left-[33vw] overflow-hidden 
        px-[3vw] max-sm:px-[8vw] py-[0.75vw] max-sm:py-[2vw] rounded-[5vw] font-[medium] 
        uppercase tracking-wider text-[0.9vw] max-sm:text-[3vw]">
          Our Story
          <div className="button-bg"></div>
        </button>
      </div>
    </div>
  );
}

export default ImageBack;

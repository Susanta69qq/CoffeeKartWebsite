import React, { useEffect, useState } from "react";

function LandingPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const mobileView = (
    <div className="w-full min-h-screen relative">
      <div>
        <video
          src="./videos/landingVideo.mp4"
          autoPlay
          loop
          muted
          className="max-sm:w-full max-sm:h-[75vh] object-cover"
        ></video>
        <div className="absolute top-[37.5vh] max-sm:top-[20vh] left-[32.5vw] max-sm:left-[9vw]">
            <h1 className="text-[#FCF7E6] text-center font-[headline] 
            text-[5vw] max-sm:text-[13vw] max-sm:leading-[13vw] tracking-tighter">
              A decade of
            </h1>
            <h1 className="text-[#FCF7E6] text-center font-[headline] 
            text-[5vw] max-sm:text-[13vw] max-sm:leading-[13vw] tracking-tighter">
              Modern Coffee.
            </h1>
            <h2 className="text-[#FCF7E6] text-center font-[headline] 
            text-[2.5vw] max-sm:text-[6vw] leading-[2.5vw] max-sm:leading-[6vw] mt-[5vh] max-sm:mt-[2vh]">
              WatchHouse turns 10.
            </h2>
            <button
              className="button relative z-10 font-[light] text-[.8vw] max-sm:text-[3vw] tracking-widest mt-[1.5vh] 
      uppercase px-[2.5vw] max-sm:px-[8vw] py-[1.7vh] max-sm:py-[1.5vh] rounded-3xl 
      overflow-hidden ml-[15vw] bg-[#FCF7E6]"
            >
              celebrate with us
              {/* <span className="button-bg"></span> */}
            </button>
          </div>
      </div>
    </div>
  );

  return (
    <>
      {isMobile ? (
        mobileView
      ) : (
        <div className="w-full min-h-screen">
          <video
            src="./videos/landingVideo.mp4"
            autoPlay
            loop
            muted
            className="w-full relative"
          ></video>
          <div className="absolute top-[37.5vh] left-[32.5vw]">
            <h1 className="text-[#FCF7E6] text-center font-[headline] text-[5vw] leading-[5vw] tracking-tighter">
              A decade of
            </h1>
            <h1 className="text-[#FCF7E6] text-center font-[headline] text-[5vw] leading-[5vw] tracking-tighter">
              Modern Coffee.
            </h1>
            <h2 className="text-[#FCF7E6] text-center font-[headline] text-[2.5vw] leading-[2.5vw] mt-[5vh]">
              WatchHouse turns 10.
            </h2>
            <button
              className="button relative z-10 font-[light] text-[.8vw] tracking-widest mt-[5vh] 
      uppercase px-[2.5vw] py-[1.7vh] rounded-3xl overflow-hidden ml-[8vw] bg-[#FCF7E6]"
            >
              celebrate with us
              <span className="button-bg"></span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default LandingPage;

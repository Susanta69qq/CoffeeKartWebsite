import React from "react";

function AllProducts() {

    const AllProducts = [
        {
            
        }
    ]

  return (
    <div className="w-full min-h-screen px-[2vw]">
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
                <h1
                  className="w-[max-content] font-[headline] capitalize text-[3vw] opacity-20 transition-opacity 
                  ease-in-out duration-500
                  hover:opacity-100 hover:border-b-[1px] hover:border-black cursor-pointer"
                  key={index}
                >
                  {item}
                </h1>
              )
            )}
          </div>
        </div>
        <div className="right flex flex-col gap-[2vh]">
          <h1 className="font-[headline] text-[7vw] leading-[8vw]">
            All Products.
          </h1>
          <p className="font-[light]">
            Find a compilation of all our coffee, equipment and gifting ideas in
            one place.
          </p>
        </div>
        <div className="logo absolute top-[10vh] right-0">
          <h5 className="font-[light] uppercase text-[0.9vw] tracking-[3px]">
            WatchHouse ©
          </h5>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;

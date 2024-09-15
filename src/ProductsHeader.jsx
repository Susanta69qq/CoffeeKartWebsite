import React from "react";
import { Link } from "react-router-dom";

function ProductsHeader({title, description}) {
  const categoryPaths = {
    coffee: "/category/coffee",
    equipment: "/category/equipment",
    merch: "/all-products",
    bundles: "/category/bundles",
    gifts: "/all-products",
  };

  return (
    <div>
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
          <h1 className="font-[headline] text-[7vw] leading-[8vw] w-[50vw]">
            {title}
          </h1>
          <p className="font-[light] w-[45vw]">
            {description}
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

export default ProductsHeader;

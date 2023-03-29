import React from "react";
import { Link } from "react-router-dom";
import property from "../../images/property-bg2.svg";
// import { useState } from "react";
// import Salesfilter from "./sales/Salesfilter";
// import { MdFilterList } from "react-icons/md";
// import Saleslist from "./sales/Saleslist";
// import Lisbon from "./sales/Locations/Lisbon";
// import Saleslist from "./sales/Saleslist";
// import Rentlist from "./rent/Rentlist";

const Properties = () => {
  // const [sales, setSales] = useState(false);
  // const saleClick = () => setSales(!sales);

  // const [rent, setRent] = useState(false);
  // const rentClick = () => setRent(!rent);

  // const [show, setShow] = useState(false);
  // const changeClick = () => setShow(!show);

  // let saleButtonAlert = "";

  return (
    <div>
      <div
        className="w-full h-[350px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${property})` }}
      >
        {/*container */}
        <div className="h-full w-[360px] md:w-[1020px] mx-auto">
          <h1 className="block text-center text-2xl md:text-3xl pt-[50px] text-gray-200 font-bold">
            Happy Homes portugal have a variety of properties all over the
            portugal.
          </h1>
          <p className="w-[350px] mx-auto text-[14px] mt-[80px] text-center font-bold text-orange-600 bg-black p-[15px]">
            Properties in Portugal - 5000+
          </p>
        </div>
      </div>
      {/*button & filter container*/}
      <div className="h-full w-[360px] md:w-[1020px] mx-auto">
        {/*button */}
        <div className="flex items-center justify-between mt-[20px]">
          <Link
            // onClick={saleClick}
            to="/property-for-sale"
            className="mx-auto font-bold border-[4px] text-center w-full py-4 hover:bg-gray-200 hover:font-bold"
          >
            For sales
          </Link>
          <Link
            to="/property-for-rent"
            // onClick={rentClick}
            className="mx-auto border-[4px] font-bold text-center w-full py-4 hover:bg-gray-200 hover:font-bold"
          >
            For rent
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Properties;

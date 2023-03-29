import React from "react";
import property from "../../images/property-bg2.svg";

const PropertySingle = () => {
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
    </div>
  );
};

export default PropertySingle;

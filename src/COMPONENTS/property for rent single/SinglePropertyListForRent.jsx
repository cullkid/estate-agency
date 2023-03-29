import React from "react";
import Footer from "../../REUSE COMPONENTS/footer/Footer";
import PropertySingle from "../../REUSE COMPONENTS/properties/PropertySingle";
import SinglePropertyListForRent from "../../REUSE COMPONENTS/properties for rent/SinglePropertyListForRent";

const SinglePropertyListForrent = () => {
  return (
    <div>
      <PropertySingle />
      <div className=" w-[360px] md:w-[1000px] mx-auto">
        <SinglePropertyListForRent />
      </div>

      <Footer />
    </div>
  );
};

export default SinglePropertyListForrent;

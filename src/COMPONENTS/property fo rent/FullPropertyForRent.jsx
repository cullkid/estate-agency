import React from "react";
import Filter from "../../REUSE COMPONENTS/filters propTypes/Filter";
import Footer from "../../REUSE COMPONENTS/footer/Footer";
import FullPropertyListForRent from "../../REUSE COMPONENTS/properties for rent/FullPropertyListForRent";
import Properties from "../../REUSE COMPONENTS/properties/Properties";

const FullPropertyForRent = () => {
  return (
    <div>
      <Properties />
      <div className="h-full w-[360px] md:w-[1020px] mx-auto">
        <Filter />
      </div>
      <FullPropertyListForRent />
      <Footer />
    </div>
  );
};

export default FullPropertyForRent;

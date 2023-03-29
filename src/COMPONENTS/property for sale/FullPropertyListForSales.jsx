import React from "react";
import Filter from "../../REUSE COMPONENTS/filters propTypes/Filter";
import Footer from "../../REUSE COMPONENTS/footer/Footer";
import Properties from "../../REUSE COMPONENTS/properties/Properties";
import LocationProperties from "../../REUSE COMPONENTS/property locations/LocationProperties";
import FullPropertyListForSale from "../../REUSE COMPONENTS/proprties for sale/FullPropertyListForSale";

const FullPropertyListForSales = () => {
  return (
    <div>
      <Properties />
      <div className="h-full w-[360px] md:w-[1020px] mx-auto">
        <Filter />
        <div className="md:grid grid-cols-2 gap-[10px]">
          <FullPropertyListForSale />
          <div className=" mt-[20px] md:mt-[200px]">
            <LocationProperties />
          </div>
        </div>
        <div className="mt-[20px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default FullPropertyListForSales;

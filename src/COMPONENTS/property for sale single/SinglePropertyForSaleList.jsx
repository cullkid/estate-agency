import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../REUSE COMPONENTS/footer/Footer";
import Enquiry from "../../REUSE COMPONENTS/forms/Enquiry";
import PropertySingle from "../../REUSE COMPONENTS/properties/PropertySingle";
import { BiLeftArrowAlt } from "react-icons/bi";
import SinglePropertyListForSale from "../../REUSE COMPONENTS/proprties for sale/SinglePropertyListForSale";

const SinglePropertyForSaleList = () => {
  return (
    <div>
      <PropertySingle />
      <Link
        to="/property-for-sale"
        className="w-[360px] md:w-[1000px] mx-auto flex items-center py-[10px] mt-[50px]"
      >
        <div className="w-[100px] flex items-center justify-between">
          <BiLeftArrowAlt size={55} className="text-yellow-600" />
          <p className="text-[20px] text-yellow-600 font-bold">Back</p>
        </div>
      </Link>
      <div className="h-full w-[360px] md:w-[1000px] mx-auto md:grid grid-cols-2 gap-[10px]">
        <SinglePropertyListForSale />
        <div className="mt-[130px] h-[650px] border-4 rounded-[10px] w-[360px] justify-self-end">
          <Enquiry
            enquiry="Make An Enquiry"
            name="Your name"
            place="name"
            email="Email"
            holder="example@gmail.com"
            phone="Phone"
            number="Number"
            comment="Your comment"
            button="submit"
            desc="When you send an enquiry, a member of our customer services team will
          reply to you with more information. By submitting this form, you
          confirm that you agree to our website  privacy policy and consent to
          cookies being stored on your device."
            id="ID: 12345"
          />
        </div>
      </div>
      <div className="pt-[100px]">
        <Footer />
      </div>
    </div>
  );
};

export default SinglePropertyForSaleList;

import React from "react";

import Contact from "../../REUSE COMPONENTS/contact details/Contact";
import ContactDetail from "../../REUSE COMPONENTS/contact details/ContactDetails";
import Footer from "../../REUSE COMPONENTS/footer/Footer";
import Enquiry from "../../REUSE COMPONENTS/forms/Enquiry";

const FullContacts = () => {
  return (
    <div>
      <div className="w-[360px] md:w-[1000px] mx-auto">
        <div className="md:grid grid-cols-2 gap-x-10px">
          <Contact />
          <article className="my-auto md:mt-[50px] mt-[25px] border-4 w-[350px] rounded-t-[10px] place-self-end">
            <Enquiry
              enquiry="Contact Us"
              name="Your name"
              place="name"
              email="Email"
              holder="example@gmail.com"
              phone="Phone"
              number="Number"
              comment="Your comment"
              button="contact"
              desc="When you send an enquiry, a member of our customer services team will
          reply to you with more information. By submitting this form, you
          confirm that you agree to our website  privacy policy and consent to
          cookies being stored on your device."
            />
          </article>
        </div>
        <ContactDetail />
        <Footer />
      </div>
    </div>
  );
};

export default FullContacts;

import React from "react";
import contact from "../../images/contact-img.svg";

const Contact = () => {
  return (
    <div>
      <div className="h-full w-[360px] md:w-[1000px] mx-auto">
        <article className="md:w-[550px]">
          <h1 className="text-black text-font-bold mt-[50px]">CONTACT US</h1>
          <p className="border-y-[3px] h-[4px] my-[20px]"></p>
          <p>
            Established in 2012, Happy Homes Portugal has helped hundreds of
            happy customers buy and sell Algarve property over the last 10
            years. We have a portfolio of over 300 high-quality homes for sale,
            and we work with partner developers and agents across the portugal,
            so our customers can see all the properties they want to view, all
            with one agent.
          </p>
          <img className="block mt-[40px]" src={contact} alt="contact-img" />
          <p className="mt-[40px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            fugit corporis consectetur eos dolorem, recusandae deserunt beatae
            quo laboriosam omnis facilis optio ea non fugiat pariatur laudantium
            aspernatur enim voluptatum quae vitae nihil. Iste, sequi!
          </p>
          <p className="mt-[20px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            fugit corporis consectetur eos dolorem, recusandae deserunt beatae
            quo laboriosam omnis facilis optio ea non fugiat
          </p>
          <p className="mt-[20px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            fugit corporis consectetur eos dolorem, recusandae deserunt beatae
            quo laboriosam omnis facilis optio ea non fugiat pariatur laudantium
            aspernatur enim voluptatum quae vitae nihil. Iste, sequi!
          </p>
          <p className="mt-[30px]">We look forward to meeting you soon!</p>
        </article>
      </div>
    </div>
  );
};

export default Contact;

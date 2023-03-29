import React from "react";

const Enquiry = ({
  enquiry,
  name,
  place,
  email,
  holder,
  phone,
  number,
  comment,
  button,
  desc,
  id,
}) => {
  return (
    <div>
      <section>
        <h1 className="bg-[#1E0909] px-[15px] rounded-t-[10px] text-white text-[14px] font-bold py-[5px]">
          {enquiry}
        </h1>
        <form>
          <article className="flex flex-col px-[15px] mt-[15px]">
            <p className="font-bold">{name}</p>
            <input
              type="text"
              placeholder={place}
              name="name"
              className="border-2 w-full px-[10px]"
            />
          </article>
          <article className="flex flex-col px-[15px] mt-[15px]">
            <p className="font-bold">{email}</p>
            <input
              type="text"
              placeholder={holder}
              name="email"
              className="border-2 w-full px-[10px]"
            />
          </article>
          <article className="flex flex-col px-[15px] mt-[15px]">
            <p className="font-bold">{phone}</p>
            <input
              type="number"
              placeholder={number}
              name="number"
              className="border-2 w-full px-[10px]"
            />
          </article>
          <article className="flex flex-col px-[15px] mt-[15px]">
            <p>{comment}</p>
            <textarea
              name="comment"
              id=""
              cols="30"
              className="border-2 text-black"
            ></textarea>
          </article>
          <button className="w-[300px] ml-[20px] text-white hover:bg-pink-400 mt-[15px] rounded-full bg-pink-600 text-center text-[14px] font-bold py-[5px]">
            {button}
          </button>
        </form>
        <p className="px-[15px] pt-[15px]">{desc}</p>

        <p className="text-pink-600 mt-[15px] text-2xl px-[15px]">{id}</p>
      </section>
    </div>
  );
};

export default Enquiry;

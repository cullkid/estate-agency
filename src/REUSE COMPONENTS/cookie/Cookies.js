import React, { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Cookies = () => {
  const [accept, setAccept] = useState(false);
  const closeCookies = () => setAccept(!accept);

  return (
    <div className="w-[650px]  bg-gray-500 fixed top-[600px] left-[500px]">
      {!accept ? (
        <div
          // onClick={closeCookies}
          className="text-white flex border-4 justify-between border-t-[3px] items-center px-[40px] py-[30px]"
        >
          <p className="text-[12px] md:text-[20px]">
            Happy homes portugal use cookies to secure and save privacy. Accept
            if you agree to the rules.
          </p>

          <FaRegTimesCircle size={40} onClick={closeCookies} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cookies;

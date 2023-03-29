import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import lisbon from "../../images/lisbon-rent1.svg";
import { BsCurrencyEuro } from "react-icons/bs";
import { Link } from "react-router-dom";
// import RentLocation from "../rent/RentLocation";

const FullPropertyListForRent = () => {
  return (
    <div>
      <div className="h-full  w-[360px] md:w-[1000px] mx-auto md:grid grid-cols-3 gap-[10px]">
        <Link to="/single-page-property-for-rent">
          <div className="mt-[30px] ">
            <img
              className="object-fill w-[250px]"
              src={lisbon}
              alt="img slide 1"
            />
            <h1 className=" w-[250px] text-pink-600 font-bold">
              T3 apartment for rent in lisbon portugal
            </h1>
            <h2 className=" mt-[10px] w-[250px]">
              No. 8 3d Av. Antonio,{" "}
              <span className="font-bold">Damaia Lisbon.</span>{" "}
            </h2>

            <p className="flex items-center mt-[10px]">
              <span className="text-xl font-bold">1.800</span>{" "}
              <span>
                <BsCurrencyEuro size={12} />
              </span>{" "}
              <span className="text-[10px]">/month</span>
            </p>
          </div>
        </Link>
        <Link to="/single-page-property-for-rent">
          <div className="mt-[30px] ">
            <img
              className="object-fill w-[250px]"
              src={lisbon}
              alt="img slide 1"
            />
            <h1 className=" w-[250px] text-pink-600 font-bold">
              T3 apartment for rent in lisbon portugal
            </h1>
            <h2 className=" mt-[10px] w-[250px]">
              No. 8 3d Av. Antonio,{" "}
              <span className="font-bold">Damaia Lisbon.</span>{" "}
            </h2>

            <p className="flex items-center mt-[10px]">
              <span className="text-xl font-bold">1.800</span>{" "}
              <span>
                <BsCurrencyEuro size={12} />
              </span>{" "}
              <span className="text-[10px]">/month</span>
            </p>
          </div>
        </Link>
        <Link to="/single-page-property-for-rent">
          <div className="mt-[30px] ">
            <img
              className="object-fill w-[250px]"
              src={lisbon}
              alt="img slide 1"
            />
            <h1 className=" w-[250px] text-pink-600 font-bold">
              T3 apartment for rent in lisbon portugal
            </h1>
            <h2 className=" mt-[10px] w-[250px]">
              No. 8 3d Av. Antonio,{" "}
              <span className="font-bold">Damaia Lisbon.</span>{" "}
            </h2>

            <p className="flex items-center mt-[10px]">
              <span className="text-xl font-bold">1.800</span>{" "}
              <span>
                <BsCurrencyEuro size={12} />
              </span>{" "}
              <span className="text-[10px]">/month</span>
            </p>
          </div>
        </Link>
        <Link to="/single-page-property-for-rent">
          <div className="mt-[30px]">
            <img
              className="object-fill w-[250px]"
              src={lisbon}
              alt="img slide 1"
            />
            <h1 className=" w-[250px] text-pink-600 font-bold">
              T3 apartment for rent in lisbon portugal
            </h1>
            <h2 className=" mt-[10px] w-[250px]">
              No. 8 3d Av. Antonio,{" "}
              <span className="font-bold">Damaia Lisbon.</span>{" "}
            </h2>

            <p className="flex items-center mt-[10px]">
              <span className="text-xl font-bold">1.800</span>{" "}
              <span>
                <BsCurrencyEuro size={12} />
              </span>{" "}
              <span className="text-[10px]">/month</span>
            </p>
          </div>
        </Link>
        <Link to="/single-page-property-for-rent">
          <div className="mt-[30px] ">
            <img
              className="object-fill w-[250px]"
              src={lisbon}
              alt="img slide 1"
            />
            <h1 className=" w-[250px] text-pink-600 font-bold">
              T3 apartment for rent in lisbon portugal
            </h1>
            <h2 className=" mt-[10px] w-[250px]">
              No. 8 3d Av. Antonio,{" "}
              <span className="font-bold">Damaia Lisbon.</span>{" "}
            </h2>

            <p className="flex items-center mt-[10px]">
              <span className="text-xl font-bold">1.800</span>{" "}
              <span>
                <BsCurrencyEuro size={12} />
              </span>{" "}
              <span className="text-[10px]">/month</span>
            </p>
          </div>
        </Link>
        <Link to="/single-page-property-for-rent">
          <div className="mt-[30px] ">
            <img
              className="object-fill w-[250px]"
              src={lisbon}
              alt="img slide 1"
            />
            <h1 className=" w-[250px] text-pink-600 font-bold">
              T3 apartment for rent in lisbon portugal
            </h1>
            <h2 className=" mt-[10px] w-[250px]">
              No. 8 3d Av. Antonio,{" "}
              <span className="font-bold">Damaia Lisbon.</span>{" "}
            </h2>

            <p className="flex items-center mt-[10px]">
              <span className="text-xl font-bold">1.800</span>{" "}
              <span>
                <BsCurrencyEuro size={12} />
              </span>{" "}
              <span className="text-[10px]">/month</span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FullPropertyListForRent;

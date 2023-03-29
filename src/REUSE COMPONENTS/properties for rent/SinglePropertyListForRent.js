import React from "react";
// import property from "../../../images/property-bg2.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import lisbon from "../../images/lisbon-rent1.svg";
import lisbon2 from "../../images/lisbon-rent2.svg";
import lisbon3 from "../../images/lisbon-rent3.svg";
import { BsCurrencyEuro } from "react-icons/bs";
import { MdAddIcCall, MdEmail, MdDeleteOutline } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import { IoMdShareAlt } from "react-icons/io";
import { Link } from "react-router-dom";
// import RentLocation from "../rent/RentLocation";

const SinglePropertyListForRent = () => {
  return (
    <div>
      {/* <div className="h-full w-[360px] md:w-[1000px] mx-auto md:grid grid-cols-2 gap-[10px]"> */}
      <div className="h-full w-[360px] md:w-[1000px] mx-auto md:grid grid-cols-2 gap-[10px]">
        {/*carousel & grid child1*/}
        <div className="mt-[30px]">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="object-fill w-full h-96"
                src={lisbon}
                alt="img slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-full h-96"
                src={lisbon2}
                alt="img slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-full h-96"
                src={lisbon3}
                alt="img slide 3"
              />
            </SwiperSlide>
          </Swiper>
          <h1 className="mt-[20px] text-2xl text-pink-600 font-bold">
            T3 apartment for rent in lisbon portugal
          </h1>
          <h2 className="text-xl mt-[10px]">
            No. 8 3d Av. Antonio,{" "}
            <span className="font-bold">Damaia Lisbon.</span>{" "}
          </h2>
          {/*price container */}
          <p className="flex items-center">
            <span className="text-xl font-bold">1.800</span>{" "}
            <span>
              <BsCurrencyEuro size={12} />
            </span>{" "}
            <span className="text-[10px]">/month</span>
          </p>
          {/*inner-grid container*/}
          <article className="flex items-center justify-between mt-[25px] border-b-[4px] pb-[30px]">
            <p>3 beds</p>
            <p>2 baths</p>
            <p>
              85 m<sup>2</sup>{" "}
            </p>
          </article>
          {/*inner-flex container */}
          <article className="grid grid-cols-2 gap-x-[20px] mt-[30px] text-pink-600 border-b-[4px] pb-[30px]">
            <div className="md:w-[160px] w-[120px] flex items-center justify-between">
              <Link className="flex items-center">
                {" "}
                <MdAddIcCall />
                <span className="ml-[6px] text-black">Call</span>
              </Link>
              <Link className="flex items-center">
                <MdEmail />
                <span className="ml-[6px] text-black">Mail</span>
              </Link>
            </div>
            <div className="md:w-[260px] text-white place-items-center grid grid-cols-4 gap-x-[10px]">
              <Link className="p-[4px] bg-black rounded-full">
                <MdDeleteOutline />
              </Link>
              <Link className="p-[4px] bg-black rounded-full">
                {" "}
                <AiOutlineLike />
              </Link>
              <Link className="p-[4px] bg-black rounded-full">
                {" "}
                <BsBookmarkPlus />
              </Link>
              <Link className="p-[4px] bg-black rounded-full">
                <IoMdShareAlt />
              </Link>
            </div>
          </article>
          <p className="my-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            architecto nisi maiores. Deserunt possimus esse quasi natus quod
            tempore nobis impedit sequi in numquam, suscipit est illum dolores
            accusantium libero dolorem, architecto necessitatibus expedita eius
            veritatis. Ex quas saepe vel in aspernatur delectus eos? Facilis
            expedita quod exercitationem eligendi ea enim sapiente impedit
            officiis saepe eum dolores, accusantium voluptates quibusdam, iste
            adipisci molestiae voluptate optio ipsam soluta laboriosam
            perferendis animi sed corrupti! Ipsa ipsam reiciendis consequatur,
            laborum
          </p>
          <p className="border-y-[4px] py-[30px]">
            ut eligendi quo repellat, ea eaque consectetur deleniti, enim
            expedita cupiditate atque earum laboriosam quis ipsum, labore nemo
            recusandae accusantium libero officiis fuga ad. Neque quas eum alias
            veritatis ex eaque rem, quasi a aperiam ipsam nesciunt deleniti hic
            eos enim tempora accusamus non amet quod quaerat dignissimos
            reprehenderit? Illo labore maxime neque facere commodi molestias,
            accusamus suscipit voluptates quisquam, architecto excepturi, sint
            iure distinctio ipsam doloremque dolores natus beatae vel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePropertyListForRent;

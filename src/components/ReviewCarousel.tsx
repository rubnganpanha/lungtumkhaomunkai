import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import "../app/swiper/styles.css";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import { EffectCards } from "swiper/modules";

// import icon
import { AiFillStar } from "react-icons/ai";

import { Rating } from "../../public/assets/rate";
const ReviewCarousel = ({ slider }) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper-review max-w-[350px] lg:max-w-[550px] h-[300px] lg:h-[300px] mx-auto px-24"
      >
        {/* default card */}
        <SwiperSlide>
          <div className="w-full mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl m-5 text-black">
            <div className="tracking-wide text-2xl lg:text-4xl font-semibold pt-4 pl-4 lg:pt-8 lg:pl-8">
              เรตติ้งร้าน
            </div>
            <div className="p-4 flex items-center">
              <div>
                <div className="flex items-center mt-4">
                  <p className="text-sm font-medium text-dark">5</p>
                  <div className="h-2 w-40 lg:w-80 mx-4 rounded-full bg-gray-200">
                    <div className="flex h-full items-center justify-center rounded-md bg-yellow-500 dark:bg-yellow-400 w-11/12"></div>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <p className="text-sm font-medium text-dark">4</p>
                  <div className="h-2 w-40 lg:w-80 mx-4 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="flex h-full items-center justify-center rounded-md bg-yellow-500 dark:bg-yellow-400	w-3/12"></div>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <p className="text-sm font-medium text-dark">3</p>
                  <div className="h-2 w-40 lg:w-80 mx-4 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="flex h-full items-center justify-center rounded-md bg-yellow-500 dark:bg-yellow-400  w-2/12"></div>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <p className="text-sm font-medium text-dark">2</p>
                  <div className="h-2 w-40 lg:w-80 mx-4 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="flex h-full items-center justify-center rounded-md bg-yellow-500 dark:bg-yellow-400 w-0"></div>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <p className="text-sm font-medium text-dark">1</p>
                  <div className="h-2 w-40 lg:w-80 mx-4 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="flex h-full items-center justify-center rounded-md bg-yellow-500 dark:bg-yellow-400 w-1/12"></div>
                  </div>
                </div>
              </div>
              <div className="px-4 m-auto text-center ">
                <p className="text-4xl font-bold">4.8</p>
                <div className="flex items-center text-yellow-400">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p>(1275)</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {slider.map((item, index) => {
          // destructer item
          const { image, message, name, period, rating } = item;
          return (
            <SwiperSlide key={index}>
              <div className="text-lg px-8 pt-4 text-center text-black">
                {/* detail */}
                <div className="lg:mb-3 font-medium">&quot;{message}&quot;</div>
                {/* image */}
                <div className="inline-block relative object-cover object-center w-[58px] h-[58px] mb-3">
                  <Image
                    src={image}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                {/* name */}
                <div className="mt-4">{name}</div>
                {/* period */}
                <div className="mb-4 text-sm font-normal">{period}</div>
                {/* rating */}
                <Rating point={rating} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ReviewCarousel;

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
const ReviewCarousel = ({ slider }: any) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper-review max-w-[350px] lg:max-w-[550px] h-[300px] lg:h-[400px] mx-auto px-4 lg:px-24"
      >
        {/* Default Card */}
        <SwiperSlide>
          <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl text-black">
            <div className="tracking-wide text-xl lg:text-2xl font-semibold pt-4 pl-4 lg:pt-8 lg:pl-8">
              เรตติ้งร้าน
            </div>
            <div className="p-4 flex items-center">
              <div>
                <div className="flex items-center mt-4">
                  <p className="text-sm font-medium text-dark">5</p>
                  <div className="h-2 w-40 lg:w-80 mx-4 rounded-full bg-gray-200">
                    <div className="flex h-full rounded-md bg-yellow-500 w-11/12"></div>
                  </div>
                </div>
                {/* Add similar blocks for ratings 4 to 1 */}
              </div>
              <div className="px-4 text-center">
                <p className="text-4xl font-bold">4.8</p>
                <div className="flex items-center text-yellow-400">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p>(2009)</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {slider.map((item: any, index: any) => (
          <SwiperSlide key={index}>
            <div className="text-lg p-8 text-center text-black">
              <div className="mb-3 font-medium">&quot;{item.message}&quot;</div>
              <div className="relative w-16 h-16 mx-auto">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mt-4">{item.name}</div>
              <div className="text-sm font-light mb-4">{item.period}</div>
              <Rating point={item.rating} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReviewCarousel;

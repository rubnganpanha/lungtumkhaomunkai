import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../app/swiper/styles-Scrollbar.css";

// import required modules
import { Autoplay, Scrollbar } from "swiper/modules";
import Image from "next/image";

import { eventData } from "@/constants";
import Link from "next/link";

export default function EventsCarousel() {
  const { title, subtitle, slider } = eventData;

  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        scrollbar={{
          hide: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Scrollbar]}
        className="mySwiper-events lg:max-w-[1800px] h-[700px] mx-auto px-4 lg:px-24"
      >
        {slider.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col lg:flex-row items-center justify-center p-4"
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 h-[300px] lg:h-[500px] relative">
              <Image
                src={item.image}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Content Section */}
            <div className="text-white text-center lg:text-left w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-8">
              <h3 className="text-second-main text-2xl lg:text-3xl mb-4">
                <Link href={item.website} target="_blank">
                  {item.locationName}
                </Link>
              </h3>
              <p className="text-xl mb-2">{item.amount}</p>
              <p className="text-lg whitespace-pre-line">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

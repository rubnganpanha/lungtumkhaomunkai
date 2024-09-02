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
          delay: 2500,
          disableOnInteraction: false,
        }}
        scrollbar={{
          hide: true,
        }}
        modules={[Autoplay, Scrollbar]}
        className="mySwiper-events lg:max-w-[1800px] h-[700px] mx-auto px-24"
      >
        {slider.map((item, index) => {
          const { locationName, image, amount, desc, website, alt, title } =
            item;
          return (
            <SwiperSlide
              key={index}
              className="flex flex-col lg:flex-row items-center justify-center p-4"
            >
              <div className="flex-auto w-full max-w-[600px] mx-auto mb-4">
                <Image
                  src={image}
                  alt={alt}
                  width={600} // ขนาดที่เหมาะสม
                  height={337} // ขนาดที่เหมาะสม
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="text-white text-left lg:text-left flex-auto w-full max-w-[600px] mx-auto">
                {/* location */}
                <h3 className="text-second-main text-2xl lg:text-3xl pt-4 lg:pt-0">
                  <Link href={website} target="_blank" title={locationName}>
                    {locationName}
                  </Link>
                </h3>
                {/* amount */}
                <div className="text-xl mb-4">
                  <p className="mt-4">
                    <span className="border-b-2 border-solid border-iconh-main">
                      {amount}
                    </span>
                  </p>
                </div>
                {/* description */}
                <div className="mb-4 text-lg font-normal whitespace-pre-line align-bottom">
                  {desc}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

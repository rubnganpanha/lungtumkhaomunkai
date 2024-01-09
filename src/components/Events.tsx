"use client";
import React from "react";
import EventsCarousel from "./EventsCarousel";

const Events = () => {
  return (
    <section
      id="events"
      className="border-image relative top-[340px] lg:top-[250px] z-10 h-[980px] pt-[60px] md:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="text-center capitalize flex flex-col items-center">
          <h2 className="h2 text-3xl lg:h2 capitalize  mb-8">การจัดส่งนอกสถานที่</h2>
        </div>
        <EventsCarousel />
      </div>
    </section>
  );
};

export default Events;

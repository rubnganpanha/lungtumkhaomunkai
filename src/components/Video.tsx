"use client";
import React from "react";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../../public/assets/variants";

export const Video = () => {
  return (
    <section className="relative top-[340px] lg:top-[250px] z-10 h-[650px] pt-[20px]  border-image">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1.6)}
        initial="hidden"
        whileInView={"show"}
        className="container mx-auto"
      >
        <div className="flex justify-center items-center">
          <iframe
            width="1000"
            height="515"
            src="https://www.youtube.com/embed/K68PzkNA1jg?si=XjRyLIPU-aOk2rfw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
};

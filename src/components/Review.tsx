"use client";
import React from "react";
// import components
import ReviewCarousel from "./ReviewCarousel";
// import data
import { customerReviewData } from "@/constants";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../../public/assets/variants";
import Image from "next/image";

const Review = () => {
  // construture customer review data
  const { title, subtitle, modelImg, slider } = customerReviewData;
  return (
    <section
      id="reviews"
      className="border-image relative top-[340px] lg:top-[250px] z-10 h-[800px] pt-[60px] md:pt-[120px]"
    >
      <div className="container mx-auto">
        {/* text */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="text-center capitalize flex flex-col items-center"
        >
          <h2 className="h2 ">{title}</h2>
          <p className=" capitalize mb-8">{subtitle}</p>
          <div className="mb-12">
            <Image src={modelImg} alt="" width={150} height={27} />
          </div>
        </motion.div>
        {/* slider */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex justify-center items-center"
        >
          <ReviewCarousel slider={slider} />
        </motion.div>
      </div>
    </section>
  );
};

export default Review;

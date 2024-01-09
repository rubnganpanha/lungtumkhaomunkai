"use client";
import React from "react";

import { heroData } from "@/constants";
import Header from "./Header";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../public/assets/variants";
import Link from "next/link";
function Hero() {
  const { pretitle, title, subtitle, btnText } = heroData;
  return (
    <section className="min-h-[700px] lg:bg-hero lg:bg-cover lg:bg-right ">
      <Header />

      <div className="container mx-auto min-h-[700px] flex justify-center items-center ">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="text-center flex flex-col items-center"
        >
          <motion.h1
            variants={fadeIn("down", "tweem", 0.3, 1.1)}
            className="h1 text-5xl lg:h1 mb-5 mt-32 lg:mt-5"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeIn("down", "tweem", 0.4, 1.1)}
            className="max-w-[540px] mb-8"
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeIn("down", "tweem", 1.8, 0.5)}>
            <button className="btn">
              <Link href="#menu">{btnText}</Link>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

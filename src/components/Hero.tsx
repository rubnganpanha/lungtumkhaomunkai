"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { heroData } from "@/constants";
import Header from "./Header";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../public/assets/variants";
import Link from "next/link";

function Hero() {
  const { pretitle, title, subtitle, btnText } = heroData;

  const router = useRouter();

  const handleClick = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="hero"
      className="min-h-[700px] bg-image-placeholder lg:bg-hero lg:bg-cover lg:bg-right "
    >
      <Header />

      <div className="container mx-auto min-h-[700px] flex justify-center items-center ">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="text-center flex flex-col items-center"
        >
          <motion.h1
            variants={fadeIn("down", "tween", 0.3, 1.1)}
            className="h1 text-5xl lg:text-6xl mb-5 mt-32 lg:mt-5 font-bold "
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1.1)}
            className="max-w-[540px] text-lg lg:text-xl mb-8 "
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeIn("down", "tween", 1.8, 0.5)}>
            <button
              className="btn bg-primary  py-3 px-6 rounded-lg shadow-lg hover:bg-primary-dark transition-all duration-300"
              onClick={handleClick}
            >
              {btnText}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

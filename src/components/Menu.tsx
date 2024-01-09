"use client";
import React from "react";

import { menuData } from "@/constants";
import Image from "next/image";
// import motion
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../public/assets/variants";
import Link from "next/link";
const Menu = () => {
  const { title, subtitle, modelImg, menuItems, btnText, btnURL } = menuData;
  return (
    <section id="menu" className="min-h-[780px]">
      {/* background */}
      <div className="h-[780px] bg-menu lg:bg-cover lg:bg-right absolute w-full max-w-[1800px] -z-0"></div>
      {/* text */}
      <div className="relative z-10 top-52 lg:top-52">
        <motion.div
          variants={staggerContainer(0, 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="container mx-auto flex flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeIn("down", "tween", 0.2, 1.6)}
            className="h2 capitalize max-w-[400px] text-center"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1.6)}
            className="capitalize mb-8"
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeIn("down", "tween", 0.6, 1.6)}>
            <Image src={modelImg} alt="" width={150} height={27} />
          </motion.div>
        </motion.div>
      </div>
      {/* menu gallery */}
      <motion.div
        initial={{
          opacity: 0,
          y: 150,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          typ: "tween",
          deplay: 0.2,
          duration: 1.6,
          ease: "easeOut",
        }}
        className="relative top-80 lg:top-44"
      >
        <div className="container mx-auto">
          <div className="lg:mt-24 min-h-[500px] z-30 ">
            {/* grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[500px]">
              {menuItems.map((items, index) => {
                // destructure item
                const { image, image_alt, name, price, description } = items;
                return (
                  <div key={index}>
                    <div className="flex flex-row lg:flex-col h-full">
                      {/* image */}
                      <div
                        className={`w-[45%] md:w-auto ${
                          index === 1 || index === 3
                            ? "lg:order-1"
                            : "order-none"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={image_alt}
                          width={0}
                          height={0}
                          className="h-full"
                        />
                      </div>
                      {/* text */}
                      <div className="bg-second-main flex-1 flex flex-col justify-center px-6 lg:p-12 lg:max-h-[225px] ">
                        <div className="text-center">
                          <div className="text-xl font-semibold text-accent xl:text-2xl">
                            {name}
                          </div>
                          <div className="my-1 text-[20px] lg:text-[40px] lg:my-6 text-orange-main font-semibold">
                            {price}
                          </div>
                          <div className="text-accent">{description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button className="btn mx-auto capitalize mt-8">
            <Link href={btnURL} title={btnText} target="_blank">
              {btnText}
            </Link>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;

"use client";
import React, { useState } from "react";
import { menuData } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn, staggerContainer } from "../../public/assets/variants";

const Menu = () => {
  const { categories, menuItems, title, subtitle, modelImg, btnText, btnURL } =
    menuData;
  const [activeTab, setActiveTab] = useState(categories[0]);

  // Filter items based on active tab
  const filteredItems = menuItems.filter((item) => item.category === activeTab);

  return (
    <section
      id="menu"
      className="border-image relative top-[340px] lg:top-[250px] z-10 h-auto  pb-16"
    >
      <div className="container mx-auto px-4 md:px-0">
        {/* text */}
        <div className="relative top-0 z-10 h-auto pt-16 md:pt-20 lg:pt-28 pb-16">
          <motion.div
            variants={staggerContainer(0, 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="flex flex-col items-center text-center mb-12"
          >
            <motion.h2
              variants={fadeIn("down", "tween", 0.2, 1.6)}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {title}
            </motion.h2>
            <motion.p
              variants={fadeIn("down", "tween", 0.4, 1.6)}
              className="text-base md:text-lg mb-8"
            >
              {subtitle}
            </motion.p>
          </motion.div>
        </div>

        {/* Tab List */}
        <div className="flex justify-center mb-8 flex-wrap">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 mx-2 text-lg font-semibold border-b-2 ${
                activeTab === tab
                  ? "border-navPanelTextHover navPanelTextHover"
                  : "border-transparent navPanelTextHover"
              } transition-all duration-300`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              className="border-primary-main rounded-lg overflow-hidden shadow-md bg-primary-main"
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Image Section */}
              <div className="relative h-48 md:h-56 lg:h-64">
                <Image
                  src={item.image}
                  alt={item.image_alt}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-lg font-bold mb-4">{item.price}</p>
                <p className="text-sm navPanelTextHover mb-4">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button Section */}
        <div className="mt-8 text-center">
          <Link href={btnURL} legacyBehavior>
            <a
              className="inline-block bg-primary-main  py-3 px-6 rounded-full shadow-lg transition-transform duration-300 hover:bg-primary-hover hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              title={btnText}
            >
              {btnText}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;

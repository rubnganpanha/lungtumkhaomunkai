"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer } from "../../public/assets/variants";

const headerVariants = {
  hidden: {
    padding: "24px 0 24px 0",
    background: "none",
  },
  show: {
    padding: "14px 0 14px 0",
    background: "linear-gradient(to bottom, #861b28, rgba(134,27,40,0))",
    transition: {
      type: "spring",
    },
  },
};

export default function NavBlog() {
  const [IsActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={IsActive ? "show" : ""}
      className="fixed w-full z-50 py-6"
    >
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        animate={"show"}
        className="p-0"
      >
        <div className="w-full">
          <a href="/">
            <Image
              src={"/img/icon-lungtum-chicken-rice.png"}
              alt={"ลุงตุ่มข้าวมันไก่ - พัทยา"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "auto" }}
              className="block ml-auto mr-auto max-h-28	"
            />
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}

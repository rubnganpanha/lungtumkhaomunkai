"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../public/assets/variants";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const poweredbyVariants = {
  visible: {
    display: "table",
    transition: {
      type: "spring",
    },
  },
  hidden: {
    display: "none",
  },
};

const Footer = () => {
  // powered by state
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      let wScrollY = window.scrollY;
      let roundedwScrollY = Math.ceil(wScrollY);

      roundedwScrollY == scrollableHeight ? setHidden(false) : setHidden(true);
    });
  });

  return (
    <motion.footer
      variants={staggerContainer(0.3, 1)}
      initial="hidden"
      animate={"show"}
      className="bg-primary-main hidden lg:block fixed w-full max-w-[1800px] z-50 right-0 bottom-0 left-0"
    >
      {/* Socials Icons*/}
      <motion.div
        variants={fadeIn("down", "tween", 1.4, 1.4)}
        className="flex items-center justify-between  py-2 px-7"
      >
        <Socials />
        {/* working hours */}
        <div className="text-xs lg:text-lg order-last order-lg-0">
          เปิดให้บริการทุกวัน: 05:30 น. - 16:30 น. หรือจนของจะหมด
        </div>
      </motion.div>

      {/* powered-by */}
      <motion.div
        variants={poweredbyVariants}
        animate={hidden ? "hidden" : "visible"}
        initial="hidden"
        whileInView={"show"}
        className="px-7 w-full h-11  text-center uppercase text-xs "
      >
        <Link
          href="https://github.com/56023613"
          className="no-underline table-cell py-1 hover:text-iconh-main"
          target="_blank"
        >
          © Copyright ข้าวมันไก่ลุงตุ่ม. สงวนลิขสิทธิ์&nbsp;&nbsp; powered by
          56023613
        </Link>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

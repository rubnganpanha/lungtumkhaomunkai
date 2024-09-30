"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../public/assets/variants";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const poweredbyVariants = {
  visible: {
    display: "block",
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
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const wScrollY = window.scrollY;
      const roundedwScrollY = Math.ceil(wScrollY);

      setHidden(roundedwScrollY !== scrollableHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.footer
      variants={staggerContainer(0.3, 1)}
      initial="hidden"
      animate={"show"}
      className="bg-primary-main fixed bottom-0 w-full z-50"
    >
      {/* Social Icons + Working Hours */}
      <motion.div
        variants={fadeIn("down", "tween", 1.4, 1.4)}
        className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-2 px-4 lg:px-10"
      >
        {/* Social Icons */}
        <div className="mb-2 lg:mb-0">
          <Socials />
        </div>

        {/* Working Hours */}
        <div className="text-sm lg:text-lg text-center lg:text-left">
          เปิดให้บริการทุกวัน: 05:30 น. - 16:30 น. หรือจนของจะหมด
        </div>
      </motion.div>

      {/* Powered-by Section */}
      <motion.div
        variants={poweredbyVariants}
        animate={hidden ? "hidden" : "visible"}
        initial="hidden"
        className="px-4 lg:px-10 py-2 bg-gray-800 w-full text-center text-xs lg:text-sm uppercase text-white"
      >
        <Link
          href="https://github.com/56023613"
          className="no-underline hover:text-iconh-main"
          target="_blank"
        >
          © Copyright ข้าวมันไก่ลุงตุ่ม. สงวนลิขสิทธิ์ &nbsp;&nbsp;Powered by
          56023613
        </Link>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

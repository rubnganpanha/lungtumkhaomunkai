"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer } from "../../public/assets/variants";
import { FaBars, FaTimes } from "react-icons/fa"; // สำหรับไอคอน mobile menu

const headerVariants = {
  hidden: {
    padding: "24px 0 24px 0",
    backgroundColor: "#861b28",
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // สำหรับ mobile menu

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={IsActive ? "show" : ""}
      className="fixed w-full z-50 py-6 bg-primary-main"
    >
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        animate={"show"}
        className="container mx-auto flex items-center justify-between px-6 lg:px-12" // ปรับ padding ซ้ายขวาของ container
      >
        <div className="flex items-center ml-4 lg:ml-12">
          {" "}
          {/* เพิ่ม `ml-4` หรือ `lg:ml-12` เพื่อขยับโลโก้ */}
          <a href="/">
            <Image
              src={"/img/icon-lungtum-chicken-rice.png"}
              alt={"ลุงตุ่มข้าวมันไก่ - พัทยา"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "auto" }}
              className="block max-h-28"
            />
          </a>
        </div>
        {/* เมนูหลัก รวมที่อยู่และเบอร์โทร */}
        <nav className="hidden lg:flex space-x-6 items-center">
          <a href="/" className=" hover:text-iconh-main">
            หน้าหลัก
          </a>
          <a
            className="no-underline hover:text-iconh-main"
            target="_blank"
            href="https://maps.app.goo.gl/bC4VJznsajYpM4T48"
            rel="noopener noreferrer"
          >
            23/69 3240, พัทยา, ประเทศไทย, ชลบุรี
          </a>
          <a
            className="no-underline hover:text-iconh-main"
            href="tel:0871454634"
          >
            &nbsp; 087 145 4634
          </a>
        </nav>
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className=" focus:outline-none">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </motion.div>
      {/* absolute bg-navPanel 
      w-[310px] h-[60vh] r
      ight-0 
      lg:left-0 top-[120px] 
      bottom-0 z-50 rounded-lg 
      shadow-xl  */}
      {/* Mobile menu content */}
      {isMobileMenuOpen && (
        <nav className="flex flex-col items-center bg-navPanel p-4 space-y-4 lg:hidden">
          <a href="/" className="hover:text-iconh-main">
            หน้าหลัก
          </a>
          <a
            className="no-underline hover:text-iconh-main"
            target="_blank"
            href="https://maps.app.goo.gl/bC4VJznsajYpM4T48"
            rel="noopener noreferrer"
          >
            23/69 3240, พัทยา, ประเทศไทย, ชลบุรี
          </a>
          <a
            className="no-underline hover:text-iconh-main"
            href="tel:0871454634"
          >
            &nbsp; 087 145 4634
          </a>
        </nav>
      )}
    </motion.header>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // ไอคอนลูกศรขึ้นด้านบน
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // ฟังก์ชันสำหรับตรวจสอบการ Scroll
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // เลื่อนไปด้านบนอย่างนุ่มนวล
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // เพิ่ม Event Listener เมื่อ Scroll ลงมา
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <motion.div
      className={`fixed bottom-6 right-6 z-50 cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      onClick={scrollToTop}
    >
      <div
        className="p-3 rounded-full bg-second-main text-primary-main shadow-lg hover:bg-iconh-main lg:p-4"
        title="Scroll to top"
      >
        <FaArrowUp size={24} />
      </div>
    </motion.div>
  );
};

export default ScrollToTop;

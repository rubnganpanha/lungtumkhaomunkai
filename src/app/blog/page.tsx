import React from "react";

import Footer from "@/components/Footer";
import NavBlog from "@/components/NavBlog";
import Blog from "@/components/Blog";
import ScrollToTop from "@/components/ScrollToTop";

export const generateMetadata = () => {
  return {
    title: "บทความทั้งหมด - ลุงตุ่มข้าวมันไก่",
    description:
      "อ่านบทความทั้งหมดเกี่ยวกับลุงตุ่มข้าวมันไก่ ร้านข้าวมันไก่ที่ขายดีที่สุดในพัทยาและพื้นที่ใกล้เคียง",
    keywords: [
      "ข้าวมันไก่",
      "บทความ",
      "ร้านอาหารใกล้ฉัน",
      "ข้าวมันไก่พัทยา",
      "ลุงตุ่มข้าวมันไก่",
    ],
    openGraph: {
      title: "บทความทั้งหมด - ลุงตุ่มข้าวมันไก่",
      description:
        "อ่านบทความทั้งหมดเกี่ยวกับลุงตุ่มข้าวมันไก่ ร้านข้าวมันไก่ที่ขายดีที่สุดในพัทยาและพื้นที่ใกล้เคียง",
      url: "https://lungtum-khaomunkai.vercel.app/blog",
      images: [
        {
          url: "/img/hero/ข้าวมันไก่.jpg",
          width: 1034,
          height: 563,
          alt: "บทความทั้งหมด - ลุงตุ่มข้าวมันไก่",
        },
      ],
      type: "website",
    },
    // เพิ่ม robots tag ที่นี่
    robots: {
      index: true,  // อนุญาตให้ค้นหา
      follow: true, // อนุญาตให้ติดตามลิงก์
    },
  };
};

export default function BlogList() {
  return (
    <>
      <NavBlog />
      <Blog />
      <Footer />
      <ScrollToTop />
    </>
  );
}

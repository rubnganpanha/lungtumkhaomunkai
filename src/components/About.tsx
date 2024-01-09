"use client";
import React from "react";
// import data
import { aboutData } from "@/constants";
// import motion
import { motion } from "framer-motion";
// inport variants
import {
  plateVariants,
  staggerContainer,
  fadeIn,
} from "../../public/assets/variants";
import Image from "next/image";
// import icons
import { FaRegCircleCheck } from "react-icons/fa6";
import { AiFillHeart } from "react-icons/ai";
import { FaRegGrinSquintTears } from "react-icons/fa";
import { FaRegGrinTears } from "react-icons/fa";
import Link from "next/link";

const About = () => {
  // destructure data
  const { pretitle, title, btnText, AboutImg, btnURL } = aboutData;

  return (
    <section id="about" className="min-h-[300px] border-image">
      <div className="container mx-auto min-h-[300px]">
        {/* text & image wrapper */}
        <motion.div
          variants={staggerContainer(0, 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="min-h-[300px] flex flex-col lg:flex-row items-center"
        >
          {/* text */}
          <motion.div
            variants={fadeIn("right", "tween", "0.2", "1.8")}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="h2 text-3xl lg:h2 capitalize">{title}</h2>
            <div className="pretitle py-4 ">{pretitle}</div>
            <div className="mb-8 max-w-[569px]">
              <p>
                ร้านเราเป็นร้านเล็กๆ
                ที่อัดแน่นไปด้วยของคุณภาพของวัตถุดิบทั้งนั้น
                แม่ค้าขอขอบคุณทุกคำติชม ออเดอร์ไหนที่แม่ค้าผิดพลาดไป
                แสดงว่าแม่ค้านอนน้อยค่ะ กราบขอบพระคุณลูกค้าทุกคนเลยนะคะ
              </p>
            </div>

            <p className="mb-8 flex items-center gap-x-6">
              ลูกค้าท่านใด สงสัยในความอร่อย ลองสั่งไปทานเลยค่ะ
              ที่ร้านเราบริการผ่าน เท่านั้นค่ะ
            </p>
            <button className="btn capitalize mx-auto lg:mx-0">
              <Link href={btnURL} title={btnText} target="_blank">
                {btnText}
              </Link>
            </button>
          </motion.div>
          {/* image */}
          <motion.div
            variants={plateVariants}
            className="-mb-[150px] -mr-[186px] z-10 "
          >
            <Image
              src={AboutImg}
              alt="ข้าวมันไก่ พัทยา เจ้าดังหนองปรือ"
              width={778}
              height={686}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

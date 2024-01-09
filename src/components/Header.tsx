import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Socials from "./Socials";
import LogoRestaurant from "../../public/img/header/Logo-2-removebg.png";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../public/assets/variants";
import Image from "next/image";
import Link from "next/link";

const headerVariants = {
  hidden: {
    padding: "56px 0 56px 0",
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

const headerLocationVariants = {
  /** this is the "visible" key and it's correlating styles **/
  visible: {
    display: "flex",
    transition: {
      type: "spring",
    },
  },
  /** this is the "hidden" key and it's correlating styles **/
  hidden: {
    display: "none",
  },
};

export const navVariants = {
  hidden: {
    clipPath: "circle(5.8% at 50% 0)",
    opacity: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    clipPath: "circle(130% at 50% 0)",
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};
const Header = () => {
  // header state
  const [IsActive, setIsActive] = useState(false);
  // nav state
  const [nav, setNav] = useState(false);
  /** this hook manages state **/
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
      window.scrollY > 50 ? setHidden(true) : setHidden(false);
    });
  });
  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={IsActive ? "show" : ""}
      className="fixed w-full max-w-[1800px] z-50 py-4"
    >
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        animate={"show"}
        className="container mx-auto flex flex-col gap-4"
      >
        {/* Location */}
        <motion.div
          variants={headerLocationVariants}
          animate={hidden ? "hidden" : "visible"}
          initial="hidden"
          whileInView={"show"}
          className=" justify-center items-center pb-4 px-4 text-lg lg:px-0 relative lg:text-lg order-2 lg:order-none"
        >
          <motion.div
            variants={fadeIn("down", "srping", 0, 1.4)}
            className="flex items-center flex-col lg:flex-row"
          >
            <Link
              href="https://maps.app.goo.gl/bC4VJznsajYpM4T48"
              className="no-underline hover:text-iconh-main"
              target="_blank"
            >
              23/69 3240, พัทยา, ประเทศไทย, ชลบุรี
            </Link>

            <Link
              href="tel:0871454634"
              className="no-underline table-cell hover:text-iconh-main"
            >
              &nbsp; 087 145 4634
            </Link>
          </motion.div>
        </motion.div>
        {/* Nav Desktop */}
        <div className="hidden lg:flex">
          <Nav />
        </div>
        {/* Nav Mobile */}
        <div className="flex lg:hidden justify-between items-center px-4 lg:px-0 relative ">
          {/* Menu Button */}
          <motion.div
            variants={fadeIn("down", "tween", 1, 1.4)}
            className={`${
              nav ? "gap-y-0" : "gap-y-2"
            }  flex flex-col items-center justify-center w-12 h-12 p-3 order-2 lg:order-none cursor-pointer border-2 border-second-main rounded-full`}
            onClick={() => setNav(!nav)}
          >
            {/* bar1 */}
            <motion.div
              initial={{
                rotate: 0,
              }}
              animate={{
                rotate: nav ? -45 : 0,
                translateY: nav ? 2 : 0,
              }}
              className="w-full h-[2px] bg-second-main"
            ></motion.div>
            {/* bar2 */}
            <motion.div
              initial={{
                rotate: 0,
              }}
              animate={{
                rotate: nav ? 45 : 0,
              }}
              className="w-full h-[2px] bg-second-main"
            ></motion.div>
          </motion.div>
          {/* Logo */}
          <motion.div
            variants={fadeIn("down", "tween", 1.2, 1.4)}
            className="order-1 lg:order-none "
          >
            <Link href={"#"}>
              <Image
                src={LogoRestaurant}
                alt={"ลุงตุ่มข้าวมันไก่ - พัทยา"}
                width={0}
                height={0}
                sizes="100vw"
                className={`${
                  IsActive ? "w-[90px] h-[90px]" : "w-[107px] h-[107px]"
                }`}
              />
            </Link>
          </motion.div>
          {/* Socials Icons*/}
          {/* <motion.div
            variants={fadeIn("down", "tween", 1.4, 1.4)}
            className="hidden lg:flex"
          >
            <Socials />
          </motion.div> */}
          {/* Nav */}
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate={nav ? "show" : ""}
            className="absolute bg-navPanel w-[310px] h-[60vh] right-0 lg:left-0 top-[120px] bottom-0 z-50 rounded-lg shadow-xl "
          >
            <Nav />
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";

import { navData } from "@/constants";
import Link from "next/link";
import Socials from "./Socials";
import { motion } from "framer-motion";

export default function Nav() {
  const [nav, setNav] = useState(false);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setNav(!nav);
  };
  return (
    <nav className="w-full h-full">
      <ul className="h-full flex flex-col lg:flex-row justify-center items-center gap-y-6 lg:gap-x-32">
        {navData.map((item, index) => (
          <li key={index}>
            <a
              onClick={() => handleNavClick(item.href.substring(1))}
              className="text-xl capitalize font-primary 
              hover:text-navPanelTextHover transition-all duration-300 cursor-pointer"
            >
              {item.name}
            </a>
          </li>
        ))}
        <li className="lg:hidden justify-center items-center before:block before:border-b-2 before:bg-second-main before:border-solid before:mb-6">
          <div className="flex justify-center items-center mb-1">
            <Socials />
          </div>
          <div className="flex justify-center items-center mb-1">
            <a
              href="https://maps.app.goo.gl/bC4VJznsajYpM4T48"
              className="no-underline hover:text-iconh-main"
              target="_blank"
              rel="noopener noreferrer"
            >
              23/69 3240, พัทยา, ประเทศไทย, ชลบุรี
            </a>
          </div>
          <div className="flex justify-center items-center uppercase mb-4">
            <a
              href="https://github.com/56023613"
              className="no-underline table-cell py-1 hover:text-iconh-main"
              target="_blank"
              rel="noopener noreferrer"
            >
              powered by 56023613
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

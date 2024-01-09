import React, { useState, useEffect } from "react";

import { navData } from "@/constants";
import Link from "next/link";

export default function NavDesktop() {
  const [nav, setNav] = useState(false);
  return (
    <nav className="w-full h-full">
      <ul className=" h-full flex flex-col justify-center items-center gap-y-6">
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <Link
                onClick={() => setNav(!nav)}
                href={item.href}
                className="text-xl capitalize font-primary 
                hover:text-navPanelTextHover transition-all duration-300
                "
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

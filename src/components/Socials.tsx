// import { socialData } from "@/constants/index";
import { socialData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Socials() {
  return (
    <div className="flex gap-x-[10px]">
      {socialData.map((item, index) => {
        return (
          <Link
            className="text-primary-main bg-second-main border border-second-main rounded-full w-[30px] h-[30px] flex items-center justify-center text-2xl  hover:border-iconh-main hover:bg-iconh-main transition-all"
            key={index}
            href={item.href}
            title={item.title}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

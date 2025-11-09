"use client";
import chat from "@/public/icon/chat-spark.svg";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineLockClosed } from "react-icons/hi";
import { LuStickyNote } from "react-icons/lu";
const quickLinks = [
  { name: "Home", slug: "/" },
  { name: "Tours", slug: "/tours" },
  { name: "Cruises", slug: "/cruises" },
  { name: "Packages", slug: "/packages" },
  { name: "Reservations", slug: "/reservations" },
  { name: "Blog", slug: "/blog" },
  { name: "About", slug: "/Linkbout" },
  { name: "Contact Us", slug: "/contact" },
];
export default function Footer() {
  return (
    <footer className="px-4 ">
      <div className="container relative">
        {/* Chat Widget */}
        <Link href="https://www.housefiresolutions.com/live-chat"  className="absolute -top-16 right-4 bg-whiteColor z-10 rounded-2xl shadow-[2px_3px_12px_4px_rgba(0,_0,_0,_0.20)] p-2 pr-4">
          <div className="flex items-center gap-3 ">
            <div className="flex items-center justify-center p-1.5 bg-primaryColor/20 rounded-lg flex-shrink-0">
              <Image src={chat} alt="chat" width={40} height={40} className="w-8 h-8 " />
            </div>
            <div className="min-w-0">
              <h4 className="text-base font-semibold text-blackColor whitespace-nowrap">Chat With Us Live</h4>
              <p className="text-xs text-grayColor1 whitespace-nowrap">Talk With a Fire Recovery Specialist</p>
            </div>
          </div>
        </Link>

        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-6 pt-4">
          <div className="text-sm sm:text-base text-center font-medium sm:text-left leading-[150%] text-blackColor">
            Copyright © 2024 All rights reserved
          </div>
          <div className="flex justify-center items-center gap-4 sm:gap-5">
            <div className="flex font-semibold items-center gap-2 text-sm sm:text-base whitespace-nowrap">
              <HiOutlineLockClosed /> <span>Privacy</span>
            </div>
            <div className="flex font-semibold items-center gap-2 text-sm sm:text-base whitespace-nowrap">
              <LuStickyNote /> <span>Terms</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

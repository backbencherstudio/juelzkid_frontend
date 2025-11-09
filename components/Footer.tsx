"use client";
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
    <footer className="px-4">
    
      <div className=" container">
        <div className="flex justify-between items-center">
      <div className="  pb-6 pt-4 text-center text-base leading-[150%] text-blackColor">
        Copyright © 2024 All rights reserved
      </div>
        <div className="flex justify-between items-center gap-5">
           <div className="flex font-semibold items-center gap-2">
            <HiOutlineLockClosed /> <span>Privacy</span>
           </div>
           <div className="flex font-semibold items-center gap-2">
            <LuStickyNote /> <span>Terms</span>
           </div>
        </div>
        </div>
      </div>
    </footer>
  );
}

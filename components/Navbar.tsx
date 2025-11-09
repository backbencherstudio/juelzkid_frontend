"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

import Image from "next/image";

const menuItems = [
  { en: "Home", bn: "হোম", slug: "/" },
  { en: "Apartment", bn: "অ্যাপার্টমেন্ট", slug: "/apartments" },
  { en: "Hotel", bn: "হোটেল", slug: "/hotels" },
  { en: "Tours", bn: "ট্যুর", slug: "/tours" },
  { en: "Contact Us", bn: "যোগাযোগ", slug: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [language, setLanguage] = useState<"en" | "bn">("en");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" sticky top-0 left-0 w-full py-4 px-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-white text-3xl font-semibold tracking-wide">
          <Image src="/mainLogo.png" alt="logo" width={150} height={100} className="w-full h-full " />
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-blackColor text-base">Already have an account?</Link>
          <button className="bg-whiteColor shadow-[2px_2px_7px_2px_rgba(0,_0,_0,_0.08)] inline-block text-primaryColor font-medium cursor-pointer  text-base px-4 py-2 rounded-[8px]">Sign In</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className="md:hidden px-4 mt-4 space-y-3">
        
          {/* Language Dropdown (Mobile) */}
          <div className=" flex  items-center justify-between">
         
              <Link href="/login" className="text-white text-base">
                Login
              </Link>
              <Link
                href="/registration"
                className="bg-secondaryColor inline-block text-blackColor font-medium cursor-pointer  text-base px-4 py-2 rounded-[8px]"
              >
                Sign up
              </Link>

          </div>
        </div>
      )}
    </header>
  );
}

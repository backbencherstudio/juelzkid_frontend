"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Image from "next/image";



export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
 const isloginPage = pathname === "/registration";
  return (
    <header className=" sticky top-0 left-0 w-full py-4 z-50 ">
      <div className="container  w-full flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-white text-3xl font-semibold tracking-wide">
          <Image src="/mainLogo.png" alt="logo" width={150} height={100} className="w-full max-w-[150px] h-full " />
        </div>
        <div className=" flex  items-center gap-3">
          <Link href={isloginPage ? "/" : "/registration"} className="text-blackColor hidden md:block text-base">{isloginPage ? "Already have an account?" : "Don't have an account?"}</Link>
          <Link href={isloginPage ? "/" : "/registration"} className="bg-whiteColor shadow-[2px_2px_7px_2px_rgba(0,_0,_0,_0.08)] inline-block text-primaryColor font-medium cursor-pointer  text-base px-4 py-2 rounded-[8px]">{isloginPage ? "Sign In" : "Create Account"}</Link>
        </div>  

      </div>

    </header>
  );
}

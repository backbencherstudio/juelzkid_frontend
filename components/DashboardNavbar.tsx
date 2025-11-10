"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { UserService } from "@/service/user/user.service";
import { LogOutIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuBookText } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { toast } from "react-toastify";
const menuItems = [
  { name: "Dashboard", slug: "/dashboard", icon : <RxDashboard /> },
  { name: "My Plans", slug: "/options" , icon : <AiOutlineFileSearch  /> },
  { name: "Resources", slug: "/resources" , icon : <LuBookText/> },
];

export default function DashboardNavbar() {
  const router = useRouter()
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (href: string): boolean => {
    return pathname === href || pathname.startsWith(`${href}/`)
  };

  const handleLogout = () => {
    try {
      router.push("/")
      toast.success("Logged out successfully")
    } catch (error) {
      toast.error("Failed to logout")
    }
  }

  return (
    <header className=" sticky  top-0 left-0 w-full py-4 z-50  ">
      <div className="container h-full mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-white text-3xl font-semibold tracking-wide">
          <Image src="/mainLogo.png" alt="logo" width={150} height={100} className="w-[100px] md:w-auto max-w-[150px] h-full " />
        </div>
        <div className="hidden md:block bg-whiteColor z-10 rounded-lg border border-blueColor/60  p-1">
        <div className=" flex items-center gap-[4.5px]  h-full ">
            {menuItems.map((item) => (
                <Link href={item.slug}  key={item.slug} className={`text-blackColor py-3 px-5 rounded-[8px] h-full  flex items-center gap-2 text-base ${isActive(item.slug) ? "bg-gradient-to-tl to-blueColor from-blueColor2 text-white" : "bg-secondaryColor/90"}`}>
                    <div className={`text-xl text-blackColor ${isActive(item.slug) ? "text-white" : ""}`}>
                        {item.icon}
                    </div>
                    {item.name}
                </Link>
            ))}
        </div>
        </div>

        <div className="flex items-center gap-2">
        <div className="bg-whiteColor z-10 rounded-lg border border-blueColor/60 flex items-center gap-2 p-1.5 md:p-2">
          {/* Notifications Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex cursor-pointer relative items-center gap-3 p-2 bg-secondaryColor/90 rounded-[8px]" aria-label="Open notifications">
              <div className="absolute md:top-1 top-[1px] right-[1px] md:right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</div>
                <IoNotificationsOutline className="text-blackColor md:w-[22px] md:h-[22px] w-[18px] h-[18px]" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-50">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Welcome to your dashboard 🎉</DropdownMenuItem>
              <DropdownMenuItem>Your plan has been updated</DropdownMenuItem>
              <DropdownMenuItem>3 new resources added</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View all notifications</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center cursor-pointer gap-1.5" aria-label="Open user menu">
                <div className="flex items-center gap-3 p-2 bg-secondaryColor/90 rounded-[8px]">
                  <Image src="/icon/user_svg.svg" alt="user" width={20} height={20} className="md:w-[22px] md:h-[22px] w-[18px] h-[18px]" />
                </div>
                <div>
                  <IoIosArrowDown size={20} className="text-blackColor " />
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="">
              <DropdownMenuItem className="text-sm border rounded-full flex justify-center">  <div className="">
                <Image src="/icon/user_svg.svg" alt="user" width={20} height={20} className="w-[22px] h-[22px] border rounded-full border-blueColor/60 p-[1px]" /> </div> John Doe</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} variant="destructive" className="text-sm border rounded-full flex justify-center"> <LogOutIcon className="w-[22px] h-[22px]" />  Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blueColor text-2xl"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
          </div>
      </div>

           {/* Mobile Menu Content */}
      <div className={cn(
        "xl:hidden fixed max-w-[80%] md:max-w-[60%] lg:max-w-[40%] top-0 right-0 h-full w-80 bg-whiteColor shadow-lg transform transition-transform duration-300 ease-in-out z-50",
        menuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {/* Close button */}
        <div className="flex justify-between items-center p-4">
          <div className="text-headerColor text-xl font-semibold tracking-wide">
            <Image src="/mainLogo.png" alt="logo" width={150} height={100} className="w-[100px] md:w-auto max-w-[150px] h-full " />
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-primaryColor border rounded-full border-primaryColor text-xl p-1 hover:text-primaryColor transition"
          >
            <HiX />
          </button>
        </div>

        {/* Menu Content */}
        <div className="px-4 space-y-4">
          <div className="lg:hidden space-y-4">
            {menuItems.map((item) => (
              <Link href={item.slug}  key={item.slug} className={`text-blackColor py-3 px-5 rounded-[8px] h-full  flex items-center gap-2 text-base ${isActive(item.slug) ? "bg-gradient-to-tl to-blueColor from-blueColor2 text-white" : "bg-secondaryColor/90"}`}>
                    <div className={`text-xl text-blackColor ${isActive(item.slug) ? "text-white" : ""}`}>
                        {item.icon}
                    </div>
                    {item.name}
                </Link>
            ))}
          </div>
       
        </div>
      </div>

      {/* Overlay */}
      {
        menuOpen && (
          <div
            className="2xl:hidden fixed inset-0  bg-black/50 bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          />
        )
      }
    </header>
  );
}

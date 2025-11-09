import Navbar from "@/components/Navbar";
import Image from "next/image";
import 'react-datepicker/dist/react-datepicker.css';
import 'swiper/css';
import 'swiper/css/navigation';
export default function FrontEndLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
         <div className="  w-full relative ">
          <div className="flex flex-col">
           <Navbar/>
          <div className="flex-1 relative md:w-[70%] mx-auto w-full flex items-center justify-center">
            <Image src="/icon/Background.png" alt="background image" width={600} height={600} className="w-full h-full object-cover absolute inset-0 z-0" />
                 
            <div className="relative z-10 w-full">
              {children}
            </div>
          </div> 
          </div>
        </div>
    );
}

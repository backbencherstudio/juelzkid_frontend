import Image from "next/image";
import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
function ClientLayout({children}:{
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-tl w-full justify-between relative to-whiteColor from-secondaryColor flex flex-col">
          {/* Background Image - Fixed size and centered */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
            <Image 
              src="/icon/Background.png" 
              alt="background image" 
              width={1000} 
              height={1000} 
              className="w-[1500px]  max-w-[90vw] max-h-[90vh] object-contain"
              priority
            />
          </div>
          <Navbar/>
          <div className=" relative z-10 flex items-center justify-center">
            {children}
          </div>
          <div className="mt-20">
          <Footer/>
          </div>
        </div>
    </div>
  )
}

export default ClientLayout

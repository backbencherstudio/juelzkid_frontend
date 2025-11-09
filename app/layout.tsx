import Footer from "@/components/Footer";
import { AppConfig } from "@/config/app.config";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.slogan,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <div className="min-h-screen bg-gradient-to-tl w-full relative to-whiteColor from-secondaryColor flex flex-col">
          <div className="flex-1">
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}

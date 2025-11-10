import Navbar from "@/components/Navbar";
import 'react-datepicker/dist/react-datepicker.css';
import 'swiper/css';
import 'swiper/css/navigation';
export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
         <div className="  w-full relative ">
          <div className="flex flex-col">
           <Navbar/>
            <div className="container h-full flex items-center justify-center w-full">
              {children}
            </div>
          </div>
        </div>
    );
}

"use client"
import FormHeader from '@/components/reusable/FormHeader'
import { Loader, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IoDocumentTextOutline } from 'react-icons/io5'

function page() {
     const [active, setActive] = useState(0);
     const router = useRouter()
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === 0 ? 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
      const setTime = setTimeout(() => {
         router.push("/dashboard/recovery-progress")
      }, 5000);

      return ()=> clearInterval(setTime)
  },[])
    return (
        <div>
            <FormHeader title="Building Your Recovery Plan" description="Please hold on while we prepare your customized plan. This usually takes less than a minute." reactIcon={<Loader className=' text-blueColor animate-spin ' />} />
 <div className="bubble-container">
      {/* BUBBLE 1 */}
      <div className={`bubble ${active === 0 ? "show" : "hide"} bg-whiteColor rounded-full py-2 px-3 flex items-center gap-2`}>
        <IoDocumentTextOutline size={18} />
        <p>Analyzing your property details...</p>
         {active === 0 && <Loader size={16} className="text-blueColor animate-spin" />}
      </div>

      {/* BUBBLE 2 */}
      <div className={`bubble ${active === 1 ? "show" : "hide"}  bg-whiteColor rounded-full py-2 px-3 flex items-center gap-2`}>
        <IoDocumentTextOutline size={18} />
        <p>Matching recovery resources...</p>
      {active === 1 && <Loader size={16} className="text-blueColor animate-spin" />}
      </div>
    </div>

   <div className='text-center'>
    <p className='text-base text-black'>This may take a few moments. Please don't close your browser.</p>
   </div>
        </div>
    )
}

export default page

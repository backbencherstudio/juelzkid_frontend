import FormHeader from '@/components/reusable/FormHeader'
import { Loader } from 'lucide-react'
import React from 'react'
import welcome from "@/public/icon/welcome.png"
import { RecoveryProgress } from '@/components/dashboard/RecoveryProgress'
import ProgressPage from '@/components/dashboard/ProgressPage'
function page() {
  return (
    <div className='max-w-5xl w-full mx-auto'>
       <FormHeader title="Welcome Back, Juelz" description="Here's a quick overview of your progress so far." icon={welcome} />
       <div>
       <ProgressPage/>
       </div>
    </div>
  )
}

export default page

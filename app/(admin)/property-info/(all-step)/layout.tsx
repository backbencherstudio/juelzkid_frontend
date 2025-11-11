import FormHeader from '@/components/reusable/FormHeader'
import PropertyNavStep from '@/components/reusable/PropertyNavStep'
import house from "@/public/icon/house.png"
import React from 'react'
function PropertyInfoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <div className='md:hidden'>

        <PropertyNavStep title="Property Info" stepLength={6} />
        </div>
        <div className='mt-10'>
        <FormHeader title="Let's Start with You" description="Tell us a bit about yourself so we can tailor your recovery plan." icon={house} />
        </div>
      {children}
    </div>
  )
}

export default PropertyInfoLayout

import FormHeader from '@/components/reusable/FormHeader'
import property from '@/public/icon/insurance.png'
import React from 'react'
function PropertyInfoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        
        <div className='mt-10'>
        <FormHeader title="Insurance Information" description="We’ll use this to assist with claims and next steps." icon={property} />
        </div>
      {children}
    </div>
  )
}

export default PropertyInfoLayout

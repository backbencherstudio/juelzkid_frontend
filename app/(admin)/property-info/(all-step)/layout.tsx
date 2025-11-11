import FormHeader from '@/components/reusable/FormHeader'
import house from "@/public/icon/house.png"
import React from 'react'
function PropertyInfoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <FormHeader title="Let's Start with You" description="Tell us a bit about yourself so we can tailor your recovery plan." icon={house} />
      {children}
    </div>
  )
}

export default PropertyInfoLayout

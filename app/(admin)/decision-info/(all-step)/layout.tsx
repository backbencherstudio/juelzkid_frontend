import FormHeader from '@/components/reusable/FormHeader'
import decision from '@/public/icon/decision.png'
import React from 'react'
function PropertyInfoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        
        <div className='mt-10'>
        <FormHeader title="Decide What’s Next for Your Property" description="Your choice will help us tailor the best recovery plan for your needs." icon={decision} />
        </div>
      {children}
    </div>
  )
}

export default PropertyInfoLayout

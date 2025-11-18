import InsuranceStepOne from '@/components/insurance/InsuranceStepOne'
import FormHeader from '@/components/reusable/FormHeader'
import React from 'react'
import property from '@/public/icon/insurance.png'
function page() {
  return (
     <div>
      <FormHeader
      icon={property}
      title="Help Us Understand the Damage"
      description="This will help us better support your recovery journey."
      />
      <div>
        <InsuranceStepOne/>
      </div>
    </div>
  )
}

export default page

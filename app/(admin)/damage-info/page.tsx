
import PropertyStepFireAreas from '@/components/property/PropertyStepFireAreas'
import FormHeader from '@/components/reusable/FormHeader'
import property from '@/public/icon/damage.png'
function page() {
  return (
    <div>
      <FormHeader
      icon={property}
      title="Help Us Understand the Damage"
      description="This will help us better support your recovery journey."
      />
      <div>
        <PropertyStepFireAreas/>
      </div>
    </div>
  )
}

export default page

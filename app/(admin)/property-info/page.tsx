import Property_MyForm from '@/components/allForm/Property_MyForm'
import FormHeader from '@/components/reusable/FormHeader'
import property from '@/public/icon/property.png'
function page() {
  return (
    <div>
      <FormHeader
      icon={property}
      title="Tell Us About the Property"
      description="We’ll use this info to tailor your recovery plan."
      />
      <div>
        <Property_MyForm/>
      </div>
    </div>
  )
}

export default page

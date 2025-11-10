import About_MyForm from '@/components/allForm/About_MyForm'
import FormHeader from '@/components/reusable/FormHeader'
import welcomeIcon from '@/public/icon/user2.png'
function page() {
  return (
    <div className='py-10'>
      <FormHeader
      icon={welcomeIcon}
      title="Let's Start with You"
      description="Tell us a bit about yourself so we can tailor your recovery plan."
      />
      <div>
        <About_MyForm />
      </div>
    </div>
  )
}

export default page

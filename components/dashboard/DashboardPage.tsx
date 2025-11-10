"use client"
import welcomeIcon from "@/public/icon/welcome.png"
import { FiInfo } from "react-icons/fi"
import BackgorundColor from "../reusable/BackgorundColor"
import CustomButton from "../reusable/CustomButton"
import FormHeader from '../reusable/FormHeader'

function DashboardPage() {
    const handleGetStarted = () => {
        console.log("Get Started")
    }
  return (
    <div>
      <FormHeader
      icon={welcomeIcon}
      title="Dashboard"
      description="Sign in to continue your personalized recovery journey."
      />
    <div className="space-y-6 max-w-[800px] mx-auto">
        <BackgorundColor>
            <div className="p-3 space-y-4">
                <div>
              <h3 className="text-lg font-bold text-blackColor">Ready for Your Next Step?</h3>
              <p className="text-base text-grayColor1">Get a personalized recovery plan tailored to your specific situation and needs.</p>
                </div>
              <CustomButton
              className="w-full font-medium"
              title="Get a Personalized Recovery Plan Now"
              onClick={handleGetStarted}
              />
            </div>
        </BackgorundColor>
        <BackgorundColor>
            <div className="p-3 gap-3  flex items-center justify-center">
             <div><FiInfo size={24} /></div> <p className="text-descriptionColor"><span className="text-base font-medium text-blackColor">Remember: </span> Recovery takes time, and that's okay. We're here to guide you through each step with care and understanding.</p> 
            </div>
        </BackgorundColor>
    </div>
    </div>
  )
}

export default DashboardPage

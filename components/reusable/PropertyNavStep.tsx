"use client"
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { PiBuildingOffice } from 'react-icons/pi'
import dicision from "@/public/icon/dicisionmessage.svg"
function PropertyNavStep({ title, stepLength }: { title: string, stepLength: number }) {
    const pathname = usePathname()  
    const router = useRouter()
      const [stepCount, setStepCount] = useState(0)
const  isPropertSetp = pathname.includes("/property-info") 
const  isdamageSetp = pathname.includes("/damage-info") 
const  isInsuranceSetp = pathname.includes("/insurance-info") 
const  isDecisionSetp = pathname.includes("/decision-info") 
const totalSteps = stepLength

// Update stepCount based on pathname
useEffect(() => {
  let currentStep = 0
  if (pathname.includes("/property-info/property-step-six")) {
    currentStep = 6
  } else if (pathname.includes("/property-info/property-step-five")) {
    currentStep = 5
  } else if (pathname.includes("/property-info/property-step-four")) {
    currentStep = 4
  } else if (pathname.includes("/property-info/property-step-three")) {
    currentStep = 3
  } else if (pathname.includes("/property-info/property-step-two")) {
    currentStep = 2
  } 
  else if (pathname.includes("/property-info")) {
    currentStep = 1
  }
  else if (pathname.includes("/damage-info/damage-step-four")) {
     
    currentStep = 4
  }
  else if (pathname.includes("/damage-info/damage-step-three")) {
    currentStep = 3
  }
  else if (pathname.includes("/damage-info")) {
    currentStep = 1
  }
  else if (pathname.includes("/insurance-info/insurance-step-three")) {
    currentStep = 3
  }
  else if (pathname.includes("/insurance-info/insurance-step-two")) {
    currentStep = 2
  }
  else if (pathname.includes("/insurance-info")) {
  
    currentStep = 1
  }
  else if (pathname.includes("/decision-info/decision-step-two")) {
  
    currentStep = 2
  }
  else if (pathname.includes("/decision-info/decision-step-one")) {
  
    currentStep = 1
  }
  setStepCount(currentStep)
}, [pathname])

const progressRatio = totalSteps > 0 ? Math.min(stepCount / totalSteps, 1) : 0
const progressDegrees = `${progressRatio * 360}deg`


const redirectPropertyStep = () => {
  if(isPropertSetp && pathname.includes("/property-info") && !pathname.includes("/property-step")) {
    setStepCount(1)
    router.push("/dashboard")
  } else if(isPropertSetp && pathname.includes("/property-info/property-step-two")) {
    setStepCount(2)
    router.push("/property-info")
  } else if(isPropertSetp && pathname.includes("/property-info/property-step-three")) {
    setStepCount(3)
    router.push("/property-info/property-step-two")
  } else if(isPropertSetp && pathname.includes("/property-info/property-step-four")) {
    setStepCount(4)
    router.push("/property-info/property-step-three")
  } else if(isPropertSetp && pathname.includes("/property-info/property-step-five")) {
    setStepCount(5)
    router.push("/property-info/property-step-four")
  }
  else if(isPropertSetp && pathname.includes("/property-info/property-step-six")) {
    setStepCount(6)
    router.push("/property-info/property-step-five")
  } 
  else if(isdamageSetp && pathname.includes("/damage-info")) {
    setStepCount(1)
    router.push("/property-info/property-step-six")
  } 
  else if(isdamageSetp && pathname.includes("/damage-info/damage-step-two")) {
    setStepCount(2)
    router.push("/damage-info")
  } 
  else if(isdamageSetp && pathname.includes("/damage-info/damage-step-three")) {
    setStepCount(3)
    router.push("/damage-info/damage-step-two")
  } 
  else if(isdamageSetp && pathname.includes("/damage-info/damage-step-four")) {
    setStepCount(4)
    router.push("/damage-info/damage-step-three")
  } 
  else if(isInsuranceSetp && pathname.includes("/insurance-info/insurance-step-three")) {
    setStepCount(3)
    router.push("/insurance-info/insurance-step-two")
  } 
  else if(isInsuranceSetp && pathname.includes("/insurance-info/insurance-step-two")) {
    setStepCount(2)
    router.push("/insurance-info")
  } 
  else if(isInsuranceSetp && pathname.includes("/insurance-info")) {

    setStepCount(1)
    router.push("/damage-info/damage-step-four")
  } 
  else if(isDecisionSetp && pathname.includes("/decision-info/decision-step-two")) {

    setStepCount(2)
    router.push("/decision-info/decision-step-one")
  } 
  else if(isDecisionSetp && pathname.includes("/decision-info/decision-step-one")) {

    setStepCount(1)
    router.push("/insurance-info/insurance-step-three")
  } 
  else {
    router.push("/dashboard")
  }
}
  return (
    <div className='bg-whiteColor rounded-[8px] p-2 md:p-1 lg:p-2'>
       <div className="flex items-center justify-center  gap-2 h-full"> 
          <button 
            onClick={redirectPropertyStep}
            className=" cursor-pointer hidden md:flex relative items-center gap-3 p-3 bg-secondaryColor/60 rounded-[8px]" 
            aria-label="Go back to previous step"
          >
            <GoArrowLeft   className="text-blackColor md:w-[22px] md:h-[22px] w-[18px] h-[18px]" />
          </button>
         <div className="flex items-center gap-2 p-1 bg-secondaryColor/60 rounded-[8px]"> 
          <div 
            className="flex cursor-pointer relative items-center gap-3 p-2 bg-whiteColor rounded-[8px]" 
          >
          {isDecisionSetp ? <Image src={dicision} alt='dicistion' className='md:w-[22px] md:h-[22px] w-[18px] h-[18px]'/> :  <PiBuildingOffice   className="text-blackColor md:w-[22px] md:h-[22px] w-[18px] h-[18px]" />}  
          </div>
          <div className="flex gap-4 items-center">
          <p
           className="text-blackColor text-sm font-bold capitalize">{title}</p>
          <p className="text-[#6E6E6E] text-sm">step {stepCount } of {totalSteps }</p>
          </div>
           <div>
            <div className="relative w-10 h-10">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(#1f4acc ${progressDegrees}, #fff 0deg)`
                }}
              />
              <div className="absolute inset-[4px] bg-secondaryColor rounded-full flex items-center justify-center text-sm font-bold text-blackColor">
                {stepCount}
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default PropertyNavStep

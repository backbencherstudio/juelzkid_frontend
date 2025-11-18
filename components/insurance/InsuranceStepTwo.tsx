"use client"

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Label } from "../ui/label"
import { cn } from "@/lib/utils"
import CustomButton from "../reusable/CustomButton"
import CustomLink from "../reusable/CustomLink"
import InsuranceStepOne from "./InsuranceStepOne"

type StepTwoFormData = {
  squareFootage: string
  roofAge: string
  hasInsurance: "yes" | "no"
}

export default function InsuranceSteptwo() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<StepTwoFormData>({
    defaultValues: {
      squareFootage: "",
      roofAge: "",
      hasInsurance: "yes",
    },
  })

  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = (data: StepTwoFormData) => {
    setIsSubmitting(true)
    console.log("Step Four Data:", data)
    setTimeout(() => {
      router.push("/insurance-info/insurance-step-three")
      setIsSubmitting(false)
    }, 400)
  }

  return (
   <div className="flex items-center justify-center">
      <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-md p-6 md:p-8">

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Square Footage */}
          <div>
            <Label className="text-sm font-medium mb-2 text-gray-800 block">
              Have you received any communication from your insurance company?
            </Label>
            <Select
              onValueChange={(value) =>
                setValue("squareFootage", value, { shouldValidate: true })
              }
            >
              <SelectTrigger className="!h-11 md:!h-12 w-full rounded-lg border-gray-300 text-gray-700">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Roof Age */}
          <div>
            <Label className="text-sm font-medium mb-2 text-gray-800 block">
              Have you received any payment from the claim yet?
            </Label>
            <Select
              onValueChange={(value) =>
                setValue("roofAge", value, { shouldValidate: true })
              }
            >
              <SelectTrigger className="!h-11 md:!h-12 w-full rounded-lg border-gray-300 text-gray-700">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Home Insurance */}
          <div>
            <Label className="text-sm font-medium text-gray-800 block mb-2">
              Has the claim been fully settled?
            </Label>

            <div className="w-full rounded-lg bg-[#FCEADF] p-1 flex gap-1">
              <button
                type="button"
                onClick={() => setValue("hasInsurance", "yes")}
                className={cn(
                  "flex-1 py-3 rounded-xl font-semibold",
                  watch("hasInsurance") === "yes"?
                   'bg-white' : 'bg-transparent'
                )}
              >
                Yes
              </button>

              <button
                type="button"
                onClick={() => setValue("hasInsurance", "no")}
                className={cn(
                  "flex-1 py-3 rounded-xl font-semibold",
                  watch("hasInsurance") === "no"
                    ? 'bg-white' : 'bg-transparent'
                )}
              >
                No
              </button>
            </div>
          </div>
          <div className='flex  flex-col-reverse md:flex-row gap-3'>
            <div className='md:w-[35%]'>
                  <CustomLink link="/insurance-info" title='Back' className="" />
            </div>
          <CustomButton
            title="Next"
            loading={isSubmitting}
            sendingMsg="Processing..."
            type="submit"
          />
          </div>
        </form>
      </div>
    </div>
  )
}



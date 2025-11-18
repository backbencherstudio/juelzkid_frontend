'use client'
import PropertyStepTwoForm from '@/components/property/PropertyStepTwoForm'
import CustomButton from '@/components/reusable/CustomButton'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import CustomLink from '../reusable/CustomLink'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Label } from '../ui/label'

const safetyOptions = [
  { value: 'Yes' },
  { value: 'No'},
  { value: 'Maybe' },
  { value: `Help me understand how that'd benefit me first`},
]

type StepTwoFormData = {
  insuranceThree: string
  squareFootage:string
}

function InsuranceStepThree() {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<StepTwoFormData>({
    defaultValues: { insuranceThree: safetyOptions[0].value ,
        squareFootage:''
    },
    
  })
  
  const selected = watch('insuranceThree')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const onSubmit = async (data: StepTwoFormData) => {
    setIsSubmitting(true)
    try {
      console.log('Step Two data:', data)
      setTimeout(() => {
        // router.push('/insurance-info/insurance-step-two')
        // toast.success('Step saved successfully')
        setIsSubmitting(false)
      }, 400)
    } finally {
      setTimeout(() => setIsSubmitting(false), 400)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="md:w-[500px] w-[90vw] max-w-[530px] bg-white rounded-2xl shadow-lg p-4 md:p-9">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          <PropertyStepTwoForm
            question="Would you like help from a public adjuster on our team?"
            required
            options={safetyOptions}
            selectedValue={selected}
            onChange={(val) => setValue('insuranceThree', val, { shouldValidate: true })}
            error={errors.insuranceThree?.message}
          />
          <div className='flex  flex-col-reverse md:flex-row gap-3'>
            <div className='md:w-[35%]'>
                  <CustomLink link="/insurance-info/insurance-step-three" title='Back' className="" />
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

export default InsuranceStepThree

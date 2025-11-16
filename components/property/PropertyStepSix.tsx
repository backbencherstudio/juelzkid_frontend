'use client'

import CustomButton from '@/components/reusable/CustomButton'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import PropertyStepTwoForm from './PropertyStepTwoForm'
import CustomLink from '../reusable/CustomLink'


const mortgageOptions = [
  { value: 'Yes, there’s an active mortgage' },
  { value: 'No, the property is fully paid off' },
  { value: 'Not Sure' },
]

type StepSixFormData = {
  mortgageStatus: string
}

function PropertyStepSix() {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    } = useForm<StepSixFormData>({
    defaultValues: { mortgageStatus: mortgageOptions[0].value },
  })

  const selected = watch('mortgageStatus')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const onSubmit = async (data: StepSixFormData) => {
    setIsSubmitting(true)
    try {
      console.log('Step six data:', data)
      setTimeout(() => {
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
          <PropertyStepTwoForm
            question="Is there an existing mortgage?"
            required
            options={mortgageOptions}
            selectedValue={selected}
            onChange={(val) => setValue('mortgageStatus', val, { shouldValidate: true })}
            error={errors.mortgageStatus?.message}
          />

           <div className='flex  flex-col-reverse md:flex-row gap-3'>
            <div className='md:w-[35%]'>
            <CustomLink link="/property-info/property-step-two" title='Back' className="" />
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

export default PropertyStepSix

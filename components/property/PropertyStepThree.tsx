'use client'

import CustomButton from '@/components/reusable/CustomButton'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import PropertyStepTwoForm from './PropertyStepTwoForm'
import CustomLink from '../reusable/CustomLink'


const displacementOptions = [
  { value: 'I’m displaced and staying elsewhere' },
  { value: 'I’m still staying at the property' },
  { value: 'Currently staying with family or friends' },
]

type StepThreeFormData = {
  displacementStatus: string
}

function PropertyStepThree() {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<StepThreeFormData>({
    defaultValues: { displacementStatus: displacementOptions[0].value },
  })

  const selected = watch('displacementStatus')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const onSubmit = async (data: StepThreeFormData) => {
    setIsSubmitting(true)
    try {
      console.log('Step Three data:', data)
      setTimeout(() => {
        router.push('/property-info/property-step-four')
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
            question="Are you displaced or still staying at the property?"
            required
            options={displacementOptions}
            selectedValue={selected}
            onChange={(val) => setValue('displacementStatus', val, { shouldValidate: true })}
            error={errors.displacementStatus?.message}
          />

          <div className='flex  flex-col-reverse md:flex-row gap-3'>
            <CustomLink link="/property-info/property-step-two" title='Back' className="" />

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

export default PropertyStepThree

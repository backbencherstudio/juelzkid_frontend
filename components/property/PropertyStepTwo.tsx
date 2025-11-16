'use client'

import CustomButton from '@/components/reusable/CustomButton'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import PropertyStepTwoForm from './PropertyStepTwoForm'
import Link from 'next/link'
import CustomLink from '../reusable/CustomLink'


const safetyOptions = [
  { value: 'Yes, it’s safe to enter' },
  { value: 'No, it’s unsafe or structurally damaged'},
  { value: 'Not sure, waiting for inspection'},
]

type StepTwoFormData = {
  homeSafety: string
}

function PropertyStepTwo() {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<StepTwoFormData>({
    defaultValues: { homeSafety: safetyOptions[0].value },
  })

  const selected = watch('homeSafety')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const onSubmit = async (data: StepTwoFormData) => {
    setIsSubmitting(true)
    try {
      console.log('Step Two data:', data)
      setTimeout(() => {
        router.push('/property-info/property-step-three')
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
            question="Is the home currently safe to enter?"
            required
            options={safetyOptions}
            selectedValue={selected}
            onChange={(val) => setValue('homeSafety', val, { shouldValidate: true })}
            error={errors.homeSafety?.message}
          />
          <div className='flex  flex-col-reverse md:flex-row gap-3'>
           <CustomLink link="/property-info" title='Back'  className=""/>
             
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

export default PropertyStepTwo

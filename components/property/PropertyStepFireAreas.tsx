'use client'

import CustomButton from '@/components/reusable/CustomButton'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import MultiSelectCheckboxGroup from '../allForm/MultiSelectCheckboxGroup'
import CustomLink from '../reusable/CustomLink'
import PropertyNavStep from '../reusable/PropertyNavStep'
import { useRouter } from 'next/navigation'


type FireAreaForm = {
  affectedAreas: string[]
}

const areaOptions = [
  { value: 'Kitchen', label: 'Kitchen' },
  { value: 'Living room', label: 'Living room' },
  { value: 'Bedrooms', label: 'Bedrooms' },
  { value: 'Bathroom', label: 'Bathroom' },
  { value: 'Roof/attic', label: 'Roof/attic' },
  { value: 'Basement', label: 'Basement' },
  { value: 'Garage', label: 'Garage' },
  { value: 'Entire structure', label: 'Entire structure' },
]

export default function PropertyStepFireAreas() {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FireAreaForm>({
    defaultValues: { affectedAreas: [] },
  })

  const selected = watch('affectedAreas')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()  
  const onSubmit = async (data: FireAreaForm) => {
    setIsSubmitting(true)
    console.log('Selected fire-affected areas:', data)
    setTimeout(() => {
      // toast.success('Saved successfully!')
      router.push('/damage-info/damage-step-two')
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <div className="flex items-center justify-center">
      <div className="md:w-[500px] w-[90vw] bg-white rounded-2xl shadow-lg p-6 md:p-9">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className='md:hidden'>

            <PropertyNavStep title="Property Info" stepLength={6} />
          </div>
          <MultiSelectCheckboxGroup
            question="What areas were affected by the fire?"
            required
            options={areaOptions}
            selectedValues={selected}
            onChange={(vals) => setValue('affectedAreas', vals, { shouldValidate: true })}
            error={errors.affectedAreas?.message}
          />

          <div className='flex  flex-col-reverse md:flex-row gap-3'>
                      <div className='md:w-[35%]'>
                        <CustomLink link="/property-info/property-step-six" title='Back' className="" />
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

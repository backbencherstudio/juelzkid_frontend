'use client'

import CustomButton from '@/components/reusable/CustomButton'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import MultiSelectCheckboxGroup from '../allForm/MultiSelectCheckboxGroup'


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

  const onSubmit = async (data: FireAreaForm) => {
    setIsSubmitting(true)
    console.log('Selected fire-affected areas:', data)
    setTimeout(() => {
      toast.success('Saved successfully!')
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <div className="flex items-center justify-center">
      <div className="md:w-[500px] w-[90vw] bg-white rounded-2xl shadow-lg p-6 md:p-9">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <MultiSelectCheckboxGroup
            question="What areas were affected by the fire?"
            required
            options={areaOptions}
            selectedValues={selected}
            onChange={(vals) => setValue('affectedAreas', vals, { shouldValidate: true })}
            error={errors.affectedAreas?.message}
          />

          <CustomButton
            title="Next"
            loading={isSubmitting}
            sendingMsg="Processing..."
            type="submit"
          />
        </form>
      </div>
    </div>
  )
}

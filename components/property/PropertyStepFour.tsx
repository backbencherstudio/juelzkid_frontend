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
  { value: 'Yes, I need help with temporary housing', label: 'Yes, I need help with temporary housing' },
  { value: 'Yes, I need help with food', label: 'Yes, I need help with food' },
  { value: 'Yes, I need help with clothing', label: 'Yes, I need help with clothing' },
  { value: 'No, I don\'t need immediate assistance', label: 'No, I don\'t need immediate assistance' },
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
      <div className="md:w-[500px] w-[90vw] bg-white rounded-2xl shadow-lg p-4 md:p-9">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <MultiSelectCheckboxGroup
            question="Do you have immediate needs for temporary housing, food, or clothing? "
            required
            options={areaOptions}
            typeFlex={2}
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

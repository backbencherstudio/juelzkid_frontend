'use client'

import CustomButton from '@/components/reusable/CustomButton'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import PropertyStepTwoForm from './PropertyStepTwoForm'


const accommodationOptions = [
  { value: 'I lived here (Homeowner)' },
  { value: 'I rented this property (Tenant)'},
  { value: 'I\'m the property owner'},
]

type StepFiveFormData = {
  accommodationStatus: string
}

function PropertyStepFive() {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<StepFiveFormData>({
    defaultValues: { accommodationStatus: accommodationOptions[0].value },
  })

  const selected = watch('accommodationStatus')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [squareFeet, setSquareFeet] = useState('')
  const router = useRouter()

  const onSubmit = async (data: StepFiveFormData) => {
    setIsSubmitting(true)
    try {
      console.log('Step five data:', data + ' ' + squareFeet)
      setTimeout(() => {
        router.push('/property-info/property-step-six')
        toast.success('Step saved successfully')
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
          <Select>
            <SelectTrigger onChange={(e: React.ChangeEvent<HTMLButtonElement>) => setSquareFeet(e.target.value)}>
              <SelectValue placeholder="Select square footage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1000-2000">1000-2000</SelectItem>
              <SelectItem value="2000-3000">2000-3000</SelectItem>
              <SelectItem value="3000-4000">3000-4000</SelectItem>
              <SelectItem value="4000-5000">4000-5000</SelectItem>
              <SelectItem value="5000-6000">5000-6000</SelectItem>
              <SelectItem value="6000-7000">6000-7000</SelectItem>
              <SelectItem value="7000-8000">7000-8000</SelectItem>
             
            </SelectContent>
          </Select>

          <PropertyStepTwoForm
            question="Did you live in or rent this property? "
            required
            options={accommodationOptions}
            selectedValue={selected}
            onChange={(val) => setValue('accommodationStatus', val, { shouldValidate: true })}
            error={errors.accommodationStatus?.message}
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

export default PropertyStepFive

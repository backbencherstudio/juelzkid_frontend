'use client'

import CustomButton from '@/components/reusable/CustomButton'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import PropertyStepTwoForm from './PropertyStepTwoForm'
import CustomLink from '../reusable/CustomLink'


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
    console.log('squareFeet', squareFeet);
    
    setIsSubmitting(true)
    try {
      console.log('Step five data:', data + ' ' )
      console.log('Step five data:', squareFeet)
      setTimeout(() => {
        router.push('/property-info/property-step-six')
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
            question="Did you live in or rent this property? "
            required
            options={accommodationOptions}
            selectedValue={selected}
            setSquareFeet={setSquareFeet}
            squareFeet={squareFeet}
            onChange={(val) => setValue('accommodationStatus', val, { shouldValidate: true })}
            error={errors.accommodationStatus?.message}
          />

           <div className='flex  flex-col-reverse md:flex-row gap-3'>
            <div className='md:w-[35%]'>
                       <CustomLink link="/property-info/property-step-four" title='Back' className="" />
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

export default PropertyStepFive

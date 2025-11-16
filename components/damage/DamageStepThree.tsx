'use client'
import PropertyStepTwoForm from '@/components/property/PropertyStepTwoForm'
import CustomButton from '@/components/reusable/CustomButton'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import CustomLink from '../reusable/CustomLink'


const safetyOptions = [
  { value: 'Yes, smoke damage' },
  { value: 'Yes, water damage'},
  { value: 'Yes, both smoke and water damage'},
  { value: 'No, only fire damage'},
]

type StepTwoFormData = {
  damageThree: string
}

function DamageStepThree() {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<StepTwoFormData>({
    defaultValues: { damageThree: safetyOptions[0].value },
  })

  const selected = watch('damageThree')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const onSubmit = async (data: StepTwoFormData) => {
    setIsSubmitting(true)
    try {
      console.log('Step Two data:', data)
      setTimeout(() => {
        router.push('/damage-info/damage-step-four')
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
            question="Did smoke/water cause additional damage?"
            required
            options={safetyOptions}
            selectedValue={selected}
            onChange={(val) => setValue('damageThree', val, { shouldValidate: true })}
            error={errors.damageThree?.message}
          />
          <div className='flex  flex-col-reverse md:flex-row gap-3'>
            <div className='md:w-[35%]'>
                       <CustomLink link="/damage-info/damage-step-two" title='Back' className="" />
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

export default DamageStepThree

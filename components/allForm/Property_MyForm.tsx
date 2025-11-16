"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import CustomButton from '../reusable/CustomButton'
import PropertyNavStep from '../reusable/PropertyNavStep'
import CustomLink from '../reusable/CustomLink'

// Form data type
type PropertyFormData = {
  address: string
  propertyType: string
  incidentDate: string
  severity: string
  injured: 'yes' | 'no'
}

function Property_MyForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PropertyFormData>({
    defaultValues: {
      injured: 'yes'
    }
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const injured = watch('injured')
const router = useRouter()
  const onSubmit = async (data: PropertyFormData) => {
    setIsSubmitting(true)
    try {
      console.log('Property form:', data)
      setTimeout(() => {
        router.push("/property-info/property-step-two")
        setIsSubmitting(false)
        toast.success("Form submitted successfully")
      }, 500);
    } finally {
      setTimeout(() => setIsSubmitting(false), 500)
    }
  }

  return (
    <div className=" flex items-center justify-center ">
      <div className="md:w-[500px] w-[90vw] max-w-[530px] bg-white rounded-2xl shadow-lg p-4 md:p-9">
        <div className='pb-2'>
         <PropertyNavStep title="Property Info" stepLength={6} />
        </div>
        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 ">
          {/* Address */}
          <div className="space-y-1">
            <Label htmlFor="address" className="text-sm font-medium text-[#070707]">
              Full address where the fire happened <span className="text-[#e12626]">*</span>
            </Label>
            <Input
              id="address"
              type="text"
              placeholder="123 Oakridge Drive, Atlanta, GA 30318"
              className={cn(
                'w-full h-11 rounded-md border border-gray-300 bg-white px-4',
                'focus:border-[#0068EF] focus:ring-1 focus:ring-[#0068EF]',
                errors.address && 'border-[#e12626] focus:border-[#e12626] focus:ring-[#e12626] md:!h-12'
              )}
              {...register('address', {
                required: 'Address is required',
                minLength: { value: 5, message: 'Please enter a full address' },
              })}
            />
            {errors.address && (
              <p className="text-sm text-[#e12626] mt-1">{errors.address.message}</p>
            )}
          </div>

          {/* Property Type */}
          <div className="space-y-1">
            <Label className="text-sm font-medium text-[#070707]">Type of Property</Label>
            <Select
              onValueChange={(val) => setValue('propertyType', val, { shouldValidate: true })}
            >
              <SelectTrigger className={cn(
                'w-full !h-11 rounded-md border border-gray-300 bg-white px-4 justify-between md:!h-12',
                errors.propertyType && 'border-[#e12626] md:!h-12'
              )}>
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single_family">Single Family</SelectItem>
                <SelectItem value="multi_family">Multi Family</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="mobile_home">Mobile Home</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
            {errors.propertyType && (
              <p className="text-sm text-[#e12626] mt-1">Select a property type</p>
            )}
          </div>

          {/* Incident Date */}
          <div className="space-y-1">
            <Label htmlFor="incidentDate" className="text-sm font-medium text-[#070707]">
              Date of Fire Incident
            </Label>
            <Input
              id="incidentDate"
              type="date"
              className={cn(
                'w-full h-11 rounded-md border border-gray-300 bg-white px-4 md:!h-12',
                'focus:border-[#0068EF] focus:ring-1 focus:ring-[#0068EF]',
                errors.incidentDate && 'border-[#e12626] focus:border-[#e12626] focus:ring-[#e12626]'
              )}
              {...register('incidentDate', {
                required: 'Incident date is required',
              })}
            />
            {errors.incidentDate && (
              <p className="text-sm text-[#e12626] mt-1">{errors.incidentDate.message}</p>
            )}
          </div>

          {/* Damage Severity */}
          <div className="space-y-1">
            <Label className="text-sm font-medium text-[#070707]">Damage Severity</Label>
            <Select
              onValueChange={(val) => setValue('severity', val, { shouldValidate: true })}
            >
              <SelectTrigger className={cn(
                'w-full !h-11 rounded-md border border-gray-300 bg-white px-4 justify-between md:!h-12',
                errors.severity && 'border-[#e12626] md:!h-12'
              )}>
                <SelectValue placeholder="Select damage severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="minor">Minor</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="severe">Severe</SelectItem>
                <SelectItem value="total_loss">Total Loss</SelectItem>
              </SelectContent>
            </Select>
            {errors.severity && (
              <p className="text-sm text-[#e12626] mt-1">Select a severity level</p>
            )}
          </div>

          {/* Injured Toggle */}
          <div className="space-y-1">
            <Label className="text-sm font-medium text-[#070707]">Was anyone injured?</Label>
            <div className="w-full rounded-lg bg-[#FCEADF] p-1 flex gap-1">
              <button
                type="button"
                onClick={() => setValue('injured', 'yes', { shouldValidate: true })}
                className={cn(
                  'flex-1 py-2 rounded-lg text-center font-semibold',
                  injured === 'yes' ? 'bg-white' : 'bg-transparent'
                )}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setValue('injured', 'no', { shouldValidate: true })}
                className={cn(
                  'flex-1 py-2 rounded-lg text-center font-semibold',
                  injured === 'no' ? 'bg-white' : 'bg-transparent'
                )}
              >
                No
              </button>
            </div>
            {errors.injured && (
              <p className="text-sm text-[#e12626] mt-1">Please choose an option</p>
            )}
          </div>

          {/* Submit Button */}
          <div className='flex  flex-col-reverse md:flex-row gap-3'>
            <CustomLink link="/dashboard" title='Back' className="" />
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

export default Property_MyForm

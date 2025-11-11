"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import CustomButton from '../reusable/CustomButton'

// Form data type
type AboutFormData = {
  fullName: string
  email: string
  phone: string
  message?: string
}

function About_MyForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AboutFormData>()
const [isSubmitting, setIsSubmitting] = useState(false)
  const onSubmit = async (data: AboutFormData) => {
    setIsSubmitting(true)
    try {
      // Handle form submission here
      console.log('About form:', data)
      setTimeout(() => {
        setIsSubmitting(false)
        router.push("/property-info")
        toast.success("Form submitted successfully")
      }, 1000);
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error("Form submission failed")
    } 
  }

  return (
    <div className=" flex items-center justify-center ">
      <div className="md:w-[500px] w-[90vw] max-w-[500px] bg-white rounded-2xl shadow-lg p-4 md:p-9">
        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 w-full">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium text-[#070707]">
              Full Name <span className="text-[#e12626]">*</span>
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="John Matthews"
              className={cn(
                'w-full !h-11 rounded-md border border-gray-300 bg-white px-4',
                'focus:border-[#0068EF] focus:ring-1 focus:ring-[#0068EF]',
                errors.fullName && 'border-[#e12626] focus:border-[#e12626] focus:ring-[#e12626]'
              )}
              {...register('fullName', {
                required: 'Full name is required',
                minLength: {
                  value: 2,
                  message: 'Please enter a valid name',
                },
              })}
            />
            {errors.fullName && (
              <p className="text-sm text-[#e12626] mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-[#070707]">
              Email Address <span className="text-[#e12626]">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={cn(
                'w-full !h-11 rounded-md border border-gray-300 bg-white px-4',
                'focus:border-[#0068EF] focus:ring-1 focus:ring-[#0068EF]',
                errors.email && 'border-[#e12626] focus:border-[#e12626] focus:ring-[#e12626]'
              )}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-[#e12626] mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-[#070707]">
              Phone Number <span className="text-[#e12626]">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 238-7912"
              className={cn(
                'w-full !h-11 rounded-md border border-gray-300 bg-white px-4',
                'focus:border-[#0068EF] focus:ring-1 focus:ring-[#0068EF]',
                errors.phone && 'border-[#e12626] focus:border-[#e12626] focus:ring-[#e12626]'
              )}
              {...register('phone', {
                required: 'Phone number is required',
                minLength: {
                  value: 7,
                  message: 'Please enter a valid phone number',
                },
              })}
            />
            {errors.phone && (
              <p className="text-sm text-[#e12626] mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-[#070707]">
              How have you been dealing with this (Be honest)
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us honestly..."
              className={cn(
                'w-full !min-h-[110px] rounded-md border border-gray-300 bg-white px-4 py-3',
                'focus:border-[#0068EF] focus:ring-1 focus:ring-[#0068EF]'
              )}
              {...register('message')}
            />
          </div>

          {/* Submit Button */}
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

export default About_MyForm

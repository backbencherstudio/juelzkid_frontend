"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import CustomButton from '../reusable/CustomButton'
import FormHeader from '../reusable/FormHeader'

// Form data type
type RegistrationFormData = {
  email: string
  password: string
}

function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>()

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      // Handle form submission here
      console.log('Form data:', data)
      // Add your API call or form handling logic
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  return (
    <div className=" flex items-center justify-center " >
      <div className="w-full max-w-[500px] bg-white rounded-2xl shadow-lg p-4 md:p-9">

        <FormHeader
        icon={"/icon/user.png"}
        title="Get Your Personalized Recovery Plan Now"
        description="We're here to help you rebuild and recover with personalized guidance every step of the way."
        />

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-[#070707]">
              Email Address <span className="text-[#e12626]">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={cn(
                "w-full h-11 rounded-md border border-gray-300 bg-white px-4",
                "focus:border-[#0068EF] focus:ring-1 focus:ring-[#0068EF]",
                errors.email && "border-[#e12626] focus:border-[#e12626] focus:ring-[#e12626]"
              )}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              })}
            />
            {errors.email && (
              <p className="text-sm text-[#e12626] mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-[#070707]">
              Create password <span className="text-[#e12626]">*</span>
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className={cn(
                  "w-full h-11 rounded-md border border-gray-300 bg-white px-4 pr-12",
                  "focus:border-[#0068EF] focus:ring-1 focus:ring-[#0068EF]",
                  errors.password && "border-[#e12626] focus:border-[#e12626] focus:ring-[#e12626]"
                )}
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters'
                  }
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-[#e12626] mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Legal Text */}
          <div className="text-sm text-[#4a4c56] text-center">
            By creating an account, you agree to our{' '}
            <a
              href="#"
              className="text-[#FF8C42] underline hover:text-[#FF6B00] transition-colors"
              onClick={(e) => {
                e.preventDefault()
                // Handle Terms of Service click
              }}
            >
              Terms of Service
            </a>
            {' '}and{' '}
            <a
              href="#"
              className="text-[#FF8C42] underline hover:text-[#FF6B00] transition-colors"
              onClick={(e) => {
                e.preventDefault()
                // Handle Privacy Policy click
              }}
            >
              Privacy Policy
            </a>
            .
          </div>

          {/* Submit Button */}
         
          <CustomButton title="Create an Account - It's Free" loading={isSubmitting} sendingMsg="Creating Account..." type="submit" />
        </form>
      </div>
    </div>
  )
}

export default RegistrationForm

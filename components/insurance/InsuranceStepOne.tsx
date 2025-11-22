"use client"

import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import CustomButton from '../reusable/CustomButton'
import PropertyNavStep from '../reusable/PropertyNavStep'
import CustomLink from '../reusable/CustomLink'

type InsuranceFormData = {
    hasInsurance: 'yes' | 'no'
    claimFiled: 'yes' | 'no'
    filedMoreThan30Days: 'yes' | 'no'
}

function InsuranceStepOne() {
    const {
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<InsuranceFormData>({
        defaultValues: {
            hasInsurance: 'yes',
            claimFiled: 'yes',
            filedMoreThan30Days: 'yes',
        }
    })

    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const onSubmit = async (data: InsuranceFormData) => {
        setIsSubmitting(true)
        try {
            console.log("Insurance Step Data:", data)
            router.push("/insurance-info/insurance-step-two")
            // toast.success("Form submitted successfully")
        } finally {
            setTimeout(() => setIsSubmitting(false), 500)
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="md:w-[500px] w-[90vw] max-w-[530px] bg-white rounded-2xl shadow-lg p-4 md:p-9">
                <div className="pb-2 md:hidden">
                    <PropertyNavStep title="Insurance Info" stepLength={3} />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Q1 */}
                    <div>
                        <Label className="text-sm font-medium text-[#070707] mb-1">
                            Do you currently have homeowners insurance?
                        </Label>
                        <div className="w-full rounded-lg bg-[#FCEADF] p-1 flex gap-1">
                            <button
                                type="button"
                                onClick={() => setValue('hasInsurance', 'yes')}
                                className={cn('flex-1 py-2 rounded-lg font-semibold text-center',
                                    watch('hasInsurance') === 'yes' ? 'bg-white' : 'bg-transparent')} >
                                Yes
                            </button>
                            <button
                                type="button"
                                onClick={() => setValue('hasInsurance', 'no')}
                                className={cn('flex-1 py-2 rounded-lg font-semibold text-center',
                                    watch('hasInsurance') === 'no' ? 'bg-white' : 'bg-transparent')} >
                                No
                            </button>
                        </div>
                    </div>
                    {/* Q2 */}
                    <div>
                        <Label className="text-sm font-medium text-[#070707] mb-1">
                            Have you filed a claim yet?
                        </Label>
                        <div className="w-full rounded-lg bg-[#FCEADF] p-1 flex gap-1">
                            <button
                                type="button"
                                onClick={() => setValue('claimFiled', 'yes')}
                                className={cn('flex-1 py-2 rounded-lg font-semibold text-center',
                                    watch('claimFiled') === 'yes' ? 'bg-white' : 'bg-transparent')}
                            >
                                Yes
                            </button>
                            <button
                                type="button"
                                onClick={() => setValue('claimFiled', 'no')}
                                className={cn('flex-1 py-2 rounded-lg font-semibold text-center',
                                    watch('claimFiled') === 'no' ? 'bg-white' : 'bg-transparent')}
                            >
                                No
                            </button>
                        </div>
                    </div>
                    {/* Q3 */}
                    <div>
                        <Label className="text-sm font-medium text-[#070707] mb-1">
                            Was the claim filed more than 30 days ago?
                        </Label>
                        <div className="w-full rounded-lg bg-[#FCEADF] p-1 flex gap-1">
                            <button
                                type="button"
                                onClick={() => setValue('filedMoreThan30Days', 'yes')}
                                className={cn('flex-1 py-2 rounded-lg font-semibold text-center',
                                    watch('filedMoreThan30Days') === 'yes' ? 'bg-white' : 'bg-transparent')}
                            >
                                Yes
                            </button>
                            <button
                                type="button"
                                onClick={() => setValue('filedMoreThan30Days', 'no')}
                                className={cn('flex-1 py-2 rounded-lg font-semibold text-center',
                                    watch('filedMoreThan30Days') === 'no' ? 'bg-white' : 'bg-transparent')}
                            >
                                No
                            </button>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className='flex  flex-col-reverse md:flex-row gap-3'>
                        <div className='md:w-[35%]'>
                            <CustomLink link="/damage-info/damage-step-four" title='Back' className="" />
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

export default InsuranceStepOne

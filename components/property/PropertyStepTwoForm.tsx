'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import PropertyNavStep from '../reusable/PropertyNavStep'
import { usePathname } from 'next/navigation'

type Option = {
  value: string
}

interface PropertyRadioFormProps {
  question: string
  required?: boolean
  options: Option[]
  selectedValue: string
  onChange: (val: string) => void
  error?: string
  squareFeet?: string
  setSquareFeet?: (val: string) => void
}

export default function PropertyRadioForm({
  question,
  required,
  options,
  selectedValue,
  onChange,
  error,
  squareFeet,
  setSquareFeet

}: PropertyRadioFormProps) {
  const pathname = usePathname()
  
  return (
    <div className="space-y-2">
      <div className='md:hidden'>
      <PropertyNavStep title="Property Info" stepLength={6} />
      </div>
      {
        pathname === '/property-info/property-step-five' && 
         <div className='pb-2'>
                <Label className="text-sm  font-medium mb-2 text-[#070707]">What's the approximate square footage?<span className="text-[#e12626]">*</span></Label>
                <Select value={squareFeet} onValueChange={(v) => setSquareFeet(v)}>
                  <SelectTrigger className='!h-11 md:!h-12 w-full'>
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
                  </div>
      }
     
      
      <Label className="text-sm md:text-base font-medium text-[#070707]">
        {question} {required && <span className="text-[#e12626]">*</span>}
      </Label>

      <RadioGroup
        value={selectedValue}
        onValueChange={onChange}
        className="space-y-1"
      >
        {options.map((opt) => (
          <div key={opt.value} className="flex items-center gap-3">
            <RadioGroupItem
              value={opt.value}
              id={opt.value}
              className={`${selectedValue === opt.value ? '!border-blueColor' : 'border-grayColor1'} text-[#0F56D9] bg-white`}
            />
            <button
              type="button"
              onClick={() => onChange(opt.value)}
              className={cn(
                'flex-1 rounded-lg border md:px-3 p-2 md:py-3 text-left',
                selectedValue === opt.value
                  ? 'bg-gradient-to-br from-blueColor to-blueColor2 text-white border-transparent'
                  : 'bg-white text-blackColor border-gray-300'
              )}
            >
              <span className="text-sm">{opt.value}</span>
            </button>
          </div>
        ))}
      </RadioGroup>

      {error && <p className="text-sm text-[#e12626] mt-1">{error}</p>}
    </div>
  )
}

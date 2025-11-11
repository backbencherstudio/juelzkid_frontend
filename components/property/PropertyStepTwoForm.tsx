'use client'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'

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
}

export default function PropertyRadioForm({
  question,
  required,
  options,
  selectedValue,
  onChange,
  error
}: PropertyRadioFormProps) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-[#070707]">
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

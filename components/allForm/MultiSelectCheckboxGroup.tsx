'use client'

import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'

type Option = {
  value: string
  label: string
}

interface MultiSelectCheckboxGroupProps {
  question: string
  required?: boolean
  options: Option[]
  typeFlex?: boolean | number
  selectedValues: string[]
  onChange: (values: string[]) => void
  error?: string
  autoSelectFirst?: boolean
}

export default function MultiSelectCheckboxGroup({
  question,
  required,
  options,
  typeFlex,
  selectedValues,
  onChange,
  error,
  autoSelectFirst = true,
}: MultiSelectCheckboxGroupProps) {
  const handleToggle = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value))
    } else {
      onChange([...selectedValues, value])
    }
  }

  // Auto-select the first option initially if nothing selected
  useEffect(() => {
    if (autoSelectFirst && selectedValues.length === 0 && options.length > 0) {
      onChange([options[0].value])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="space-y-3">
      {/* Question */}
      <Label className="text-sm font-medium text-[#070707]">
        {question} {required && <span className="text-[#e12626]">*</span>}
      </Label>

      {/* Checkbox grid */}
      <div className={`grid grid-cols-1 ${typeFlex ? `md:grid-cols-${typeFlex}` : 'md:grid-cols-2'} gap-2 md:gap-3`}>
        {options.map((opt) => {
          const checked = selectedValues.includes(opt.value)
          return (
            <div key={opt.value} className="flex items-center gap-3">
              {/* Checkbox outside left */}
              <input
                type="checkbox"
                value={opt.value}
                checked={checked}
                onChange={() => handleToggle(opt.value)}
                className={cn(
                  'size-4 accent-blueColor cursor-pointer',
                )}
                aria-label={opt.label}
              />
              {/* Label box with border */}
              <button
                type="button"
                onClick={() => handleToggle(opt.value)}
                className={cn(
                  'flex-1 rounded-lg border md:px-3 p-2 md:py-3 text-left text-sm font-medium transition-all',
                  checked
                    ? 'bg-gradient-to-br from-blueColor to-blueColor2 text-white border-transparent'
                    : 'bg-white text-black border-gray-300 hover:border-blueColor hover:text-blueColor'
                )}
              >
                {opt.label}
              </button>
            </div>
          )
        })}
      </div>

      {error && <p className="text-sm text-[#e12626] mt-1">{error}</p>}
    </div>
  )
}

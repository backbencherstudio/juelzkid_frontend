"use client"

import { Eye, ChevronRight } from "lucide-react"
import Link from "next/link"

interface RecoveryProgressProps {
  progress: number
  currentPhase: number
  totalPhases: number
  onNextStep: () => void
  onViewPlan: () => void
}

export function RecoveryProgress({
  progress,
  currentPhase,
  totalPhases,
  onNextStep,
  onViewPlan,
}: RecoveryProgressProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="text-orange-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-gray-900">Recovery Progress</h1>
      </div>

      {/* Overall Completion Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-gray-700">Overall Completion</label>
          <span className="text-lg font-bold text-gray-900">{progress}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-orange-500 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Status Text */}
      <p className="text-sm text-gray-600 mb-6">
        You've completed {currentPhase} of {totalPhases} phases in your recovery plan.
      </p>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Link
          href="/final-option"
          className="flex w-full border rounded-md cursor-pointer justify-center  items-center gap-2 px-4 py-2 text-orange-500 hover:text-orange-600 transition font-medium"
        >
          <Eye className="w-5 h-5" />
          View Full Plan
        </Link>
        <button
          onClick={onNextStep}
          disabled={currentPhase === totalPhases}
          className=" flex w-full items-center cursor-pointer justify-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Go to Next Step
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

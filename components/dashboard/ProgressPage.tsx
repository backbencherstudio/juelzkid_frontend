"use client"

import { useState } from "react"
import { RecoveryProgress } from "./RecoveryProgress"


export default function ProgressPage() {
  const [progress, setProgress] = useState(65)
  const [currentPhase, setCurrentPhase] = useState(3)
  const totalPhases = 5

  const handleNextStep = () => {
    if (currentPhase < totalPhases) {
      const newPhase = currentPhase + 1
      setCurrentPhase(newPhase)
      setProgress(Math.round((newPhase / totalPhases) * 100))
    }
  }
 

  return (
    <div className="">
      <div className=" space-y-8">
        <RecoveryProgress
          progress={progress}
          currentPhase={currentPhase}
          totalPhases={totalPhases}
          onNextStep={handleNextStep}
          onViewPlan={() => alert("View Full Plan clicked!")}
        />

      
      </div>
    </div>
  )
}

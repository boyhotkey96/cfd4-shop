import React, { useState } from 'react'
import Step1 from './components/Step1'
import Step2 from './components/Step2'

export default function Payment() {
  let [step, setStep] = useState(1)

  function nextStep() {
    setStep(step + 1)
  }

  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      {/* Form */}

      {/* Heading */}
      <h6 className="mb-7">
        Add Debit / Credit Card
        </h6>
      {
        step === 1 && <Step1 nextStep={nextStep} />
      }
      {
        step === 2 && <Step2 />
      }
    </div>
  )
}
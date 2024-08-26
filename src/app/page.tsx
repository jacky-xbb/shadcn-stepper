"use client";

import { useState } from "react";
import { Stepper } from "@/components/ui/stepper";
import { Button } from "@/components/ui/button";
import {
  AddressForm,
  ConfirmationForm,
  PaymentForm,
  PersonalInfoForm,
} from "@/components/ui/step-forms";

const steps = [
  {
    title: "Personal Info",
    description: "Name and Email",
    content: <PersonalInfoForm />,
  },
  {
    title: "Address",
    description: "Shipping Address",
    content: <AddressForm />,
  },
  { title: "Payment", description: "Card Details", content: <PaymentForm /> },
  {
    title: "Confirm",
    description: "Review Info",
    content: <ConfirmationForm />,
  },
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Stepper Example</h1>
        <Stepper steps={steps} currentStep={currentStep} />
        <div className="mt-8 flex justify-between">
          <Button onClick={handlePrevious} disabled={currentStep === 1}>
            Previous
          </Button>
          <Button onClick={handleNext} disabled={currentStep === steps.length}>
            {currentStep === steps.length ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    </main>
  );
}

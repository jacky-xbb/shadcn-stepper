import React from "react";
import { StepperItem } from "./stepper-item";

interface Step {
  title: string;
  description?: string;
  content: React.ReactNode;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-8">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <StepperItem
              step={index + 1}
              title={step.title}
              description={step.description}
              isActive={currentStep === index + 1}
              isCompleted={currentStep > index + 1}
            />
            {index < steps.length - 1 && (
              <div className="flex-grow border-t-2 border-muted-foreground/20 self-center mx-4" />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-8">
        {steps[currentStep - 1].content}
      </div>
    </div>
  );
}

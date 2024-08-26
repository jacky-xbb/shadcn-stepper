import React from "react";
import { cn } from "@/lib/utils";

interface StepperItemProps {
  step: number;
  title: string;
  description?: string;
  isActive: boolean;
  isCompleted: boolean;
}

export function StepperItem({
  step,
  title,
  description,
  isActive,
  isCompleted,
}: StepperItemProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-full border-2",
          isActive && "border-primary bg-primary text-primary-foreground",
          isCompleted && "border-primary bg-primary text-primary-foreground",
          !isActive && !isCompleted &&
            "border-muted-foreground text-muted-foreground",
        )}
      >
        {isCompleted
          ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          )
          : <span>{step}</span>}
      </div>
      <div className="mt-2 text-center">
        <p
          className={cn(
            "text-sm font-medium",
            isActive && "text-primary",
            isCompleted && "text-primary",
            !isActive && !isCompleted && "text-muted-foreground",
          )}
        >
          {title}
        </p>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}

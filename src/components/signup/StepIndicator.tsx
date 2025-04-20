
import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-center items-center space-x-2">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            {index > 0 && (
              <div className={`h-1 w-10 ${index < currentStep ? 'bg-blue-600' : 'bg-gray-200'}`} />
            )}
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index < currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200'
                }`}
              >
                {index + 1}
              </div>
              <span className="text-xs mt-1 text-gray-500">{step}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

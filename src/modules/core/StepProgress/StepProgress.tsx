// StepProgress.tsx
import React from 'react';

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  onStepClick: (step: number) => void;
}

const StepProgress: React.FC<StepProgressProps> = ({ currentStep, totalSteps, onStepClick }) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => ({
    id: i + 1,
    label: ['Lên ý tưởng', 'Thiết kế', 'Phát triển', 'Kiểm thử'][i],
  }));

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Các bước công việc</span>
        <span className="text-sm font-semibold text-gray-600">
          {currentStep}/{totalSteps} hoàn thành
        </span>
      </div>
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
        <div
          className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>

        <div className="flex justify-between relative z-10 mt-2">
          {steps.map((step) => {
            const isCompleted = step.id <= currentStep;
            const isClickable = step.id <= currentStep + 1;

            return (
              <div
                key={step.id}
                className={`flex flex-col items-center cursor-pointer ${isClickable ? 'opacity-100' : 'opacity-60'}`}
                onClick={() => isClickable && onStepClick(step.id - 1)}
              >
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isCompleted
                      ? 'border-blue-600 bg-blue-100'
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  {isCompleted ? (
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  ) : (
                    <span className="text-gray-500 text-sm font-medium">{step.id}</span>
                  )}
                </div>
                <span
                  className={`text-xs mt-1 transition-colors duration-300 ${
                    isCompleted ? 'text-blue-600 font-medium' : 'text-gray-500'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepProgress;
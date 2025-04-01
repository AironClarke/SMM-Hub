import React from 'react';

interface ProgressBarProps {
  value: number; // Progress value (0-100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mt-2">
      <div
        className="h-full bg-purple-500 transition-all duration-300"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

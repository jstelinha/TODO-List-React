import React from 'react';
import { IconCheck } from '@tabler/icons-react';

function Check({ isChecked, onToggle }) {
  return (
    <span
      onClick={onToggle}
      className={`w-5 h-5 flex items-center justify-center border-2 rounded-full cursor-pointer ${
        isChecked ? 'bg-purple-600 border-purple-600' : 'bg-transparent border-gray-500'
      }`}
    >
      {isChecked && <IconCheck className="text-white" />}
    </span>
  );
}

export default Check;

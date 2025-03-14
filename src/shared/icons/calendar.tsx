import React from 'react';

export const Calendar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
        stroke="#current"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#current" />
      <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#current" />
      <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#current" />
    </svg>
  );
};

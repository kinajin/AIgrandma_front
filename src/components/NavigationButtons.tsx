// src/components/NavigationButtons.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/tailwind.css';

const NavigationButtons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="navigation-button"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1M1 5l4-4M1 5l4 4"
          />
        </svg>
        <span className="sr-only">Icon description</span>
      </button>
    </div>
  );
};

export default NavigationButtons;

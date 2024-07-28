import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cuisines } from '../constants/cuisines';

const CuisineSelection: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCuisineSelect = (cuisine: string) => {
    localStorage.setItem('cuisine', cuisine);
    navigate('/ingredients');
  };

  return (
    <div>
      {cuisines.map((cuisine) => (
        <button
          key={cuisine.cuisineType}
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => handleCuisineSelect(cuisine.cuisineType)}
        >
          {cuisine.emoji} {t(cuisine.cuisineType)}
        </button>
      ))}
    </div>
  );
};

export default CuisineSelection;

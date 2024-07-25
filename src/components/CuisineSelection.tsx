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
          onClick={() => handleCuisineSelect(cuisine.cuisineType)}
        >
          {cuisine.emoji} {t(cuisine.cuisineType)}
        </button>
      ))}
    </div>
  );
};

export default CuisineSelection;

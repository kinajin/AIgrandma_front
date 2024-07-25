import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { categories } from '../constants/ingredients';

const IngredientSelection: React.FC = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleIngredientToggle = (ingredient: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleSubmit = () => {
    localStorage.setItem('ingredients', JSON.stringify(selectedIngredients));
    navigate('/recipe');
  };

  return (
    <div>
      {Object.keys(categories).map((category) => (
        <div key={category}>
          <h2>{t(category)}</h2>
          {categories[category].map((ingredient) => (
            <button
              key={ingredient.label}
              onClick={() => handleIngredientToggle(ingredient.label)}
            >
              {ingredient.emoji} {t(ingredient.label)}
            </button>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>{t('submit')}</button>
    </div>
  );
};

export default IngredientSelection;

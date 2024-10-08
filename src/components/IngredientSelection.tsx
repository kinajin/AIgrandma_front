import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { categories } from '../constants/ingredients';
import { sendRecipeRequest } from '../api/geminiApi';
import '../styles/tailwind.css';

import SearchIcon from '../icons/SearchIcon';
import ClearIcon from '../icons/ClearIcon';
import LoadingMessages from '../components/LoadingMessages';

const IngredientSelection: React.FC = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleIngredientToggle = (ingredient: string) => {
    setSelectedIngredients((prev) => {
      const updatedIngredients = prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient];
      return updatedIngredients;
    });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const filteredCategories = Object.keys(categories).reduce((acc, category) => {
    const filteredItems = categories[category].items.filter((ingredient) =>
      t(ingredient.label).toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredItems.length > 0) {
      acc[category] = { ...categories[category], items: filteredItems };
    }
    return acc;
  }, {} as typeof categories);

  const handleSubmit = async () => {
    localStorage.setItem('ingredients', JSON.stringify(selectedIngredients));
    setIsLoading(true);
    try {
      await sendRecipeRequest();
      navigate('/recipe');
    } catch (error) {
      console.error('Failed to fetch recipes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-start min-h-screen">
      {/* search-input */}
      <form className="max-w-md mx-auto m-4">
        <div className="relative">
          <input
            type="search"
            id="default-search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
            // placeholder={t('searchIngredients')}
            aria-label={t('search')}
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {searchTerm ? (
              <ClearIcon onClick={handleClearSearch} />
            ) : (
              <SearchIcon />
            )}
          </div>
        </div>
      </form>

      {/* submit-button */}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="submit-button"
      >
        {isLoading ? <LoadingMessages /> : t('submit')}
      </button>

      {/* selected-ingredients */}
      {selectedIngredients.length > 0 && (
        <div className="selected-ingredients-container">
          <h2 className="selected-ingredients-title">
            🍎 {t('MyIngredients')}
          </h2>
          <div className="flex flex-wrap">
            {selectedIngredients.map((ingredient) => {
              const ingredientItem = Object.values(categories)
                .flatMap((category) => category.items)
                .find((item) => item.label === ingredient);
              return (
                <button
                  key={ingredient}
                  className="ingredient-button bg-orange-500 text-gray-950 border-orange-500"
                  onClick={() => handleIngredientToggle(ingredient)}
                >
                  {ingredientItem?.emoji} {t(ingredient)}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ingredient-selection */}
      {Object.keys(filteredCategories).map((category) => (
        <div className="category-container" key={category}>
          <h2 className="category-title">
            {filteredCategories[category].emoji} {t(category)}
          </h2>
          {filteredCategories[category].items.map((ingredient) => (
            <button
              key={ingredient.label}
              className={`ingredient-button ${
                selectedIngredients.includes(ingredient.label)
                  ? 'bg-orange-500 text-gray-950 border-orange-500'
                  : ''
              }`}
              onClick={() => handleIngredientToggle(ingredient.label)}
            >
              <span>{ingredient.emoji}</span>
              &nbsp;&nbsp;
              {t(ingredient.label)}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default IngredientSelection;

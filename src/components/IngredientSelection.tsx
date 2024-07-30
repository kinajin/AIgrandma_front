import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { categories } from '../constants/ingredients';
import { sendRecipeRequest } from '../api/geminiApi';

const IngredientSelection: React.FC = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleIngredientToggle = (ingredient: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
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
    <div>
      <form className="max-w-md mx-auto m-4">
        <label
          htmlFor="default-search"
          className="m-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          {t('search')}
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="block w-full p-4 ps-10 text-sm  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={t('🔍')}
            required
          />
        </div>
      </form>
      {Object.keys(filteredCategories).map((category) => (
        <div
          className="m-12 bg-gradient-to-b from-black to-white/5 rounded-xl outline  outline-white/10 outline-0.5 p-12"
          key={category}
        >
          <h2 className="mb-8 text-2xl font-extrabold leading-none text-white">
            {filteredCategories[category].emoji} {t(category)}
          </h2>
          {filteredCategories[category].items.map((ingredient) => (
            <button
              key={ingredient.label}
              className={`ingredient-button py-1.5 px-3.5 me-2 mb-2 text-sm font-medium text-gray-400 focus:outline-none bg-gray-900 rounded-full border border-gray-800 hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-4 focus:ring-gray-100  ${
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

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="submit-button py-1.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-500 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        {isLoading ? t('loading') : t('submit')}
      </button>
    </div>
  );
};

export default IngredientSelection;

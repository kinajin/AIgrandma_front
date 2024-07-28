import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { categories } from '../constants/ingredients';
import { sendRecipeRequest } from '../api/geminiApi';

const IngredientSelection: React.FC = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태 추가
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
    setIsLoading(true); // 로딩 시작
    try {
      await sendRecipeRequest(); // API 호출
      navigate('/recipe');
    } catch (error) {
      // 에러 처리
      console.error('Failed to fetch recipes:', error);
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder={t('searchPlaceholder')}
        className="search-input"
      />
      {Object.keys(filteredCategories).map((category) => (
        <div key={category}>
          <h2>
            {filteredCategories[category].emoji} {t(category)}
          </h2>
          {filteredCategories[category].items.map((ingredient) => (
            <button
              key={ingredient.label}
              className={`ingredient-button py-1.5 px-3.5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${
                selectedIngredients.includes(ingredient.label)
                  ? 'bg-orange-500 text-white border-orange-500'
                  : ''
              }`}
              onClick={() => handleIngredientToggle(ingredient.label)}
            >
              <span
                className={`${
                  selectedIngredients.includes(ingredient.label)
                    ? 'text-orange-500'
                    : ''
                }`}
              >
                {ingredient.emoji}
              </span>
              {t(ingredient.label)}
            </button>
          ))}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="submit-button py-1.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        {isLoading ? t('loading') : t('submit')}
      </button>
    </div>
  );
};

export default IngredientSelection;

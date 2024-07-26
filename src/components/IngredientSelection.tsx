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
              className={`ingredient-button ${
                selectedIngredients.includes(ingredient.label) ? 'selected' : ''
              }`}
              onClick={() => handleIngredientToggle(ingredient.label)}
            >
              {ingredient.emoji} {t(ingredient.label)}
            </button>
          ))}
        </div>
      ))}
      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? t('loading') : t('submit')}
      </button>
    </div>
  );
};

export default IngredientSelection;

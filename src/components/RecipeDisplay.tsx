// src/components/RecipeDisplay.tsx
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/tailwind.css';

interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string[];
}

interface RecipeData {
  grandmaTalk: string;
  recipes: Recipe[];
}

const RecipeDisplay: React.FC = () => {
  const { t } = useTranslation();
  const [recipeData, setRecipeData] = useState<RecipeData | null>(null);

  useEffect(() => {
    const storedRecipeData = localStorage.getItem('recipeData');
    if (storedRecipeData) {
      try {
        const parsedData = JSON.parse(storedRecipeData);
        setRecipeData(parsedData);
      } catch (error) {
        console.error('Error parsing JSON data:', error);
        setRecipeData({
          grandmaTalk: 'Error loading recipe data',
          recipes: [],
        });
      }
    }
  }, []);

  if (!recipeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipePage-container">
      <h2 className="recipePage-title">{recipeData.grandmaTalk}</h2>
      {recipeData.recipes.map((recipe, index) => (
        <div key={index} className="recipe-container">
          <div className="recipe">
            <h3 className="recipe-title">{recipe.title}</h3>
            <h4 className="ingredients-title">{t('Ingredients')}:</h4>
            <ul>
              {recipe.ingredients.map((ingredient, idx) => (
                <li className="ingredients" key={idx}>
                  {ingredient}
                </li>
              ))}
            </ul>
            <h4 className="instruction-title">{t('Instructions')}:</h4>
            <ol>
              {recipe.instructions.map((line, idx) => (
                <li
                  key={idx}
                  className={`instructions ${
                    idx === recipe.instructions.length - 1 ? 'grandma_tip' : ''
                  }`}
                >
                  {line}
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeDisplay;

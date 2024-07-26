import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
    <div className="recipePage">
      <h2>{recipeData.grandmaTalk}</h2>
      {recipeData.recipes.map((recipe, index) => (
        <div key={index} className="recipe">
          <h3>{recipe.title}</h3>
          <h4>{t('Ingredients')}:</h4>
          <ul>
            {recipe.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
          <h4>{t('Instructions')}:</h4>
          <ol>
            {recipe.instructions.map((line, idx) => (
              <li
                key={idx}
                className={
                  idx === recipe.instructions.length - 1 ? 'grandma_tip' : ''
                }
              >
                {line}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default RecipeDisplay;

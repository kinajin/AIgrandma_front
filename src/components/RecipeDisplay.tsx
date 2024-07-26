import React, { useEffect, useState } from 'react';

interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string;
}

interface RecipeData {
  grandmaTalk: string;
  recipes: Recipe[];
}

const RecipeDisplay: React.FC = () => {
  const [recipeData, setRecipeData] = useState<RecipeData | null>(null);

  useEffect(() => {
    // 로컬 스토리지 또는 API로부터 JSON 데이터를 가져오는 예제
    const storedRecipeData = localStorage.getItem('recipeData');
    if (storedRecipeData) {
      setRecipeData(JSON.parse(storedRecipeData));
    }
  }, []);

  if (!recipeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{recipeData.grandmaTalk}</h2>
      {recipeData.recipes.map((recipe, index) => (
        <div key={index} className="recipe">
          <h3>{recipe.title}</h3>
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
          <h4>Instructions:</h4>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeDisplay;

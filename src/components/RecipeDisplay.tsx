import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/tailwind.css';
import YouTubeVideoList from './YoutubeVideoList';
import { fetchYoutubeVideos } from '../api/youtubeApi';
import { YouTubeVideo } from '../types/youtube';

interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string[];
}

interface RecipeData {
  grandmaTalk: string[];
  recipes: Recipe[];
}

const RecipeDisplay: React.FC = () => {
  const { t } = useTranslation();
  const [recipeData, setRecipeData] = useState<RecipeData | null>(null);
  const [youtubeVideos, setYoutubeVideos] = useState<{
    [key: string]: YouTubeVideo[];
  }>({});

  useEffect(() => {
    const storedRecipeData = localStorage.getItem('recipeData');
    if (storedRecipeData) {
      try {
        const parsedData = JSON.parse(storedRecipeData) as RecipeData;
        setRecipeData(parsedData);

        parsedData.recipes.forEach(async (recipe: Recipe) => {
          try {
            const videos = await fetchYoutubeVideos(recipe.title);
            setYoutubeVideos((prev) => ({ ...prev, [recipe.title]: videos }));
          } catch (error) {
            console.error(
              `Error fetching YouTube videos for ${recipe.title}:`,
              error
            );
          }
        });
      } catch (error) {
        console.error('Error parsing JSON data:', error);
        setRecipeData({
          grandmaTalk: ['Error loading recipe data'],
          recipes: [],
        });
      }
    }
  }, []);

  if (!recipeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {recipeData.recipes.map((recipe, index) => (
        <div key={index} className="recipe-container">
          <div>
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
            <YouTubeVideoList videos={youtubeVideos[recipe.title] || []} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeDisplay;

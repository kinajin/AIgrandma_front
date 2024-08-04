import React from 'react';
import { useTranslation } from 'react-i18next';
import RecipeDisplay from '../components/RecipeDisplay';
import NavigationButtons from '../components/NavigationButtons';

const RecipePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <NavigationButtons />
      <h1 className="title">🧑‍🍳 {t('RecipePageTitle')}</h1>
      <h2 className="subtitle">{t('RecipePageSubtitle')}</h2>
      <RecipeDisplay />
    </div>
  );
};

export default RecipePage;

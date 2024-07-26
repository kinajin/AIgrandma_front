import React from 'react';
import { useTranslation } from 'react-i18next';
import RecipeDisplay from '../components/RecipeDisplay';

const RecipePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('RecipePageTitle')}</h1>
      <RecipeDisplay />
    </div>
  );
};

export default RecipePage;

import React from 'react';

import RecipeDisplay from '../components/RecipeDisplay';
import NavigationButtons from '../components/NavigationButtons';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const RecipePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <NavigationButtons />

      <h1 className="title">🧑‍🍳 {t('RecipePageTitle')}</h1>
      <h2 className="subtitle">{t('RecipePageSubtitle')}</h2>

      <RecipeDisplay />
      <Footer />
    </div>
  );
};

export default RecipePage;

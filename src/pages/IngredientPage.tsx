import React from 'react';
import IngredientSelection from '../components/IngredientSelection';
import NavigationButtons from '../components/NavigationButtons';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import '../styles/tailwind.css';

const IngredientPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <NavigationButtons />

      <h1 className="title">🦐 {t('ingredientPageTitle')}</h1>
      <h2 className="subtitle">{t('ingredientPageSubtitle')}</h2>

      <IngredientSelection />

      <Footer />
    </div>
  );
};

export default IngredientPage;

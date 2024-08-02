import React from 'react';
import { useTranslation } from 'react-i18next';
import IngredientSelection from '../components/IngredientSelection';
import NavigationButtons from '../components/NavigationButtons';
import '../styles/tailwind.css';

const IngredientPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      {/* NavigationButtons */}
      <NavigationButtons />

      {/* title */}
      <h1 className="title">🦐 {t('ingredientPageTitle')}</h1>

      {/* IngredientSelection */}
      <IngredientSelection />
    </div>
  );
};

export default IngredientPage;

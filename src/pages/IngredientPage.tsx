import React from 'react';
import { useTranslation } from 'react-i18next';
import IngredientSelection from '../components/IngredientSelection';
import NavigationButtons from '../components/NavigationButtons';

const IngredientPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <NavigationButtons />
      <h1>🦐 {t('ingredientPageTitle')}</h1>
      <IngredientSelection />
    </div>
  );
};

export default IngredientPage;

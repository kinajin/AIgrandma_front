import React from 'react';
import { useTranslation } from 'react-i18next';
import IngredientSelection from '../components/IngredientSelection';
import NavigationButtons from '../components/NavigationButtons';

const IngredientPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
      <NavigationButtons />
      <h1 className="m-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
        🦐 {t('ingredientPageTitle')}
      </h1>
      <IngredientSelection />
    </div>
  );
};

export default IngredientPage;

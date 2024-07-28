import React from 'react';
import { useTranslation } from 'react-i18next';
import CuisineSelection from '../components/CuisineSelection';
import NavigationButtons from '../components/NavigationButtons';

const CuisinePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <NavigationButtons />
      <h1>🥘 {t('cuisinePageTitle')}</h1>
      <CuisineSelection />
    </div>
  );
};

export default CuisinePage;

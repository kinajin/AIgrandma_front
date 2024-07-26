import React from 'react';
import { useTranslation } from 'react-i18next';
import CuisineSelection from '../components/CuisineSelection';

const CuisinePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>🥘 {t('cuisinePageTitle')}</h1>
      <CuisineSelection />
    </div>
  );
};

export default CuisinePage;

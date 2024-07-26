import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelection from '../components/LanguageSelection';

const LanguagePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>💬 {t('languagePageTitle')}</h1>
      <LanguageSelection />
    </div>
  );
};

export default LanguagePage;

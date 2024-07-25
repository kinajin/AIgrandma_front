import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { languages } from '../constants/languages';

const LanguageSelection: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleLanguageSelect = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
    navigate('/cuisine');
  };

  return (
    <div>
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => handleLanguageSelect(language.code)}
        >
          {language.emoji} {language.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelection;

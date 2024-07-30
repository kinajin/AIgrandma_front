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
    <div className="flex flex-wrap justify-center gap-4">
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => handleLanguageSelect(language.code)}
          className="py-2.5 px-5  text-sm font-medium text-black focus:outline-none bg-white rounded-lg  hover:bg-gray-300 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          {language.emoji} {language.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelection;

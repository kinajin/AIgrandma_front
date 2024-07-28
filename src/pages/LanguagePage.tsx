import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelection from '../components/LanguageSelection';
import aiGrandmaVideo from '../assets/AIgrandma.mp4'; // 동영상 파일 경로

const LanguagePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <video width="500" loop autoPlay>
        <source src={aiGrandmaVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential'>
        💬 {t('languagePageTitle')}
      </h1>
      <LanguageSelection />
    </div>
  );
};

export default LanguagePage;

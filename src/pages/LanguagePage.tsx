import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelection from '../components/LanguageSelection';
import aiGrandmaVideo from '../assets/AIgrandma.mp4'; // 동영상 파일 경로
import { motion } from 'framer-motion';

const LanguagePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
      <motion.video
        width="500"
        loop
        autoPlay
        muted
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
      >
        <source src={aiGrandmaVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      <h1 className="m-16 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
        💬 {t('languagePageTitle')}
      </h1>

      <LanguageSelection />
    </div>
  );
};

export default LanguagePage;

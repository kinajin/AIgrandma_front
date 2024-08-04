// LanguagePage.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelection from '../components/LanguageSelection';
import aiGrandmaVideo from '../assets/AIgrandma.mp4';
import { motion } from 'framer-motion';
import { videoProps } from '../utils/videoProps';
import '../styles/tailwind.css';

const LanguagePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      {/* NavigationButtons */}
      <motion.video {...videoProps} className="responsive-video">
        <source src={aiGrandmaVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* title */}
      <h1 className="title">👵{t('languagePageTitle')}</h1>

      {/* LanguageSelection */}
      <LanguageSelection />
    </div>
  );
};

export default LanguagePage;

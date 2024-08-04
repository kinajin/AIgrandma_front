import React from 'react';
import CuisineSelection from '../components/CuisineSelection';
import NavigationButtons from '../components/NavigationButtons';
import foodVideo from '../assets/food.mp4';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { videoProps } from '../utils/videoProps';
import '../styles/tailwind.css';

const CuisinePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <NavigationButtons />

      <motion.video {...videoProps} className="responsive-video">
        <source src={foodVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      <h1 className="title">🥘 {t('cuisinePageTitle')}</h1>
      <h2 className="subtitle">{t('cuisinePageSubtitle')}</h2>

      <CuisineSelection />

      <Footer />
    </div>
  );
};

export default CuisinePage;

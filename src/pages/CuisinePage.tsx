import React from 'react';
import { useTranslation } from 'react-i18next';
import CuisineSelection from '../components/CuisineSelection';
import NavigationButtons from '../components/NavigationButtons';
import { motion } from 'framer-motion';
import foodVideo from '../assets/food.mp4';
import '../styles/tailwind.css';
import { videoProps } from '../utils/videoProps';

const CuisinePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      {/* NavigationButtons */}
      <NavigationButtons />
      {/* video */}
      <motion.video {...videoProps} className="responsive-video">
        <source src={foodVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* title */}
      <h1 className="title">🥘 {t('cuisinePageTitle')}</h1>

      {/* CuisineSelection */}
      <CuisineSelection />
    </div>
  );
};

export default CuisinePage;

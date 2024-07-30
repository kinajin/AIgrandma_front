import React from 'react';
import { useTranslation } from 'react-i18next';
import CuisineSelection from '../components/CuisineSelection';
import NavigationButtons from '../components/NavigationButtons';
import { motion } from 'framer-motion';
import foodVideo from '../assets/food.mp4';

const CuisinePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
      <NavigationButtons />
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
        <source src={foodVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
      <h1 className="m-16 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
        🥘 {t('cuisinePageTitle')}
      </h1>
      <CuisineSelection />
    </div>
  );
};

export default CuisinePage;

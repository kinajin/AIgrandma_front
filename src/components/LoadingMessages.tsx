import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LoadingMessages: React.FC = () => {
  const { t } = useTranslation();
  const messages = [
    t('loadingMessage_1'),
    t('loadingMessage_2'),
    t('loadingMessage_3'),
    t('loadingMessage_4'),
    t('loadingMessage_5'),
  ];

  const [messageIndex, setMessageIndex] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // 3초마다 메시지 변경

    const dotsInterval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 5 ? prevDots + '.' : ''));
    }, 500); // 0.5초마다 점 추가

    return () => {
      clearInterval(messageInterval);
      clearInterval(dotsInterval);
    };
  }, [messages.length]);

  return (
    <div className="loading-message">
      {messages[messageIndex]}
      {dots}
    </div>
  );
};

export default LoadingMessages;

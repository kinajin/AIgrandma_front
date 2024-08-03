// src/components/LoadingMessages.tsx
import React, { useEffect, useState } from 'react';

const messages = ['할머니가 만들어줄게', '좀만 기달려', '이제 곧 나온다'];

const LoadingMessages: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // 3초마다 메시지 변경

    const dotsInterval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''));
    }, 500); // 0.5초마다 점 추가

    return () => {
      clearInterval(messageInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div className="loading-message">
      {messages[messageIndex]}
      {dots}
    </div>
  );
};

export default LoadingMessages;

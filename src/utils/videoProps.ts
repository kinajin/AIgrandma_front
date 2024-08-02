// src/utils/videoProps.ts
import { MotionProps } from 'framer-motion';
import { VideoHTMLAttributes } from 'react';

// Combined Props 타입 정의
type CombinedVideoProps = VideoHTMLAttributes<HTMLVideoElement> & MotionProps;

// Combined Props 정의
export const videoProps: CombinedVideoProps = {
  width: 400,
  loop: true,
  autoPlay: true,
  muted: true,
  playsInline: true, // 추가된 부분
  animate: {
    scale: [1, 1.2, 1.2, 1, 1],
    rotate: [0, 0],
    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
  },
};

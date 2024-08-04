import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { config } from 'dotenv';
import { createHtmlPlugin } from 'vite-plugin-html';

// 환경 변수 로드
config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: '👵 My AI Grandma',
          description:
            'Discover the wisdom of AI Grandma with delicious recipes and more.',
          keywords: 'recipes, cooking, cuisine, ingredients, food, AI, grandma',
          author: 'Kina',
          ogTitle: '👵 My AI Grandma',
          ogDescription:
            'Discover the wisdom of AI Grandma with delicious recipes and more.',
          ogImage: '/thumbnail.jpg',
          ogUrl: 'https://myaigrandma.net',
          ogType: 'website',
        },
      },
    }),
  ],
  define: {
    'process.env': process.env,
  },
});

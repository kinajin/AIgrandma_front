const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

if (!API_KEY) {
  console.error(
    'YouTube API key is not set. Please check your environment variables.'
  );
}

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

export const fetchYoutubeVideos = async (
  query: string,
  maxResults: number = 5
) => {
  if (!API_KEY) {
    throw new Error('YouTube API key is not set');
  }

  // 이모티콘 및 특수 문자 제거, 공백 정리
  const cleanQuery = query
    .replace(
      /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}]/gu,
      ''
    )
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .trim();

  console.log(cleanQuery);
  console.log('cleanQuery');

  // "recipe" 키워드를 여러 언어로 추가
  //   const recipeKeywords = [
  //     'recipe',
  //     '레시피',
  //     '食谱',
  //     'レシピ',
  //     'Rezept',
  //     'recette',
  //   ];
  //   const optimizedQuery = `${cleanQuery} ${recipeKeywords.join(' OR ')}`;
  const optimizedQuery = `${cleanQuery}`;

  const response = await fetch(
    `${BASE_URL}?part=snippet&q=${encodeURIComponent(
      optimizedQuery
    )}&type=video&maxResults=${maxResults}&key=${API_KEY}`
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`YouTube API request failed: ${errorText}`);
  }

  const data = await response.json();
  return data.items;
};

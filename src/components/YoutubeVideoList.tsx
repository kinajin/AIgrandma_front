import React from 'react';
import { YouTubeVideo } from '../types/youtube';
import '../styles/tailwind.css';

interface YouTubeVideoListProps {
  videos: YouTubeVideo[];
}

const YouTubeVideoList: React.FC<YouTubeVideoListProps> = ({ videos }) => {
  return (
    <div className="mt-4">
      <h4 className="youtube-list-title">Related YouTube Videos:</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {videos.map((video) => (
          <div key={video.id.videoId} className="youtube-video-container">
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={video.snippet.thumbnails.medium.url} // 'high' 품질의 썸네일 사용
                alt={video.snippet.title}
                className="w-full h-auto object-cover" // object-cover 추가
                style={{ aspectRatio: '16/9' }} // 16:9 비율 유지
              />
              <div className="p-2">
                <p className="youtube-title">{video.snippet.title}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideoList;

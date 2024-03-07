import React from 'react';

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="youtube-embed-container mx-auto max-w-4xl">
      <iframe
        width="496"
        height="256"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
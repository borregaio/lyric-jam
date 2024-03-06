import React from 'react';

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="youtube-embed-container mx-auto max-w-4xl">
      <iframe
        className="w-full"
        style={{ height: '500px' }}
        src={`https://www.youtube.com/embed/jCOX8dT9q8M?si=FEdGbtf9x7KKWoU-`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
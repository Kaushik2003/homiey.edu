import React from "react";

const YouTubeEmbed = ({ url }) => {
  // Extract video ID from various YouTube URL formats
  const extractVideoId = (url) => {
    if (!url) return null;

    const regExp = /^.*(youtu.be\/|v\/|u\/\w+\/|shorts\/|watch\?v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = extractVideoId(url);

  if (!videoId) {
    return (
      <div className="p-2 text-red-500">Please provide a valid YouTube URL</div>
    );
  }

  return (
    <div className="w-full">
      <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
        <iframe
          width="810"
          height="450"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

// Example usage

export default YouTubeEmbed;

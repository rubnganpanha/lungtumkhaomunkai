// components/YouTubeEmbed.tsx
"use client";

import React from "react";

interface YouTubeEmbedProps {
  videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  const videoUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;

  return (
    <section className="relative top-[340px] lg:top-[250px] z-10 h-[650px] pt-[20px] border-image">
      <div className="container mx-auto flex justify-center items-center">
        <iframe
          width="1000"
          height="515"
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default YouTubeEmbed;

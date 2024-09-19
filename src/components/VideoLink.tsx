// components/VideoLink.tsx
import React from "react";

interface VideoLinkProps {
  videoId: string;
}

const VideoLink: React.FC<VideoLinkProps> = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <section className="relative top-[340px] lg:top-[250px] z-10 h-[650px] pt-[20px] border-image">
      <div className="container mx-auto flex justify-center items-center">
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Watch Video
        </a>
      </div>
    </section>
  );
};

export default VideoLink;

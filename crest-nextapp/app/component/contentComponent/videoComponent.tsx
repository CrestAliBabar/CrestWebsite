import React from "react";

type VideoProps = {
  videoContent: any;
};

const VideoComponent: React.FC<VideoProps> = ({ videoContent }) => {
  const videoId = videoContent.url.split("watch?v=")[1].split("&")[0];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div
      key={videoContent._key}
      className="aspect-w-16 aspect-h-9 mb-6 ml-40 mr-40"
    >
      <iframe
        width="660"
        height="415"
        loading="lazy"
        src={embedUrl}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
      <p>{videoContent.text}</p>
    </div>
  );
};

export default VideoComponent;

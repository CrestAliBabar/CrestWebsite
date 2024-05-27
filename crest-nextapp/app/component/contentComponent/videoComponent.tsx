import React from 'react';

type VideoProps = {
  videoContent: any;
};

const VideoComponent: React.FC<VideoProps> = ({ videoContent }) => {
  const videoId = videoContent.url.split('watch?v=')[1].split('&')[0];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className='flex flex-col items-center w-full mb-6 px-20 sm:px-9 md:px-16 lg:px-32 xl:px-64 2xl:px-96'>
      <div key={videoContent._key} className='relative w-full pb-[56.25%] mb-6'>
        <iframe
          className='absolute top-0 left-0 w-full h-full'
          loading='lazy'
          src={embedUrl}
          title='YouTube video player'
          allowFullScreen
        ></iframe>
        <p className='text-center'>{videoContent.text}</p>
      </div>
    </div>
  );
};

export default VideoComponent;

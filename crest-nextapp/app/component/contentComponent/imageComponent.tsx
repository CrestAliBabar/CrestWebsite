import React from "react";

import { Image } from "next-sanity/image";

type ImageProps = {
  imageContent: any;
};

const ImageComponent: React.FC<ImageProps> = ({ imageContent }) => {
  return (
    <div className="flex justify-center">
      <Image
        src={imageContent.asset.url}
        alt=""
        className="max-w-3/4 w-full h-auto rounded-lg ml-40 mr-40"
      />
    </div>
  );
};

export default ImageComponent;

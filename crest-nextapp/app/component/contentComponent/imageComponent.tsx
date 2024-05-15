import React from "react";

import { Image } from "next-sanity/image";
import { urlFor } from "@/sanity/sanity-utils";

type ImageProps = {
  imageContent: any;
};

const ImageComponent: React.FC<ImageProps> = ({ imageContent }) => {
  return (
    <div className="flex justify-center my-6 sm:mx-10 md:mx-20 lg:mx-40 2xl:mx-80">
      <Image
        src={urlFor(imageContent.asset).url()}
        alt=""
        width={2000}
        height={1200}
        className="w-4/5 h-auto"
      />
    </div>
  );
};

export default ImageComponent;

import { TrainingPageType } from "@/types/TrainingPageType";
import { Image } from "next-sanity/image";

type TrainingPagesComponentTypeProps = {
  pageContent: TrainingPageType[];
};

const TrainingPagesComponent: React.FC<TrainingPagesComponentTypeProps> = ({
  pageContent,
}) => {
  // map through the pageContent array and render the appropriate component based on the _type property
  return (
    <div className="container mx-auto mt-20 mb-10">
      {pageContent[0].pageBuilder.map((content, index) => {
        switch (content._type) {
          case "pageTitle":
            return (
              <h1 key={index} className="text-3xl font-bold mb-6">
                {content.text}
              </h1>
            );
          case "pageSubtitle":
            return (
              <h2 key={index} className="text-xl font-bold mb-6">
                {content.text}
              </h2>
            );
          case "pageHeading":
            return (
              <h3 key={index} className="text-l font-bold mb-6">
                {content.text}
              </h3>
            );
          case "paragraph":
            return (
              <p key={index} className="text-l mb-6">
                {content.text}
              </p>
            );
          case "image":
            return (
              <Image
                key={index}
                src={content.asset.url}
                width={2000}
                height={1000}
                alt=""
                className="w-3/4 h-auto"
              />
            );
          case "bulletPoint":
            if (!content.bulletPoint || content.bulletPoint.length == 0)
              return <></>;
            return (
              <ul className="text-l mb-6 list-disc pl-8">
                {content.bulletPoint.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default TrainingPagesComponent;

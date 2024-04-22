import { servicePageType } from "@/types/servicePageType";
import { Image } from "next-sanity/image";

type servicePagesComponentTypeProps = {
  pageContent: servicePageType[];
};

const ServicePagesComponent: React.FC<servicePagesComponentTypeProps> = ({
  pageContent,
}) => {
  // Check if pageContent exists and has at least one item
  if (!pageContent || pageContent.length === 0) {
    return <div>Loading...</div>;
  }
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
          case "paragraph":
            return (
              <p key={index} className="text-l mb-6">
                {content.text}
              </p>
            );
        }
      })}
    </div>
  );
};

export default ServicePagesComponent;

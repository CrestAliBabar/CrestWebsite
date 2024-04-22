import { servicePageType } from "@/types/servicePageType";

type servicePagesComponentTypeProps = {
  pageContent: servicePageType[];
};

const ServicePagesComponent: React.FC<servicePagesComponentTypeProps> = ({
  pageContent,
}) => {
  // Check if pageContent exists and has at least one item
  if (!pageContent) {
    return <div>Loading...</div>;
  }
  // map through the pageContent array and render the appropriate component based on the _type property
  return (
    <div className="container mx-auto pl-10 md:pl-48 p-6">
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
          case "video":
            const videoId = content.url.split("watch?v=")[1].split("&")[0];
            const embedUrl = `https://www.youtube.com/embed/${videoId}`;
            return (
              <div key={content._key} className="video-container mb-6">
                <iframe
                  width="660"
                  height="415"
                  loading="lazy"
                  src={embedUrl}
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
                <p>{content.text}</p>
              </div>
            );
        }
      })}
    </div>
  );
};

export default ServicePagesComponent;

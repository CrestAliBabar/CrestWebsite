import { PageContentType } from "@/types/PageContentType";
import { Image } from "next-sanity/image";

type PageContentComponentTypeProps = {
  pageContent: PageContentType[];
};

const PageContentComponent: React.FC<PageContentComponentTypeProps> = ({
  pageContent,
}) => {
  // map through the pageContent array and render the appropriate component based on the _type property
  return (
    <div className="flex items-center justify-center min-h-screen ml-40 mr-40 ">
      <div className="font-opensans container mx-auto px-6 py-12 bg-white rounded-lg">
        {pageContent[0].pages[0].pageBuilder.map((content, index) => {
          switch (content._type) {
            case "pageTitle":
              return (
                <h1 key={index} className="text-3xl font-bold mb-6">
                  {content.text}
                </h1>
              );
            case "pageSubtitle":
              return (
                <h2
                  key={index}
                  className="font-opensans text-[1.5rem] font-bold leading-tight uppercase"
                >
                  {content.text}
                </h2>
              );
            case "pageHeading":
              return (
                <h3 key={index} className="text-xl font-bold mb-6">
                  {content.text}
                </h3>
              );
            case "paragraph":
              return (
                <p
                  key={index}
                  className="font-opensans text-lg font-normal my-4 mb-16"
                  style={{ color: "#242949" }}
                >
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
                  className="w-full h-auto rounded-lg my-4"
                />
              );
            case "bulletPoint":
              if (!content.bulletPoint || content.bulletPoint.length == 0)
                return <></>;
              return (
                <ul className="text-base mb-4 list-disc pl-8">
                  {content.bulletPoint.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              );
            case "video":
              const videoId = content.url.split("watch?v=")[1].split("&")[0];
              const embedUrl = `https://www.youtube.com/embed/${videoId}`;
              return (
                <div key={content._key} className="aspect-w-16 aspect-h-9 mb-6">
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
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default PageContentComponent;

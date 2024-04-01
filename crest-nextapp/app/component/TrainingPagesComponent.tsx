import PastSeminarComponent from "./pastSeminar";
import SeminarContentComponent from "./seminarContent";
import SeminarLeadersComponent from "./seminarLeader";
import SummaryComponent from "./summary";
import TitleComponent from "./titleComponent";
import GetUpdatesComponent from "./update";

type SeminarInfoType = {
  title: string;
  tagline: string;
  taglineContent: string;
  summaryText: string;
  summaryImageSrc: string;
  lincense: string;
  targetAudience: string[];
  relatedSeminarsUrl: string;
};

type SeminarContentDataType = {
  sections: {
    title: string;
    items: string[];
  }[];
  downloadLinks: {
    language: string;
    url: string;
  }[];
  contactUrl: string;
};

type SeminarLeadersDataType = {
  name: string;
  imageSrc: string;
}[];

type SeminarEventType = {
  seminarEventUrl: string;
};

type TrainingPagesComponentTypeProps = {
  seminarInfo: SeminarInfoType;
  seminarContentData: SeminarContentDataType;
  seminarLeadersData: SeminarLeadersDataType;
  seminarEvent: SeminarEventType;
};

const TrainingPagesComponent: React.FC<TrainingPagesComponentTypeProps> = ({
  seminarInfo,
  seminarContentData,
  seminarLeadersData,
  seminarEvent,
}) => {
  return (
    <div>
      <div className="container mx-auto pl-10 md:pl-48">
        <TitleComponent
          title={seminarInfo.title}
          tagline={seminarInfo.tagline}
          taglineContent={seminarInfo.taglineContent}
        />
        <SummaryComponent
          summaryText={seminarInfo.summaryText}
          summaryImageSrc={seminarInfo.summaryImageSrc}
          lincense={seminarInfo.lincense}
          targetAudience={seminarInfo.targetAudience}
          relatedSeminarsUrl={seminarInfo.relatedSeminarsUrl}
        />
        <SeminarContentComponent
          sections={seminarContentData.sections}
          downloadLinks={seminarContentData.downloadLinks}
          contactUrl={seminarContentData.contactUrl}
        />
        <SeminarLeadersComponent leaders={seminarLeadersData} />
        <PastSeminarComponent pastSeminarUrl={seminarEvent.seminarEventUrl} />
        <GetUpdatesComponent />
      </div>
    </div>
  );
};

export default TrainingPagesComponent;

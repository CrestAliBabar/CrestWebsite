import React from "react";
import TitleComponent from "@/app/component/titleComponent";
import ReportSection from "@/app/component/reportSection";

type SeminarInfoType = {
  title: string;
  tagline: string;
  taglineContent: string;
};

type ReportVideoType = {
  videoUrl: string;
};

type ServicePagesComponentTypeProps = {
  seminarInfo: SeminarInfoType;
  ReportVideo: ReportVideoType;
};

const ServicePagesComponent: React.FC<ServicePagesComponentTypeProps> = ({
  seminarInfo,
  ReportVideo,
}) => {
  return (
    <div>
      <div className="container mx-auto pl-10 md:pl-48">
        <TitleComponent
          title={seminarInfo.title}
          tagline={seminarInfo.tagline}
          taglineContent={seminarInfo.taglineContent}
        />
        <ReportSection videoUrl={ReportVideo.videoUrl} />
      </div>
    </div>
  );
};

export default ServicePagesComponent;

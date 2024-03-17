import React from "react";
import Section from "@/app/component/section";
import DownloadLinks from "@/app/component/downloadLinks";

type DownloadLinkProps = {
  links: { language: string; url: string }[];
};

export type SectionProps = {
  title: string;
  items: string[];
};

type SeminarContentComponentProps = {
  sections: SectionProps[];
  downloadLinks: DownloadLinkProps["links"];
  //   additionalText: string;
  contactUrl: string;
};

const SeminarContentComponent: React.FC<SeminarContentComponentProps> = ({
  sections,
  downloadLinks,
  //   additionalText,
  contactUrl,
}) => (
  <div className="p-6">
    <h2 className="text-xl font-bold mb-6">Seminar Content</h2>
    <p className="mt-4 mb-6">
      <span className="mt-4">
        Below, please find an overview of the seminar content. You can also
        download a PDF one-page flyer (
        <DownloadLinks links={downloadLinks} />
        ). A more detailed explanation of the seminar content is available upon
        request.
      </span>
    </p>
    {sections.map((section) => (
      <Section key={section.title} {...section} />
    ))}
    <p>
      The spoken language of the seminar is English, unless everyone agrees to
      switch to German. If you are unsure, please{" "}
      <a href={contactUrl} className="text-blue-600 underline">
        contact us
      </a>{" "}
      about the language.
    </p>
  </div>
);
export default SeminarContentComponent;

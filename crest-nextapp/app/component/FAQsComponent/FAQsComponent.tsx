import React from "react";
import FAQsWithSupportingText from "./FAQsWithSupportingText";
import FAQsTwoColumnProps from "./FAQsTwoColumn";
import FAQsThreeColumnCentered from "./FAQsThreeColumnCentered";
import FAQsSideBySide from "./FAQsSideBySide";
type FAQsComponentProps = {
  faqsContent: any[];
};

const FAQsComponent: React.FC<FAQsComponentProps> = ({ faqsContent }) => {
  return (
    <>
      {faqsContent.map((content: any, index: number) => {
        switch (content._type) {
          case "FAQs_With_Supporting_Text":
            return (
              <FAQsWithSupportingText
                faqsWithSupportingTextContent={content}
                key={index}
              />
            );
          case "FAQs_Two_Column": 
            return (
              <FAQsTwoColumnProps faqsTwoColumnContent={content} key={index} />
            );
          case "FAQs_Three_Column_Centered": 
            return (
              <FAQsThreeColumnCentered
                faqsThreeColumnContent={content}
                key={index}
              />
            );
          case "FAQs_Side_By_Side": 
            return (
              <FAQsSideBySide faqsSideBySideContent={content} key={index} />
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default FAQsComponent;

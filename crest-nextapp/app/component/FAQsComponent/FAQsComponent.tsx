import React from "react";
import FAQsWithSupportingText from "./FAQsWithSupportingText";
import FAQsTwoColumnProps from "./FAQsTwoColumn";
import FAQsThreeColumnCentered from "./FAQsThreeColumnCentered";

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
          case "FAQs_Two_Column": // Another FAQ component type
            return (
              <FAQsTwoColumnProps
                faqsTwoColumnContent={content}
                key={index}
              />
            );
          case "FAQs_Three_Column_Centered": // Another FAQ component type
            return (
              <FAQsThreeColumnCentered
                faqsThreeColumnContent={content}
                key={index}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default FAQsComponent;

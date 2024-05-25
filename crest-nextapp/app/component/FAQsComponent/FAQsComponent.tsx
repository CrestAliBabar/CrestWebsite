import React from "react";
import FAQsWithSupportingText from "./FAQsWithSupportingText";


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
          case "FAQs_List": // Another FAQ component type
            return (
              // <FAQsList faqsListContent={content} key={index} />
              <div></div>
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default FAQsComponent;

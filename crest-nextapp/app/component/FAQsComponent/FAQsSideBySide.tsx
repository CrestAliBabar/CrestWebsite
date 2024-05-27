import React from "react";

type FAQsSideBySideProps = {
  faqsSideBySideContent: any;
};

const FAQsSideBySide: React.FC<FAQsSideBySideProps> = ({
  faqsSideBySideContent,
}) => {
  const backGroundColor = faqsSideBySideContent.backGroundColor
    ? faqsSideBySideContent.backGroundColor.value
    : "#ffffff"; // Default white background color

  const sectionTitleTextColor = faqsSideBySideContent.sectionTitleTextColor
    ? faqsSideBySideContent.sectionTitleTextColor.value
    : "#000000"; // Default black color

  return (
    <div style={{ backgroundColor: backGroundColor }}>
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2
          style={{ color: sectionTitleTextColor }}
          className="text-2xl font-bold leading-10 tracking-tight"
        >
          {faqsSideBySideContent.sectionTitle}
        </h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqsSideBySideContent.faqItems &&
          faqsSideBySideContent.faqItems.length > 0 ? (
            faqsSideBySideContent.faqItems.map((faq: any, index: number) => (
              <div key={index} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8" data-aos="fade-up" data-aos-delay={index * 100}>
                <dt
                  className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5"
                  style={{ color: faq.questionTextColor ? faq.questionTextColor.value : '#000000' }}
                >
                  {faq.question}
                </dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p
                    className="text-base leading-7 text-gray-600"
                    style={{ color: faq.answerTextColor ? faq.answerTextColor.value : '#636262' }}
                  >
                    {faq.answer}
                  </p>
                </dd>
              </div>
            ))
          ) : (
            <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                Sample Question?
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">
                  Sample answer to the frequently asked question.
                </p>
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
};

export default FAQsSideBySide;

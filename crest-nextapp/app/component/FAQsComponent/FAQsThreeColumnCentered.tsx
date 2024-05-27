import React from "react";

type FAQsThreeColumnCenteredProps = {
  faqsThreeColumnContent: any;
};

const FAQsThreeColumnCentered: React.FC<FAQsThreeColumnCenteredProps> = ({
  faqsThreeColumnContent,
}) => {
  const backGroundColor = faqsThreeColumnContent.backGroundColor
    ? faqsThreeColumnContent.backGroundColor.value
    : "#ffffff"; // Default white background color

  const sectionTitleTextColor = faqsThreeColumnContent.sectionTitleTextColor
    ? faqsThreeColumnContent.sectionTitleTextColor.value
    : "#000000"; // Default black color

  const supportingTextLinkColor = faqsThreeColumnContent.supportingTextLinkColor
    ? faqsThreeColumnContent.supportingTextLinkColor.value
    : "#4f46e5"; // Default indigo color

  const supportingTextColor = faqsThreeColumnContent.supportingTextColor
    ? faqsThreeColumnContent.supportingTextColor.value
    : "#636262";

  const linkText = faqsThreeColumnContent.LinkText;

  return (
    <div style={{ backgroundColor: backGroundColor }}>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            style={{ color: sectionTitleTextColor }}
            className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            {faqsThreeColumnContent.sectionTitle}
          </h2>
          <p
            className="mt-6 text-base leading-7 text-gray-600"
            style={{ color: supportingTextColor }}>
            {faqsThreeColumnContent.supportingText}
            <a
              href={faqsThreeColumnContent.supportingTextLink}
              style={{ color: supportingTextLinkColor }}
              className="font-semibold hover:text-indigo-500">
              {linkText}
            </a>
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {faqsThreeColumnContent.faqItems &&
            faqsThreeColumnContent.faqItems.length > 0 ? (
              faqsThreeColumnContent.faqItems.map((faq: any, index: number) => (
                <div key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}>
                  <dt
                    className="text-base font-semibold leading-7 text-gray-900"
                    style={{
                      color: faq.questionTextColor
                        ? faq.questionTextColor.value
                        : "#000000",
                    }}>
                    {faq.question}
                  </dt>
                  <dd
                    className="mt-2 text-base leading-7 text-gray-600"
                    style={{
                      color: faq.answerTextColor
                        ? faq.answerTextColor.value
                        : "#636262",
                    }}>
                    {faq.answer}
                  </dd>
                </div>
              ))
            ) : (
              <div>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Sample Question?
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Sample answer to the frequently asked question.
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQsThreeColumnCentered;

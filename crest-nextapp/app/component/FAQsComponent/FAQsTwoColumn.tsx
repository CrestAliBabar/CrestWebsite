import React from "react";

type FAQsTwoColumnProps = {
  faqsTwoColumnContent: any;
};

const FAQsTwoColumn: React.FC<FAQsTwoColumnProps> = ({
  faqsTwoColumnContent,
}) => {
  const backGroundColor = faqsTwoColumnContent.backGroundColor
    ? faqsTwoColumnContent.backGroundColor.value
    : "#1a202c"; // Default dark gray background color

  const sectionTitleTextColor = faqsTwoColumnContent.sectionTitleTextColor
    ? faqsTwoColumnContent.sectionTitleTextColor.value
    : "#ffffff"; // Default white color

  const supportingTextColor = faqsTwoColumnContent.supportingTextColor
    ? faqsTwoColumnContent.supportingTextColor.value
    : "#636262";

  const supportingTextLinkColor = faqsTwoColumnContent.supportingTextLinkColor
    ? faqsTwoColumnContent.supportingTextLinkColor.value
    : "#818cf8"; // Default indigo color

  const linkText = faqsTwoColumnContent.LinkText;

  return (
    <div style={{ backgroundColor: backGroundColor }}>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2
          style={{ color: sectionTitleTextColor }}
          className="text-2xl font-bold leading-10 tracking-tight">
          {faqsTwoColumnContent.sectionTitle}
        </h2>
        <p
          className="mt-6 max-w-2xl text-base leading-7 text-gray-300"
          style={{ color: supportingTextColor }}>
          {faqsTwoColumnContent.supportingText}
          <a
            href={faqsTwoColumnContent.supportingTextLink}
            style={{ color: supportingTextLinkColor }}
            className="font-semibold hover:text-indigo-300">
            {linkText}
          </a>
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqsTwoColumnContent.faqItems &&
            faqsTwoColumnContent.faqItems.length > 0 ? (
              faqsTwoColumnContent.faqItems.map((faq: any, index: number) => (
                <div key={index}>
                  <dt
                    className="text-base font-semibold leading-7"
                    style={{
                      color: faq.questionTextColor
                        ? faq.questionTextColor.value
                        : "#ffffff",
                    }}>
                    {faq.question}
                  </dt>
                  <dd
                    className="mt-2 text-base leading-7 text-gray-300"
                    style={{
                      color: faq.answerTextColor
                        ? faq.answerTextColor.value
                        : "#d1d5db",
                    }}>
                    {faq.answer}
                  </dd>
                </div>
              ))
            ) : (
              <div>
                <dt className="text-base font-semibold leading-7 text-white">
                  Sample Question?
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
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

export default FAQsTwoColumn;

// const faqs = [
//   {
//     id: 1,
//     question: "What's the best thing about Switzerland?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
//   // More questions...
// ]

// export default function FAQsTwoColumn() {
//   return (
//     <div className="bg-gray-900">
//       <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
//         <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Frequently asked questions</h2>
//         <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
//           Have a different question and can’t find the answer you’re looking for? Reach out to our support team by{' '}
//           <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
//             sending us an email
//           </a>{' '}
//           and we’ll get back to you as soon as we can.
//         </p>
//         <div className="mt-20">
//           <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
//             {faqs.map((faq) => (
//               <div key={faq.id}>
//                 <dt className="text-base font-semibold leading-7 text-white">{faq.question}</dt>
//                 <dd className="mt-2 text-base leading-7 text-gray-300">{faq.answer}</dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>
//     </div>
//   )
// }

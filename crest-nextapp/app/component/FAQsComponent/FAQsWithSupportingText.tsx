import React from "react";

type FAQsWithSupportingTextProps = {
  faqsWithSupportingTextContent: any;
};

const FAQsWithSupportingText: React.FC<FAQsWithSupportingTextProps> = ({
  faqsWithSupportingTextContent,
}) => {
  const backGroundColor = faqsWithSupportingTextContent.backGroundColor
    ? faqsWithSupportingTextContent.backGroundColor.value
    : "#ffffff";

  const sectionTitleTextColor =
    faqsWithSupportingTextContent.sectionTitleTextColor
      ? faqsWithSupportingTextContent.sectionTitleTextColor.value
      : "#000000";

  const supportingTextLinkColor =
    faqsWithSupportingTextContent.supportingTextLinkColor
      ? faqsWithSupportingTextContent.supportingTextLinkColor.value
      : "#4f46e5"; // Default indigo color from original component
  const linkText = faqsWithSupportingTextContent.LinkText;

  return (
    <div style={{ backgroundColor: backGroundColor }}>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2
              style={{ color: sectionTitleTextColor }}
              className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              {faqsWithSupportingTextContent.sectionTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              {faqsWithSupportingTextContent.supportingText}
              <a
                href={faqsWithSupportingTextContent.supportingTextLink}
                style={{ color: supportingTextLinkColor }}
                className="font-semibold hover:text-indigo-500">
                {linkText}
              </a>{" "}
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqsWithSupportingTextContent.faqItems &&
              faqsWithSupportingTextContent.faqItems.length > 0 ? (
                faqsWithSupportingTextContent.faqItems.map(
                  (faq: any, index: number) => (
                    <div key={index}>
                      <dt className="text-base font-semibold leading-7 text-gray-900"
                       style={{ color: faq.questionTextColor ? faq.questionTextColor.value : '#000000' }}>
                        {faq.question}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600"
                      style={{ color: faq.answerTextColor ? faq.answerTextColor.value : '#636262' }}>
                        {faq.answer}
                      </dd>
                    </div>
                  )
                )
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
    </div>
  );
};

export default FAQsWithSupportingText;

// const faqs = [
//   {
//     question: 'How do you make holy water?',
//     answer:
//       'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
//   },
//   {
//     question: 'How do you make holy water?',
//     answer:
//       'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
//   },
//   {
//     question: 'How do you make holy water?',
//     answer:
//       'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
//   },
//   {
//     question: 'How do you make holy water?',
//     answer:
//       'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
//   },
//   {
//     question: 'How do you make holy water?',
//     answer:
//       'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
//   },

//   // More questions...
// ]

// export default function FAQsWithSupportingText() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
//         <div className="lg:grid lg:grid-cols-12 lg:gap-8">
//           <div className="lg:col-span-5">
//             <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
//             <p className="mt-4 text-base leading-7 text-gray-600">
//               Can’t find the answer you’re looking for? Reach out to our{' '}
//               <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                 customer support
//               </a>{' '}
//               team.
//             </p>
//           </div>
//           <div className="mt-10 lg:col-span-7 lg:mt-0">
//             <dl className="space-y-10">
//               {faqs.map((faq) => (
//                 <div key={faq.question}>
//                   <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
//                   <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

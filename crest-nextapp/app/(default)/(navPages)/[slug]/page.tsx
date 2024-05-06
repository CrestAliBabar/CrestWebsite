// import React from "react";
// import { getNavPageInformation } from "@/sanity/sanity-utils";
// import commonNavPageComponent_refector from "@/app/component/commonNavPageComponent_refector";
// interface CardsProps {
//   params: {
//     slug: string;
//   };
// }


// export default async function Cards({ params: { slug } }: CardsProps) {
//   const pageData = await getNavPageInformation(slug);
//   //写groq，取当前的slug
//   console.log('pageData:', pageData);
//   // {console.log(pageData.map((page) => page.associatedCards))};
//   {console.log(pageData.map((page) => page.slug))};

//   return <>{slug}
//   <commonNavPageComponent_refector PageData = {pageData} />
//   </>;
// }

import React from "react";
import { getNavPageInformation } from "@/sanity/sanity-utils";
import CommonNavPageComponentRefactor from "@/app/component/commonNavPageComponentRefector"; // Updated import

interface CardsProps {
  params: {
    slug: string;
  };
}
export default async function Cards({ params: { slug } }: CardsProps) {
  const pageData = await getNavPageInformation(slug);
  console.log('pageData:', pageData);

  return (
    <>
    <div className="px-28">
      <CommonNavPageComponentRefactor PageData={pageData} />
      </div>
    </>
  );
}

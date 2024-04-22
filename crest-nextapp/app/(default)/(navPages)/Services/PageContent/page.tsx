// import ServicePagesComponent from "@/app/component/ServicePagesComponent";
// import { getServicePage } from "@/sanity/sanity-utils";

// export default async function PageContent() {
//   const pageData = await getServicePage();
//   console.log(pageData);
//   return (
//     <>
//       <ServicePagesComponent pageContent={pageData} />
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import ServicePagesComponent from "@/app/component/ServicePagesComponent";
import { getServicePage } from "@/sanity/sanity-utils";
import { servicePageType } from "@/types/servicePageType";

const PageContent = () => {
  // Initialize state to be null or an array of servicePageType
  const [pageData, setPageData] = useState<servicePageType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getServicePage();
        console.log(data); // Log the fetched data
        setPageData(data); // Update the state with the fetched data
      } catch (error) {
        console.error("Failed to load page data:", error);
        setPageData([]); // Consider setting to null or handling the error differently
      }
    };

    fetchData();
  }, []);

  if (pageData === null) {
    return <div>Loading...</div>;
  }

  // Pass the pageData directly assuming it's correctly formatted as servicePageType[]
  return <ServicePagesComponent pageContent={pageData} />;
};

export default PageContent;

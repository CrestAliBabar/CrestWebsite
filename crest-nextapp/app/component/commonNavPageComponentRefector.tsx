import React from "react";
import Link from "next/link";

interface Card {
  title: string;
  description: string;
  link: string;
  imgUrl?: string;
  altText: string;
}

interface Page {
  tabName: {
    slug: {
      current: string;
    };
  };
  heading: string;
  description: string;
  associatedCards: Card[];
}

interface CommonComponentTypeProps {
  PageData: Page[];
}

const CommonNavPageComponentRefactor: React.FC<CommonComponentTypeProps> = ({ PageData }) => {
  return (
    <>
      {PageData.map((page, pageIndex) => (
        <div key={pageIndex} className="container mx-auto mt-20 mb-10">
          <Link href={`/${page.tabName.slug.current}`}>
            <h1 className="text-3xl font-bold my-4 underline">
              {page.heading}
            </h1>
          </Link>
          <p className="text-xl">{page.description}</p>

          {page.associatedCards.map((card, cardIndex) => (
            <section key={cardIndex} className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-5 mb-10 md:flex-row flex-col items-center bg-gray-300">
                <div className="lg:max-w-lg md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                  <Link href={`${card.link}`}>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 underline">
                      {card.title}
                    </h1>
                  </Link>
                  <p className="mb-8 leading-relaxed">{card.description}</p>
                </div>
                <div className="lg:flex-grow md:w-1/2 w-5/6  bg-white p-2">
                  <div className=" w-full md:h-48 lg:h-80 ">
                    <Link href={`${card.link}`}>
                      <img
                        src={card.imgUrl ? card.imgUrl : 'fix later'}
                        alt={card.altText}
                        className=" w-full h-full object-fit"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      ))}
    </>
  );
};

export default CommonNavPageComponentRefactor;
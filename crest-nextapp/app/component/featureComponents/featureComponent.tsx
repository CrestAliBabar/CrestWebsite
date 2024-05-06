import React from "react";

const FeatureComponent = () => {
  return (
<section>
  {/* Container */}
  <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    {/* Heading Div */}
    <div className="mx-auto w-full max-w-3xl text-center">
      <h2 className="text-3xl font-semibold md:text-5xl">Make Every Step <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/63915f9749aaab0572c48dae_Rectangle%2018.svg')] bg-cover bg-center bg-no-repeat px-4 text-white">User - Centric</span></h2>
      <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
        <p className="text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</p>
      </div>
    </div>
    {/* Features Div */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:gap-12">
      {/* Feature Item */}
      <div className="relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(0,_0,_0)_9px_9px] lg:mb-4">
        <div className="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
          <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639157f1a197859a6cd7f265_image%203.png" alt="" className="relative z-10 inline-block h-8" />
          <div className="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div>
        </div>
        <p className="mb-4 text-xl font-semibold">Support</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.</p>
      </div>
    </div>
  </div>
</section>




  );
};

export default FeatureComponent;

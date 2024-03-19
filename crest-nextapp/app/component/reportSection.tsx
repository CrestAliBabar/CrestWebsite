import React from "react";
// import localVideo from "@/public/Ory.mp4";

type ReportSectionProps = {

  videoUrl?: string; // The video URL is optional and can be passed in later
};

const ReportSection: React.FC<ReportSectionProps> = ({ videoUrl }) => {
  return (
    <div className=" p-8">
      <div className="container mx-auto">
        <p className="text-xl font-bold mb-6">Example report</p>
        <p className="text-l mb-6">
          Our clients generally prefer to remain private, but sometimes we are
          asked to show the commissioned work and reassure an audience about its
          results. For our client{" "}
          <a href="https://www.ory.sh/" className="text-blue-600 underline">
            Ory, the zero-trust identity services company
          </a>{" "}
          , we presented our findings at the 2021 Ory developer conference.
        </p>
        <video className="w-full mx-auto h-96" controls title="Video Title">
          <source src={videoUrl} type="video/mp4" />
        </video>
        <p className="text-sm mt-6">
          This is also a{" "}
          <a
            href="https://www.youtube.com/watch?v=0DkVA3X0lhQ&ab_channel=OryNetwork"
            className="text-blue-600 underline"
          >
            Corresponding Youtube
          </a>{" "}
          video (only linked to for GDPR compliance reasons).
        </p>
        <p className="text-sm mt-6">
          Please{" "}
          <a href="/contact" className="text-blue-600 underline">
            contact us
          </a>{" "}
          if you would like to learn more.
        </p>
      </div>
    </div>
  );
};

export default ReportSection;

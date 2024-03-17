import React from "react";

type DownloadLinkProps = {
  links: { language: string; url: string }[];
};

const DownloadLinks: React.FC<DownloadLinkProps> = ({ links }) => (
  <span>
    {links.map((link, index, array) => (
      <span key={link.language}>
        <a href={link.url} className="text-blue-600 hover:underline">
          {link.language}
        </a>
        {index < array.length - 1 ? ", " : ""}
      </span>
    ))}
  </span>
);
export default DownloadLinks;

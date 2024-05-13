"use client";
import Script from "next/script";
import React from "react";

const ChatBoxComponent = () => {
  return (
    <>
      <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></Script>
      <Script
        src="https://mediafiles.botpress.cloud/285b8507-8ccd-4a2b-b351-b7ea9a9cc39a/webchat/config.js"
        defer
      ></Script>
    </>
  );
};

export default ChatBoxComponent;

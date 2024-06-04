"use client";
import Script from "next/script";
import React, { useEffect } from "react";

// Extend the Window interface to include botpressWebChat
declare global {
  interface Window {
    botpressWebChat: any;
    Calendly: any;
  }
}

const ChatBoxComponent = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.botpressWebChat && window.Calendly) {
        window.botpressWebChat.onEvent(
          function (event: { value: any; type: string }) {
            if (event.type === "TRIGGER") {
              if (event.value && event.value.action === "showCalendly")
                window.Calendly.showPopupWidget(
                  "https://calendly.com/crestalibabar?hide_gdpr_banner=1&background_color=dceef1&text_color=192b33&primary_color=325c6c"
                );
            }
          },
          ["TRIGGER"]
        );
        clearInterval(interval);
      }
    }, 100);
  }, []);

  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v1/inject.js"/>
      <Script
        src="https://mediafiles.botpress.cloud/285b8507-8ccd-4a2b-b351-b7ea9a9cc39a/webchat/config.js"

      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript" async
      />
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"></link>
    </>
  );
};

export default ChatBoxComponent;

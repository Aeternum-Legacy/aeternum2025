"use client";

import DidYouKnowMobile from "./mobile/DidYouKnowMobile";
import DidYouKnowDesktop from "./desktop/DidYouKnowDesktop";

export default function DidYouKnowSection() {
  return (
    <>
      <DidYouKnowMobile />
      <DidYouKnowDesktop />
    </>
  );
}

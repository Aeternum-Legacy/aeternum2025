"use client";

import FeatureSummaryMobile from "./mobile/FeatureSummaryMobile";
import FeatureSummaryDesktop from "./desktop/FeatureSummaryDesktop";

export default function FeatureSummarySection() {
  return (
    <>
      <FeatureSummaryMobile />
      <FeatureSummaryDesktop />
    </>
  );
}

import React from "react";
import useMetaTags from "../hooks/useMetaTags";

const MetaTagUpdater = () => {
  useMetaTags();
  return null; // This component doesn't render anything
};

export default MetaTagUpdater;

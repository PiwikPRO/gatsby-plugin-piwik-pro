import React from "react";
import { PageViews } from "@piwikpro/gatsby-plugin-piwik-pro";
import { WrapPageElementBrowserArgs } from "gatsby";
import { Layout } from "./src/components/Layout";

export const onRouteUpdate = () => {
  if (`requestAnimationFrame` in window) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() =>
        setTimeout(() => PageViews.trackPageView(), 0)
      );
    });
  } else {
    setTimeout(() => PageViews.trackPageView(), 32);
  }
};

// global layout provider
export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs) => {
  return <Layout {...props}>{element}</Layout>;
};

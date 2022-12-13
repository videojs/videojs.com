/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"

// Replaces gatsby head
export function onRenderBody({ setHtmlAttributes }) {
  setHtmlAttributes({ lang: "en" })
}

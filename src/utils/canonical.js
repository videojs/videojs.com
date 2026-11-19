// The canonical home of this site since Video.js 10 took over videojs.org.
const LEGACY_SITE_URL = 'https://legacy.videojs.org';

// Pages that have a newer home on videojs.org.
const CANONICAL_ELSEWHERE = {
  '/html5-video-support/': 'https://videojs.org/html5-video-support',
};

// Alternate themes of the home page.
const HOME_THEMES = ['/city/', '/fantasy/', '/forest/', '/sea/'];

// Netlify serves every page with a trailing slash and redirects the bare path to it.
const withTrailingSlash = pathname =>
  pathname.endsWith('/') ? pathname : `${pathname}/`;

const isNotFoundPage = pathname =>
  /^\/(404|dev-404-page)(\/|\.html$|$)/.test(pathname);

/** The absolute URL this site serves a page path at. */
const pageUrl = pathname =>
  `${LEGACY_SITE_URL}${encodeURI(decodeURI(withTrailingSlash(pathname)))}`;

/**
 * The absolute canonical URL for a page path, or null for pages that should
 * not declare one, such as the 404 page.
 */
const canonicalUrl = pathname => {
  if (isNotFoundPage(pathname)) return null;

  const path = withTrailingSlash(pathname);

  if (CANONICAL_ELSEWHERE[path]) return CANONICAL_ELSEWHERE[path];
  if (HOME_THEMES.includes(path)) return `${LEGACY_SITE_URL}/`;

  return pageUrl(path);
};

module.exports = { canonicalUrl, pageUrl };

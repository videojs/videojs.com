// The Video.js 8 API reference under /api is proxied from its own Netlify site (see netlify.toml), whose pages
// predate Video.js 10. Give each page the legacy banner, a canonical URL on this host, and a description that no
// longer calls 8.x the latest version.

// From 65em the current docs theme (the one that sets data-theme on <body>) fixes its sidebar and navbar to the top of
// the viewport, where they would cover a banner, so there the banner sits at the bottom of the content column instead.
const BANNER = `<style>
.vjs-legacy-banner{background:#000;color:#fff;font:14px/1.5 sans-serif;padding:0.75em 1em;text-align:center}
.vjs-legacy-banner a{color:#f49f4d;font-weight:bold;text-decoration:underline}
@media screen and (min-width:65em){
body[data-theme] .vjs-legacy-banner{bottom:0;left:25rem;position:fixed;right:0;z-index:20}
body[data-theme] .main-content{padding-bottom:3rem}
}
</style>
<div class="vjs-legacy-banner">
You're viewing the API reference for Video.js 8 and earlier.
<a href="https://videojs.org/">Video.js 10 is here</a>
&middot;
<a href="https://videojs.org/docs/framework/html/guides/migrate-from-video-js-8">Migrate from Video.js 8</a>
</div>`;

// The docs site serves every page with and without .html, so name the extensionless one canonical.
const canonicalUrl = (path: string) =>
  `https://legacy.videojs.org${
    path.endsWith('/index.html') ? path : path.replace(/\.html$/, '')
  }`;

export function addLegacyNotice(html: string, pathname: string): string {
  // Pages from the oldest docs already name their docs.videojs.com counterpart, which the docs site serves lowercased.
  const withCanonical = /<link[^>]*rel="canonical"/.test(html)
    ? html.replace(
        /(<link[^>]*rel="canonical"[^>]*href=")https?:\/\/docs\.videojs\.com\/([^"]*)"/,
        (_, start, path) =>
          `${start}${canonicalUrl(`/api/${path.toLowerCase()}`)}"`
      )
    : html.replace(
        '</head>',
        `<link rel="canonical" href="${canonicalUrl(pathname)}">\n</head>`
      );

  return withCanonical
    .replace(
      /Generated API documentation for the latest version of Video\.js \(([^)]+)\)\./,
      'API documentation for Video.js $1, the last release before Video.js 10.'
    )
    .replace(/<body([^>]*)>/, `<body$1>${BANNER}`);
}

export default async (
  request: Request,
  context: { next: () => Promise<Response> }
) => {
  const response = await context.next();
  if (
    response.status !== 200 ||
    !response.headers.get('content-type')?.includes('text/html')
  )
    return response;

  const headers = new Headers(response.headers);

  headers.delete('content-length');

  return new Response(
    addLegacyNotice(await response.text(), new URL(request.url).pathname),
    {
      status: response.status,
      headers,
    }
  );
};

export const config = { path: '/api/*' };

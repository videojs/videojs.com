import $ from 'jquery';
import hljs from 'highlight.js';
import { getPackage } from './lib/vjs-version.js';

// Start highlighting
hljs.initHighlightingOnLoad();

// Get the package information for doing things like swapping out version numbers
getPackage(function(e, pkg) {
  if (e) return console.error(e);

  $('.vjs-version').text(pkg.version);
  $('.ie8-version').text(pkg.dependencies['videojs-ie8'])
});

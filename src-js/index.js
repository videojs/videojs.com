import $ from 'jquery';
import hljs from 'highlight.js';
import { getPackage } from './lib/vjs-version.js';

// Start highlighting
hljs.initHighlightingOnLoad();

// Get the package information for doing things like swapping out version numbers
getPackage(function(e, pkg) {
  if (e) return console.error(e);

  $('.vjs-version').html(pkg.version);
});

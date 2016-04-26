import window from 'global/window';
import $ from 'jquery';
import './lib/bootstrap.js';
import hljs from 'highlight.js';
import { getPackage } from './lib/vjs-version.js';

// Start highlighting
hljs.initHighlightingOnLoad();

// Get the package information for doing things like swapping out version numbers
getPackage(function(e, pkg) {
  if (e) console.error(e);

  $('.vjs-version').text(pkg.version);
  $('.ie8-version').text(pkg.dependencies['videojs-ie8']);
});

// Bootstrap component initialization
$(function() {
  $('.affixed-sidebar').affix({
    offset: {
      top: function() {
        return $('section.overview').outerHeight(true);
      }
    }
  });

  $('body').scrollspy({ target: '.affixed-sidebar', offset: 50 });
});

// This is a shim to be able to require bootstrap correctly.
// bootstrap requires `jQuery` to be available globally but still offers up
// a requireable-npm module.
import $ from 'jquery';

window.jQuery = $;

// We have to use `require` here because otherwise the imports get re-ordered to be above
// `window.jQuery = $;`
require('bootstrap');


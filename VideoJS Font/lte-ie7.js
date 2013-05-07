/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'VideoJS\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-expand' : '&#xe000;',
			'icon-play' : '&#xe001;',
			'icon-pause' : '&#xe002;',
			'icon-volume-mute' : '&#xe003;',
			'icon-volume-low' : '&#xe004;',
			'icon-volume-medium' : '&#xe005;',
			'icon-volume-high' : '&#xe006;',
			'icon-diamonds' : '&#xe007;',
			'icon-Closed_captioning_symbol' : '&#xe008;',
			'icon-stop' : '&#xe009;',
			'icon-spinner' : '&#xe00a;',
			'icon-contract' : '&#xe00b;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};
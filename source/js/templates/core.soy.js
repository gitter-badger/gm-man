// This file was automatically generated from core.soy.
// Please don't edit this file by hand.

if (typeof templates == 'undefined') { var templates = {}; }
if (typeof templates.core == 'undefined') { templates.core = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
templates.core.exampleTemplate = function(opt_data, opt_ignored) {
  return '<div class="pointers-none" style=\'width:100%; height:auto; margin:5px 0; clear:both;\'><div id="' + soy.$$escapeHtml(opt_data.domId) + '" class="rounded clickArea" style="background: ' + ((opt_data.isSelected) ? ' #97C51A ' : ' #777777 ') + '; width:120px; height:25px; margin: 0 auto; "><div class="rounded page-curl-nobend pointers-none" style="width:100%; height:100%; text-align:center;"><div class="t-popup-button-label pointers-none" style="padding:6px 0 0 0;">' + soy.$$escapeHtml(opt_data.label) + '</div></div></div></div>';
};



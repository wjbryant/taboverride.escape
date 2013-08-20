/*! jquery.taboverride.escape v0.1.0-dev | https://github.com/wjbryant/taboverride.escape
Copyright (c) 2013 Bill Bryant | http://opensource.org/licenses/mit */

/*jslint white: true */
/*global exports, require, define, jQuery, tabOverride */

/**
 * the global jQuery object
 *
 * @namespace jQuery
 */

/**
 * the jQuery prototype shortcut "namespace"
 *
 * @namespace fn
 * @memberOf jQuery
 */

// Use CommonJS or AMD if available
(function ( factory ) {
	"use strict";

	if ( typeof exports === "object" && typeof require === "function" ) {
		// Node.js/CommonJS
		factory( require( "jquery" ), require( "taboverride" ),
			require( "jquery.taboverride" ), require( "taboverride.escape" ) );
	} else if ( typeof define === "function" && define.amd ) {
		// AMD - Register as an anonymous module
		// Files must be concatenated using an AMD-aware tool such as r.js
		define( [ "jquery", "taboverride", "jquery.taboverride", "taboverride.escape" ], factory );
	} else {
		// No module format - Use global variables instead
		factory( jQuery, tabOverride );
	}
}(function ( $, tabOverride ) {
	"use strict";

	var $fnTabOverride = $.fn.tabOverride;

	/**
	 * Gets or sets whether the escape extension is enabled (true) or disabled
	 * (false).
	 *
	 * @param  {boolean}        [enable]  whether to enable the escape extension
	 * @return {boolean|Object}           whether the escape extension is
	 *                                    enabled or the tabOverride object
	 *
	 * @method external:"jQuery.fn.tabOverride".escape
	 */
	$fnTabOverride.escape = tabOverride.escape;

	tabOverride.addExtension( "setDelegated", function ( $container, selector, enable ) {
		$container.off( ".tabOverrideEscape", selector );

		if ( enable ) {
			$container.on({
				"keydown.tabOverrideEscape": function (e) {
					if ( $fnTabOverride.escape() && e.originalEvent.keyCode === 27 ) {
						$fnTabOverride.utils.removeDelegatedListeners( $container, selector );
					}
				},
				"blur.tabOverrideEscape": function () {
					$fnTabOverride.utils.addDelegatedListeners( $container, selector );
				}
			}, selector );
		}
	});
}));

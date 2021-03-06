/*!
 * miniTip v0.0.3
 *
 * Updated: July 19, 2011
 * Requires: jQuery v1.5+
 *
 * Copyright 2011, James Simpson
 * http://goldfirestudios.com
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Documentation found at http://goldfirestudios.com/
 *
*/

(function($){
    $.fn.miniTip = function(opts) {
        // define the default option values
        var d = {
            title:      '',     // if left blank, no title bar will show
            delay:      300,    // how long to wait before showing and hiding the tooltip
            anchor:     'top',  // top, right, bottom, left
            fadeIn:     200,    // speed of fade in animation
            fadeOut:    200,    // speed of fade out animation
            hide:       false,  // set to true to only hide when the mouse moves away from the anchor and tooltip
            maxW:       '250px',    // max width of tooltip
            offset:     10      // offset in pixels of stem from anchor
        };
        
        // merge the defaults with the user defined options
        var o = $.extend(d, opts);
    }
})(jQuery);
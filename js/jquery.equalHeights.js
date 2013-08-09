/*!
 * jquery.equalHeights.js

Description: Basic equalheights plugin. Sets a min-height, or height for legacy browsers, to a collection of items.

Dependancies: jQuery

Example usage:

$(container).equalHeights({target: element});

 */


(function ($) {

    /*  Check browser for min-height support.
        Returns true or undefined
    */
    var supportsMinHeight = (function () {
        if (typeof document.body.style.minHeight !== "undefined")
            return true;
    })();


    $.fn.equalHeights = function (options) {
        var settings = $.extend({}, $.fn.equalHeights.defaultOptions, options),
            greatestHeight = 0,
            heightCSS = supportsMinHeight ? 'min-height' : 'height';

        return this.each(function () {
            var container = $(this),
                $elem = $(settings.target, container); 
            
            // For each item within the container
            $elem.each(function (i) {
                var $elemHeight = $(this).height();

                // Get the tallest item height
                if ($elemHeight > greatestHeight) {
                    greatestHeight = $elemHeight;
                }

                // Set the height for all items within the container
                if (i + 1 == $elem.length) {
                    $elem.css(heightCSS, greatestHeight);
                }
            });
            
        });

    };

    // Default options
    $.fn.equalHeights.defaultOptions = {
        target: '.item'
    };

})(jQuery);
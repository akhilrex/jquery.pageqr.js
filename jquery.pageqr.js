(function ($) {

    var methods = {
        init:function (options) {
            methods.settings = $.extend(methods.settings, options);
            $('.pageqr').remove();
        },
        show:function () {
            var url = window.top.location.href;
            console.log(url);
            while (url.indexOf('/') != -1) url = url.replace('/', '%2f');


            var $qr = $('<div></div>')
            var $container = $('<div class="pageqr"></div>')

            $qr.css({
                'background':"url('http://chart.apis.google.com/chart?cht=qr&chs=" + methods.settings.size + "x" + methods.settings.size + "&chl=" + url + "&chld=" + methods.settings.error_correction_level+"|"+methods.settings.margin + "') no-repeat",
                'width':methods.settings.size + 'px',
                'height':methods.settings.size + 'px'
            });
            $container.css({
                'width':methods.settings.size + 'px',
                'position':'fixed',
                'z-index':'1000'
            });

            $container.append($qr);

            if (methods.settings.border) {
                $container.css({
                    "border-style":"solid",
                    'border-width':"1px"
                });
            }
            if (methods.settings.showLabel) {
                var $text = $('<span></span>').text(methods.settings.labelText);
                $text.css({
                    'font-size':(methods.settings.size / 10) + 'px',
                    'padding':'2px',
                    'text-align':'center',
                    'display':'block'
                });
                $container.append($text);
            }

            if (methods.settings.horizontal === 'right') {
                $container.css('right', '10px');
            } else {
                $container.css('left', '10px');
            }

            if (methods.settings.vertical === 'top') {
                $container.css('top', '10px');
            } else {
                $container.css('bottom', '10px');
            }

            $('body').append($container);


            console.log($qr);
        },
        settings:{
            'size':100,
            'showLabel':true,
            'labelText':'Scan to open on phone',
            'vertical':'bottom',
            'horizontal':'right',
            'border':true,
            'error_correction_level':'L',
            'margin':4
        }
    };

    $.pageqr = function (options) {
        methods.init.apply(this, arguments);
        methods.show.apply(this, Array.prototype.slice.call(arguments, 1));
    };
})(jQuery);

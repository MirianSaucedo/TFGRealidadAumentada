/*!
 * jQuery ClassyNotty
 * www.class.pm
 *
 * Written by Marius Stanciu - Sergiu <marius@class.pm>
 * Licensed under the MIT license www.class.pm/LICENSE-MIT
 * Version 1.2.0
 *
 */

(function($) {
    $.ClassyNotty = function(settings) {
        var container, notty, hide, image, right, left, inner;
        settings = $.extend({
            title: undefined,
            content: undefined,
            timeout: 0,
            img: undefined,
            showTime: true,
            click: undefined
        }, settings);
        container = $('#nottys');
        if (!container.length) {
            container = $('<div>', {
                id: 'nottys'
            }).appendTo(document.body);
        }
        notty = $('<div>');
        notty.addClass('notty npop');
        hide = $('<div>', {
            click: function() {
                $(this).parent().removeClass('npop').addClass('nremove').delay(300).queue(function() {
                    $(this).clearQueue();
                    $(this).remove();
                });
            },
            touchstart: function() {
                $(this).parent().removeClass('npop').addClass('nremove').delay(300).queue(function() {
                    $(this).clearQueue();
                    $(this).remove();
                });
            }
        });
        hide.addClass('nhide');
        hide.html('Cerrar');
        if (settings.img !== undefined) {
            image = $('<div>', {
                style: 'background: url(' + settings.img + ')'
            });
            image.addClass('nimg');
            left = $('<div class="nleft">');
            right = $('<div class="nright">');
            if (settings.title !== undefined) {
                var htmlTitle = '<h2>' + settings.title + '</h2>';
            }
            else {
                var htmlTitle = '';
            }
            if (settings.content !== undefined) {
                var htmlContent = settings.content;
            }
            else {
                var htmlContent = '';
            }
            inner = $('<div>', {
                html: htmlTitle + htmlContent
            });
            inner.addClass('ninner');
            inner.appendTo(right);
            image.appendTo(left);
            left.appendTo(notty);
            right.appendTo(notty);
        }
        else {
            if (settings.title !== undefined) {
                var htmlTitle = '<h2>' + settings.title + '</h2>';
            }
            else {
                var htmlTitle = '';
            }
            if (settings.content !== undefined) {
                var htmlContent = settings.content;
            }
            else {
                var htmlContent = '';
            }
            inner = htmlTitle + htmlContent;
            notty.html(inner);
        }
        hide.appendTo(notty);
        function timeSince(time) {
            var time_formats = [
                [2, "Un segundo", "Un segundo desde ahora"], 
                [60, "segundos", 1], 
                [120, "Un minuto", "Un minuto desde ahora"], 
                [3600, "minutos", 60], 
                [7200, "Una hora", "Una hora desde ahora"], 
                [86400, "horas", 3600], 
                [172800, "Un dia", "Mañana"], 
                [604800, "dias", 86400], 
                [1209600, "Um dia", "Siguiente semana"], 
                [2419200, "semanas", 604800], 
                [4838400, "Un mes", "siguiente mes"], 
                [29030400, "meses", 2419200], 
                [58060800, "Un año", "siguiente año"], 
                [2903040000, "años", 29030400], 
                [5806080000, "Un siglo", "siguiente siglo"], 
                [58060800000, "siglos", 2903040000]
            ];
            var seconds = (new Date - time) / 1000;
            var token = '', list_choice = 1;
            if (seconds < 0) {
                seconds = Math.abs(seconds);
                token = 'desde ahora';
                list_choice = 1;
            }
            var i = 0, format;
            while (format = time_formats[i++]) {
                if (seconds < format[0]) {
                    if (typeof format[2] === 'string') {
                        return format[list_choice];
                    }
                    else {
                        return Math.floor(seconds / format[2]) + " " + format[1];
                    }
                }
            }
            return time;
        }
        if (settings.showTime !== false) {
            var timestamp = Number(new Date());
            timeHTML = $('<div>', {
                html: '<strong>' + timeSince(timestamp) + '</strong> '
            });
            timeHTML.addClass('ntime').attr('title', timestamp);
            if (settings.img !== undefined) {
                timeHTML.appendTo(right);
            }
            else {
                timeHTML.appendTo(notty);
            }
            setInterval(function() {
                $('.ntime').each(function() {
                    var timing = $(this).attr('title');
                    $(this).html('<strong>' + timeSince(timing) + '</strong> ');
                });
            }, 4000);
        }
        notty.hover(function() {
            hide.show();
        }, function() {
            hide.hide();
        });
        notty.prependTo(container);
        notty.show();
        if (settings.timeout) {
            setTimeout(function() {
                notty.removeClass('npop').addClass('nremove').delay(300).queue(function() {
                    $(this).clearQueue();
                    $(this).remove();
                });
            }, settings.timeout);
        }
        if (settings.click !== undefined) {
            notty.addClass('nclick');
            notty.click(function(event) {
                var target = $(event.target);
                if (!target.is('.nhide')) {
                    settings.click.call(this);
                }
            });
        }
        return this;
    };
})(jQuery);
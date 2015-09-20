// var materialButton = (function() {
//     'use strict';
//
//     // Store Dom elements
//     var $buttons     = $('.btn, .nav-item, button, .hamburger');
//     var circleClass  = 'btn-circle';
//     var clickedClass = 'clicked';
//     var fadeOutTime  = 250;
//
//     // Event listeners
//     function init(obj) {
//         obj.css({'overflow':'hidden'});
//         obj.on('mousedown', addCircle)
//         obj.on('mouseup mouseleave', removeCircle);
//     }
//
//     function addCircle(event) {
//         console.log('addCircle');
//         var $this = obj;
//         var offset = $this.offset();
//         var offsetY = (event.pageY - offset.top);
//         var offsetX = (event.pageX - offset.left);
//         var circle = $('<span class="' + circleClass + '"></span>').css({ 'top' : offsetY, 'left': offsetX });
//
//         $this.addClass(clickedClass);
//         $this.appendAfter(circle);
//     }
//
//     function removeCircle(event) {
//         var $this = $(this);
//         $this.removeClass(clickedClass)
//         $this.find('.btn-circle').fadeOut( fadeOutTime, function() {
//             $(this).remove();
//         });
//     }
//
//     function destroy() {
//         events.off('buttonAnimation');
//     }
//
//     return {
//         destroy:destroy
//     }
// })();

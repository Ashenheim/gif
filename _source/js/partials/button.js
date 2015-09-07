var materialButton = (function() {
    'use strict';

    // Store Dom elements
    var $buttons     = $('.btn, .nav-item, button, .hamburger');
    var circleClass  = 'btn-circle';
    var clickedClass = 'clicked';
    var fadeOutTime  = 250;

    events.on('buttonAnimation', init);

    // Event listeners
    function init(obj) {
        addCircle(obj);
        obj.css({'overflow':'hidden'});
        obj.on('mouseup mouseleave', removeCircle);
    }

    function addCircle(obj) {
        var $this = obj;
        var offset = $this.offset();
        var offsetY = (event.pageY - offset.top);
        var offsetX = (event.pageX - offset.left);
        var circle = $('<span class="' + circleClass + '"></span>').css({ 'top' : offsetY, 'left': offsetX });

        $this.addClass(clickedClass);
        $this.append(circle);
    }

    function removeCircle(event) {
        var $this = $(this);
        $this.removeClass(clickedClass)
        $this.find('.btn-circle').fadeOut( fadeOutTime, function() {
            $(this).remove();
        });
    }

    function destroy() {
        events.off('buttonAnimation');
    }

    return {
        destroy:destroy
    }
})();

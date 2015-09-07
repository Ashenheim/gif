var modal = (function() {
    var $el = $('#modal');
    var $modal = $el.find('.modal');

    events.on('openModal', open);

    function open(data) {
        console.log(data);
        $modal.html(data);
    }

    function destroy() {
        $el.remove();
        events.off('openModal');
    }

    return {
        destroy: destroy
    }
})();

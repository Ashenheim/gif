function gifController($scope, $stateParams, $timeout) {

    var $node = $scope.gifs.filter(function(node) {
        return node.name == $stateParams.name;
    })[0];

    $scope.names = $node.name.split('-');
    $scope.image = $node.image;
    $scope.category = $node.cat;
    $scope.url = 'http://' + window.location.host + $node.image;

    console.log($scope.names);

    $timeout(function() {
        var copyButton = $('#CopyBtn');
        var copyInput = $('#input');
        var copyButtonSuccessTpl = '<span class="button-overlay">Link copied!</span>';

        copyButton.on('click', function(event) {
            copyInput.select();

            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                if(msg == 'successful') {
                    var copyButtonSuccess = copyButton.append(copyButtonSuccessTpl);
                    $('.button-overlay', this).delay(650).fadeOut(300, function() {
                        $(this).remove();
                    });
                }
            } catch (err) {
                console.log(err);
                $('.gif-page__input.hidden').removeClass('hidden');
            }
        });
    },0);
}

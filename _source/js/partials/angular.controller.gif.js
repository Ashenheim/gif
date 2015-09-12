function gifController($scope, $stateParams, $timeout) {

    var $node = $scope.gifs.filter(function(node) {
        return node.name == $stateParams.name;
    })[0];

    $scope.name = $node.name.split('-');
    $scope.image = $node.image;
    $scope.url = 'http://' + window.location.host + $node.image;

    $timeout(function() {
        $('#input').select();
    })
}

function gifController($scope, $stateParams, $timeout) {

    var $node = $scope.gifs.filter(function(node) {
        return node.name == $stateParams.name;
    })[0];

    $scope.name = $node.name;
    $scope.image = $node.image;
    $scope.url =  window.location.host + $node.image;

    $timeout(function() {
        $('#input').select();
    })
}

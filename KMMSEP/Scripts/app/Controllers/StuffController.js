app.controller('StuffController', ['$scope', 'StuffService', function ($scope, StuffService) {
    var init = function () {
        $scope.workers = StuffService.getAll();
    }

    init();
}])
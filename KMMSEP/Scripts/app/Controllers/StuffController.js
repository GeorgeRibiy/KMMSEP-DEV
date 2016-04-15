app.controller('StuffController', ['$scope', '$mdDialog', '$mdMedia', 'StuffService', function ($scope,$mdDialog, $mdMedia, StuffService) {
    var init = function () {
        $scope.workers = StuffService.getAll();
    }

    $scope.openSubjects = function (ev, index) {
        var selfScope = $scope;
        $mdDialog.show({
            controller: function ($scope) {
                $scope.subjects = selfScope.workers[index].subjects;
                $scope.cancel = function () {
                    $mdDialog.hide();
                }
            },
            templateUrl: 'Views/Modals/SubjectModal.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            bindToController: true,
            locals: {
                advert: $scope.workers[index]
            }
        })
    }

    init();
}])
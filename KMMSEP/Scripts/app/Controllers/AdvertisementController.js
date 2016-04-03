app.controller('AdvertisementController', ['$scope','$mdDialog', '$mdMedia', 'AdvertisementService', function ($scope, $mdDialog, $mdMedia, AdvertisementService) {
    var init = function () {
        $scope.advertisements = AdvertisementService.getAdvertises();
        for (var i = 0; i < $scope.advertisements.length; i++) {
            $scope.advertisements[i].text = trimAdvertText($scope.advertisements[i].text);
        }
    }

    var trimAdvertText = function (text) {
        if (text.split(' ').length > 20) {
            var words = text.split(' ').slice(0, 10).join(' ');
            text = words;
        }

        return text;
    }

    $scope.showFullAdvert = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'Views/Modals/AdvertModal.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })
        .then(function (answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
            $scope.status = 'You cancelled the dialog.';
        });
    }

    function DialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }
    init();
}])
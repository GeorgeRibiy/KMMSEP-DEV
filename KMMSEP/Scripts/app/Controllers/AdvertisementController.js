app.controller('AdvertisementController', ['$scope','$mdDialog', '$mdMedia', 'AdvertisementService', function ($scope, $mdDialog, $mdMedia, AdvertisementService) {
    var init = function () {
        $scope.advertisements = AdvertisementService.getAdvertises();
        for (var i = 0; i < $scope.advertisements.length; i++) {
            $scope.advertisements[i].text = trimAdvertText($scope.advertisements[i].text);
        }
    }

    var trimAdvertText = function (text) {
        if (text.split(' ').length > 2000) {
            var words = text.split(' ').slice(0, 10).join(' ');
            text = words;
        }

        return text;
    }

    $scope.showFullAdvert = function (ev, index) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            controller: 'AdvertModalController',
            templateUrl: 'Views/Modals/AdvertModal.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen,
            bindToController: true,
            locals: {
                advert: $scope.advertisements[index]
            }
        })
        .then(function (answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
            $scope.status = 'You cancelled the dialog.';
        });
    }

    $scope.advertExploreIndex = -1;
    init();
}])
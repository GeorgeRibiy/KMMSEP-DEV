app.controller('AdvertModalController', ['$scope', '$mdDialog', '$mdMedia','AdvertisementService', function ($scope, $mdDialog, $mdMedia) {
    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };

    $scope.advert = this.advert;
    console.log($scope.advert);
}])
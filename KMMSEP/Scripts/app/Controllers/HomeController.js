app.controller('HomeController', ['$scope','$location', function ($scope, $location) {
    var init = function () {
        $('#main-slider .carousel').carousel({
            interval: 8000
        });
        $scope.images = ["../images/university.jpg", "../images/university1.jpg", "../images/university2.jpg"];
    }

    $scope.openLink = function (target) {
        var index;
        switch (target) {
            case 'schedule':
                $location.path('/Schedule');
                break;
            case 'stuff':
                $location.path('/Stuff');
                index = 2;
                break;
        }
        $scope.$parent.changeActiveness(index);
    }

    init();
}])
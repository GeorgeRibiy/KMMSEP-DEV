app.controller('IndexController', ['$scope', '$location', function ($scope, $location) {
    var init = function () {
        $scope.activeness = ["", "", "", "", "", ""];
        checkLocation();
    };

    var checkLocation = function () {
        switch ($location.path()) {
            case '/Home':
                $scope.activeness[0] = 'active';
                break;
            case '/About':
                $scope.activeness[1] = 'active';
                break;
            case '/Stuff':
                $scope.activeness[2] = 'active';
                break;
            case '/Photos':
                $scope.activeness[3] = 'active';
                break;
            case '/Articles':
                $scope.activeness[4] = 'active';
                break;
            case '/Contacts':
                $scope.activeness[5] = 'active';
                break;
        }

        console.log($location.path());
    }

    var changeActiveness = function (index) {
        for (var i = 0; i < $scope.activeness.length; i++) {
            $scope.activeness[i] = "";
        }
        if (index >= 0 && index < $scope.activeness.length) {
            $scope.activeness[index] = "active";
        }
    }

    $scope.changeActiveness = changeActiveness;

    $scope.ChangeLocation = function (index) {
        switch (index) {
            case 0:
                $location.path('/Home');
                break;
            case 1:
                $location.path('/About');
                break;
            case 2:
                $location.path('/Stuff');
                break;
            case 3:
                $location.path('/Photos');
                break;
            case 4:
                $location.path('/Articles')
                break;
            case 5:
                $location.path('/Contacts');
                break;
        }

        changeActiveness(index);
    }

    init();
}])
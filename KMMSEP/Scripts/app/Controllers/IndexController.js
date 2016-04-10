app.controller('IndexController', ['$scope', '$location', '$mdDialog', '$mdMedia', 'CommonFunctionService', function ($scope, $location, $mdDialog, $mdMedia, CommonFunctionService) {
    var init = function () {
        $scope.activeness = ["", "", "", "", "", ""];
        checkLocation();
        if (CommonFunctionService.getCookie('kmmsep_user')) {
            $scope.userName = CommonFunctionService.getCookie('kmmsep_user').name;
        } else {
            $scope.userName = undefined;
        }
        
        $scope.greetingMessage = $scope.userName ? createGreeting($scope.userName) : 'Увійти';
        $scope.signedIn = checkIfSignedIn();
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

    var getUserName = function () {
        return CommonFunctionService.getCookie('kmmsep_user').name;
    }

    var createGreeting = function (userName) {
        return 'Вітаю, ' + userName;
    }

    var checkIfSignedIn = function () {
        if (CommonFunctionService.getCookie('kmmsep_user') === undefined)
            return false;
        return true;
    }

    $scope.userName;

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

    $scope.openSignInModal = function (ev) {
        $mdDialog.show({
            controller: 'AuthorizationController',
            templateUrl: 'Views/Modals/SignInModal.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: false,
        })
        .then(function () {
            $scope.userName = CommonFunctionService.getCookie('kmmsep_user').name;
        })
    };

    $scope.signOut = function () {
        CommonFunctionService.deleteCookie('kmmsep_user');
        $scope.signedIn = false;
        $scope.userName = undefined;
    }

    $scope.$watch('userName', function (newValue, oldValue) {
        console.log(newValue + " " + oldValue);
        if (newValue != oldValue) {
            if (newValue != undefined) {
                $scope.greetingMessage = createGreeting(newValue);
            } else {
                $scope.greetingMessage = 'Увійти';
            }
        }
    })

    init();
}])
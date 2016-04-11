app.controller('AuthorizationController', ['$scope', '$mdDialog', '$mdMedia', '$timeout', 'AuthorizationService', 'CommonFunctionService',
    function ($scope, $mdDialog, $mdMedia, $timeout, AuthorizationService, CommonFunctionService) {
    var init = function () {
        $scope.processing = false;
    }

    $scope.signIn = function () {
        $scope.processing = true;
        var user = {
            email: $scope.user_email.toLowerCase(),
            password: $scope.user_password.toLowerCase()
        };
        console.log(user);
        var result = AuthorizationService.tryToAuthorize(user);
        if (result.found) {
            $scope.signInResult = "Вітаємо, " + result.user.name;
            CommonFunctionService.setCookie('kmmsep_user', result.user, new Date(0, 1));
            $timeout(function () {
                $mdDialog.hide();
                console.log("confirmed");
            }, 1500);
        } else {
            $scope.signInResult = "Не вірний email або пароль";
        }
        $scope.processing = false;
    };

    init();
}])
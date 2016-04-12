app.controller('LoadingIndicatorController', ['$rootScope', function ($rootScope) {
    var init = function () {
        $rootScope.isRouteLoading = false;

        $rootScope.$on('$routeChengeStart', function myfunction() {
            $rootScope.isRouteLoading = true;
        });

        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.isRouteLoading = false;
        });
    }
}])
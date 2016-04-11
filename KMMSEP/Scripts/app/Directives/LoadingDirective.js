app.directive('loadingIndicator', ['$rootScope', function ($rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'Views/Partials/LoadingIndicatorView.html',
        controller: 'LoadingIndicatorController'
    }
}])
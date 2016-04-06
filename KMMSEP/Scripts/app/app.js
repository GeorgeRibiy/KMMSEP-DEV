var app = angular.module('HighModule', ['ngRoute', 'angularSmoothscroll', 'ngMaterial']);
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/Home',
            data: {
                privateData: true
            }
        })
        .when('/Home', {
            templateUrl: 'Views/Home.html',
            controller: 'HomeController',
            data: {
                privateData: true
            }
        })
        .when('/About', {
            templateUrl: 'Views/About.html',
            date: {
                privateData: true
            }
        })
        .when('/Stuff', {
            templateUrl: 'Views/Stuff.html',
            date: {
                privateData: true
            }
        })
        .when('/Photos', {
            templateUrl: 'Views/Photos.html',
            date: {
                privateData: true
            }
        })
        .when('/Articles', {
            templateUrl: 'Views/Articles.html',
            date: {
                privateData: true
            }
        })
        .when('/Contacts', {
            templateUrl: 'Views/Contacts.html',
            date: {
                privateData: true
            }
        })
        .when('/Schedule', {
            templateUrl: 'Views/Schedule.html',
            controller: 'ScheduleController',
            date: {
                privateData: true
            }
        })
        .otherwise({
            redirectTo: '/Home'
        })
}])
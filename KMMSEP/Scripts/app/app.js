var app = angular.module('HighModule', ['ui.router', 'angularSmoothscroll', 'ngMaterial', 'anim-in-out']);
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('Home', {
            url: '/Home',
            templateUrl: 'Views/Home.html',
            controller: 'HomeController'
        })
        .state('About', {
            url: '/About',
            templateUrl: 'Views/About.html'
        })
        .state('Stuff', {
            url: '/Stuff',
            templateUrl: 'Views/Stuff.html',
            controller: 'StuffController'
        })
        .state('Photos', {
            url: '/Photos',
            templateUrl: 'Views/Parked.html'
        })
        .state('Articles', {
            url: '/Articles',
            templateUrl: 'Views/Parked.html'
        })
        .state('Contacts', {
            url: '/Contacts',
            templateUrl: 'Views/Contacts.html'
        })
        .state('Schedule', {
            url: '/Schedule',
            templateUrl: 'Views/Schedule.html',
            controller: 'ScheduleController'
        })
        .state('ResearchAvtivities', {
            url: '/ResearchActivities',
            templateUrl: 'Views/ResearchActivities.html',
            controller: 'ResearchActivitiesController'
        })
    $urlRouterProvider.otherwise("/Home");
}])
//app.config(["$routeProvider", function ($routeProvider) {
//    $routeProvider
//        .when('/', {
//            redirectTo: '/Home',
//            data: {
//                privateData: true
//            }
//        })
//        .when('/Home', {
//            templateUrl: 'Views/Home.html',
//            controller: 'HomeController',
//            data: {
//                privateData: true
//            }
//        })
//        .when('/About', {
//            templateUrl: 'Views/About.html',
//            date: {
//                privateData: true
//            }
//        })
//        .when('/Stuff', {
//            templateUrl: 'Views/Stuff.html',
//            date: {
//                privateData: true
//            }
//        })
//        .when('/Photos', {
//            templateUrl: 'Views/Photos.html',
//            date: {
//                privateData: true
//            }
//        })
//        .when('/Articles', {
//            templateUrl: 'Views/Articles.html',
//            date: {
//                privateData: true
//            }
//        })
//        .when('/Contacts', {
//            templateUrl: 'Views/Contacts.html',
//            date: {
//                privateData: true
//            }
//        })
//        .when('/Schedule', {
//            templateUrl: 'Views/Schedule.html',
//            controller: 'ScheduleController',
//            date: {
//                privateData: true
//            }
//        })
//        .otherwise({
//            redirectTo: '/Home'
//        })
//}])
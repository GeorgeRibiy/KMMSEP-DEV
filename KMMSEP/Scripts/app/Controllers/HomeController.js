app.controller('HomeController', ['$scope', function ($scope) {
    $('#main-slider .carousel').carousel({
        interval: 8000
    });
    console.log($('#main-slider .carousel').html());
}])
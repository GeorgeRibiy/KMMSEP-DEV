app.controller('ScheduleController', ['$scope', function ($scope) {
    var freeze;
    var schdeuleImagesToShow = [];

    var init = function () {
        schdeuleImagesToShow = ['../images/0001.jpg', '../images/0002.jpg', '../images/0003.jpg', '../images/0004.jpg', '../images/0005.jpg'];
    }

    var collapsePart = function (what, where) {
        var part = $('#collapse-' + where + '-part');
        if (part.css('display') == 'block' && freeze != what) {
            part.slideToggle('slow');
        }
        part.slideToggle('slow');
    }

    $scope.collapse = function (what) {
        switch (what) {
            //first part
            case 'first':
                $('#collapse-first').slideToggle('slow');
                break;
            case 'first-part-first':
                collapsePart(what,'first');
                $scope.scheduleImage = schdeuleImagesToShow[0];
                freeze = what;
                break;
            case 'first-part-second':
                collapsePart(what, 'first');
                $scope.scheduleImage = schdeuleImagesToShow[0];
                freeze = what;
                break;

            //second part
            case 'second':
                $('#collapse-second').slideToggle('slow');
                break;
            case 'second-part-first':
                collapsePart(what, 'second');
                $scope.scheduleImage = schdeuleImagesToShow[1];
                freeze = what;
                break;
            case 'second-part-second':
                collapsePart(what, 'second');
                $scope.scheduleImage = schdeuleImagesToShow[1];
                freeze = what;
                break;

            //third part
            case 'third':
                $('#collapse-third').slideToggle('slow');
                break;
            case 'third-part-first':
                collapsePart(what, 'third');
                $scope.scheduleImage = schdeuleImagesToShow[2];
                freeze = what;
                break;
            case 'third-part-second':
                collapsePart(what, 'third');
                $scope.scheduleImage = schdeuleImagesToShow[2];
                freeze = what;
                break;

            //fourth part
            case 'fourth':
                $('#collapse-fourth').slideToggle('slow');
                break;
            case 'fourth-part-first':
                collapsePart(what, 'fourth');
                $scope.scheduleImage = schdeuleImagesToShow[3];
                freeze = what;
                break;
            case 'fourth-part-second':
                collapsePart(what, 'fourth');
                $scope.scheduleImage = schdeuleImagesToShow[3];
                freeze = what;
                break;

            //fifth part
            case 'fifth':
                $('#collapse-fifth').slideToggle('slow');
                break;
            case 'fifth-part-first':
                collapsePart(what, 'fifth');
                $scope.scheduleImage = schdeuleImagesToShow[4];
                freeze = what;
                break;
            case 'fifth-part-second':
                collapsePart(what, 'fifth');
                $scope.scheduleImage = schdeuleImagesToShow[4];
                freeze = what;
                break;
        }
    }

    init();
}])
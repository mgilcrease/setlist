// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider

        .when('/songs', {
            templateUrl: 'views/songs.html',
            controller: 'SongController'
        });

    $locationProvider.html5Mode(true);
}]);

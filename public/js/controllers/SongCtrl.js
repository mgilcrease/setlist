angular.module('SongCtrl', [])

.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
})

.controller('SongController', function($scope, Song) {
    Song.get()
        .success(function(data) {
            $scope.songs = data;
        });
});

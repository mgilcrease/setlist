// public/js/services/SongService.js
angular.module('SongService', []).factory('Song', ['$http', function($http) {
    
    return {
        // call to get all songs in the repertoire
        get : function() {
            return $http.get('/api/songs');
        }
    }
}]);

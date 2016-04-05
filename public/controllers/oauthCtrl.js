/**
 * Created by dcreey on 3/30/2016.
 */

photon.controller('oauthCtrl', function($scope,$http,$rootScope){
    var oauth = this;
    var baseUrl = $rootScope.baseUrl;
    oauth.token = null;

    oauth.loadTokens = function(){
        $http.get(baseUrl + "/api/oauth").success(function (tokens) {
            oauth.tokens = tokens;
        });
    }

    oauth.refreshToken = function(){
        $http.post(baseUrl + "/api/oauth/add",{}).success(function (tokens) {
            oauth.tokens = tokens;
        });
    }

    oauth.login = function(username, password){
        $http.get(baseUrl + "/api/oauth").success(function (tokens) {
            oauth.tokens = tokens;
        });
    }
});
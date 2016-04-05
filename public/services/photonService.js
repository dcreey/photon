/**
 * Created by dcreey on 3/31/2016.
 */

photon.factory('particleService', function() {
    var particle = {};
    var _user,
        _password,
        _token;

    particle.getAuthTokens = function() {

    }

    particle.authenticate = function(user,password) {
        _user = user;
        _password = password;
    }

    return particle;
});
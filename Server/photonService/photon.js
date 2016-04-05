/**
 * Created by dcreey on 3/30/2016.
 */
var Particle = require('particle-api-js');
var particle = new Particle();

var _token;
var _username = global.photon.username;
var _password = global.photon.password;

particle.login({username: _username, password:_password}).then(
    function(data){
        console.log('API call completed on promise resolve: ', data.body.access_token);
        _token = data.body.access_token;
    },
    function(err) {
        console.log('API call completed on promise fail: ', err);
    }
);

module.exports = {
    getAllAuthTokens: function(callback){
        particle.listAccessTokens({ username: _username, password: _password }).then(function(data) {
            callback(data.body);
        }, function(err) {
            console.log('error on listing access tokens: ', err);
        });
    },

    getCurrentAuthToken: function() {

    },

    refreshAuthToken: function() {

    },

    getDevices: () => {
        particle.listDevices({ auth: _token });
    }
}
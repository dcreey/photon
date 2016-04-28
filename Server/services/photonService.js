/**
 * Created by dcreey on 3/30/2016.
 */
'use strict';
require('rootpath')();
var photon = require('config/photon');
var Particle = require('particle-api-js');
var particle = new Particle();

var username = photon.username;
var password = photon.password;

var token;

function Photon(authToken) {
    token = authToken;
}

Photon.prototype = {
    login: function (){
        return new Promise((resolve, reject) => {
            particle.login({username: username, password: password}).then((data) => {
                    token = data.body.access_token;
                    resolve(token);
                }, (err) => {
                    console.log('API call completed on promise fail: ', err);
                    reject(err);
                }
            );
        })
    },
    isAuthenticated: function() {
        return token != null;
    },
    getAllAuthTokens: function() {
        return new Promise((resolve, reject) => {
            particle.listAccessTokens({ username: username, password: password }).then((data) => {
                resolve(data.body);
            }, (err) => {
                console.log('error on listing access tokens: ', err);
                reject(err);
            });
        })
    },
    removeAuthToken: function(authToken) {
        return new Promise((resolve, reject) => {
            particle.removeAccessToken({username: username, password: password, auth: authToken}).then((data) => {
                resolve(data.body);
            }, (err) =>{
                console.log('error on listing devices: ', err);
                reject(err);
            });
        })
    }
}

module.exports = Photon;
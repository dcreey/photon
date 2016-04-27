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

function Photon() {

}

Photon.prototype = {
    login: function (){
        return new Promise(function (resolve, reject) {
            particle.login({username: username, password: password}).then((data) => {
                    console.log('API call completed on promise resolve: ', data.body.access_token);
                    token = data.body.access_token;
                    resolve();
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

    getCurrentAuthToken: function() {

    },

    refreshAuthToken: function() {

    },

    getDevices: function() {
        return new Promise((resolve, reject) => {
            particle.listDevices({auth: token}).then((data) => {
                resolve(data.body);
            }, (err) =>{
                console.log('error on listing devices: ', err);
                reject(err);
            });
        })
    }
}

module.exports = Photon;
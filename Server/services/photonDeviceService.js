/**
 * Created by dcreey on 4/26/2016.
 */
'use strict';
var Particle = require('particle-api-js');
var particle = new Particle();

function PhotonDevice(deviceId, authToken) {
    this.deviceId = deviceId;
    this.authToken = authToken;
    this.testSignal = false;
}

PhotonDevice.prototype = {
    getDevices: function() {
        return new Promise((resolve, reject) => {
            particle.listDevices({auth: token}).then((data) => {
                resolve(data.body);
            }, (err) =>{
                console.log('error on listing devices: ', err);
                reject(err);
            });
        })
    },
    toggleTestSignal: function(){
        return new Promise((resolve, reject) => {
            particle.signalDevice({ deviceId: this.deviceId, signal: this.testSignal = !this.testSignal, auth: this.authToken }).then(function(data) {
                console.log(this.testSignal ? 'Device is shouting rainbows:' : 'The LED is back to normal:', data);
            }, function(err) {
                console.log('Error sending a signal to the device:', err);
            });
        })
    },
    getEvents: function(){
        return new Promise((resolve, reject) => {

        })
    },
    triggerEvent: function() {
        return new Promise((resolve, reject) => {
        })
    },
    streamEventData: function() {
        return new Promise((resolve, reject) => {
        })
    },
    flash: function(){
        return new Promise((resolve, reject) => {
        })
    },
}
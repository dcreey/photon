/**
 * Created by dcreey on 4/26/2016.
 */

var Particle = require('particle-api-js');
var particle = new Particle();

function PhotonDevice(deviceToken, authToken) {
    this.token = deviceToken;
    this.authToken = authToken;
}

PhotonDevice.prototype = {
    getEvents: function(){},
    triggerEvent: function() {},
    streamEventData: function() {},
    flash: function(){},
}
/**
 * Created by dcreey on 4/27/2016.
 */
'use strict';
var Oauth = require("./models/oauthToken");

var Photon = require("./services/photonService.js");
var Device = require("./services/photonDeviceService.js");

var photon = new Photon();
var device = new Device();

module.exports = function(app) {
    app.get("/api/oauth", function(req,res){

    });

    app.post("/api/oauth",function(req,res){
        photon.login().then(() => {
            photon.getAllAuthTokens.then((response) => {
                //write code to update db
                res.json(response);
            });
        })
    });

    app.delete("/api/oauth",function(req,res){
        photon.removeAuthToken(req.body.authToken).then(() => {
            photon.getAllAuthTokens.then((response) => {
                //write code to update db
                res.json(response);
            });
        })
    });

    app.get("/api/device",function(req,res){

    });

    app.post("/api/device",function(req,res){
        device.getDevices().then(() => {
            photon.getAllAuthTokens.then((response) => {
                //write code to update db
                res.json(response);
            });
        })
    });
}
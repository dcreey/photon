/**
 * Created by dcreey on 12/17/2015.
 */

var User = require("./models/user");
var Oauth = require("./models/oauthToken");
var photon = require("./services/photonService.js")();

module.exports = function(app) {

    app.get("/api/oauth", function(req,res){
        photon.login().then(() => {
            photon.getAllAuthTokens.then((response) => {
                res.json(response);
            });
        })
    });
    app.get("/api/user", function(req,res){
        User.find(function(err,users){
            res.json(users);
        })
    });

    app.post("/api/user/add",function(req,res){
        var name = req.body.name;
        var user = new User({name:name });
        user.save(function(err){
            if(err){console.log(err);}
            res.send();
        });
    });

    app.post("/api/oauth/add",function(req,res){
        var response = photon.refreshAuthToken();
    })

    app.get('*', function(req, res) {
        res.sendFile('./public/index.html'); // load our public/index.html file
    });


};
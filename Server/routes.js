/**
 * Created by dcreey on 12/17/2015.
 */

var User = require("./models/user");

module.exports = function(app) {

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
    })

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });
};
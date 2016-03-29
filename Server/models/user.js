/**
 * Created by dcreey on 12/17/2015.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    name : {type : String, default: '', isRequired: true}
});

/*
 var user = new User({name:"dcreey"});
 user.save(function(err){
 if(err){
 console.log(err.message);
 }
 else{
 console.log("saved");
 }
 });*/
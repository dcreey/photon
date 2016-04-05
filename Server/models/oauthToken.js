/**
 * Created by dcreey on 3/30/2016.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('OauthToken', {
    accessToken : {type : String, default: '', isRequired: true},
    tokenType : {type : String, default: '', isRequired: true},
    expiresIn : {type : Number, default: '', isRequired: true},
    refreshToken : {type : String, default: '', isRequired: true},
    acquireDate : {type : Date, default: '', isRequired: false}
});
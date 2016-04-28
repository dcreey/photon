/**
 * Created by dcreey on 4/25/2016.
 */
'use strict';

require('rootpath')();

var expect = require('expect');
var service = require('Server/services/photonService');

describe('Photon Service Test Cases', () => {
    var photon = new service();

    before((done) => {
        photon.login().then((token) => {
            console.log('Token is:', token)
            this.token = token;
            done();
        })
    });

    it('should successfully login', () => {
        expect(photon.isAuthenticated()).toBe(true);
    })

    it('should have multiple auth tokens on record', (done) => {
        photon.getAllAuthTokens().then((data) => {
            expect(data.length > 1).toBe(true);
            done();
        })
    })

    it('should successfully delete current auth token', (done) => {
        photon.removeAuthToken(this.token).then((data) => {
            expect(data.ok).toBe(true);
            done();
        })
    })
})
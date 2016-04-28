/**
 * Created by dcreey on 4/26/2016.
 */
'use strict';

require('rootpath')();

var expect = require('expect');
var service = require('Server/services/photonService');
var deviceService = require('Server/services/photonDeviceService');

describe('Photon Device Service Test Cases', () => {
    var photon = new service();
    var device = new deviceService();

    before((done) => {
        photon.login().then((authToken) => {
            this.authToken = authToken;
            photon.getDevices().then((devices) =>{
                this.device = devices[0];
                done();
            })
        })
    });

    after((done) => {
        photon.removeAuthToken(this.authToken).then((data) => {
            console.log(data.ok ? 'Successfully deleted token' : 'Error deleting token')
            done();
        })
    });

    it('should have at least one device on record', (done) => {
        device.getDevices().then((data) => {
            expect(data.length > 0).toBe(true);
            done();
        })
    })

    it('Should get device events', (done) => {
        device.getEvents().then((events) => {
            expect(events.length > 0).toBe(true);
            done();
        })
    })

    it('Should trigger device event', (done) => {
        device.triggerEvent().then(() => {
            expect(false).toBe(true);
            done();
        })
    })

    it('Should stream device event data', (done) => {
        device.streamEventData().then(() => {
            expect(false).toBe(true);
            done();
        })
    })

    it('Should flash device', (done) => {
        device.flash().then(() => {
            expect(false).toBe(true);
            done();
        })
    })
})
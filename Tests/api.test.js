var assert = require('assert');
const mongo = require("../utils/Connection");
const request = require('request');
const baseUrl = "http://localhost:3000";

describe('TEST API', function () {
    it('Test 1. Get medicaments', function (done) {
        request(`${baseUrl}/api/medicaments/`, (err, res, data) => {
            
            assert.ok(!!data);
            assert.notEqual(data.length, 0);
            done();
        })
    });

    it('Test 2. Get Orders', function (done) {
        request(`${baseUrl}/api/orders/`, (err, res, data) => {
            
            assert.ok(!!data);
            assert.notEqual(data.length, 0);
            done();
        })
    });

    it('Test 3. Get Deliver', function (done) {
        request(`${baseUrl}/api/deliveries/`, (err, res, data) => {
            assert.ok(!!data);
            assert.notEqual(data.length, 0);
            done();
        })
    });

    it('Test 4. Get Categories', function (done) {
        request(`${baseUrl}/api/categories/`, (err, res, data) => {
            
            assert.ok(!!data);
            assert.notEqual(data.length, 0);
            done();
        })     
    });

    it('Test 5. Get medicament id', function (done) {
        request(`${baseUrl}/api/medicaments/5ea2bbe5a56dad2044521476`, (err, res, data) => {
            
            const json = JSON.parse(data);
            assert.ok(!!json);
            assert.equal(json.length, 1);
            done();
        })
    });

    it('Test 6. Get order id', function (done) {
        request(`${baseUrl}/api/orders/5eac060b589be41080b21d8a`, (err, res, data) => {
            
            const json = JSON.parse(data);
            assert.ok(!!json);
            assert.equal(json.length, 1);
            done();
        })
    });

    it('Test 7. Get deliver id', function (done) {
        request(`${baseUrl}/api/deliveries/5eac0514589be41080b21d89`, (err, res, data) => {
            
            const json = JSON.parse(data);
            assert.ok(!!json);
            assert.equal(json.length, 1);
            done();
        })
    });

    it('Test 8. Get categories id', function (done) {
        request(`${baseUrl}/api/categories/5eac1053589be41080b21d8b`, (err, res, data) => {
            
            const json = JSON.parse(data);
            assert.ok(!!json);
            assert.equal(json.length, 1);
            done();
        })
    });
});
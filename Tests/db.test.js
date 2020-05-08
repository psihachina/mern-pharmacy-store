var assert = require('assert');
const mongo = require("../utils/Connection");
const fs = require('fs');

describe('TEST MONGODB', function () {
    it('Test 1. Connect to mongodb', function (done) {
        mongo().then(({ client }) => {
            client.close();
            done();
        }).catch(done);
    });
});

it('Test 2. Get medicaments from db', done => {
    mongo().then(({ client, db }) => {
        const medicaments = db.collection('medicaments');

        medicaments.find().toArray().then(arr => {
            client.close();
            assert.notEqual(arr.length, 0);
            done();
        }).catch(done);

    }).catch(done);
});


it.skip('Test 3. Insert medicament to db', done => {
    mongo().then(({ client, db }) => {
        const medicaments = db.collection('medicaments');
        const obj = {
            Name: Math.random() + "",
            WordName: Math.random() + "",
            Type: Math.random() + "",
        }
        medicaments.insertOne(obj).then(arr => {
            client.close();
            done();
        }).catch(done)
    }).catch(done);
});

mongo().then(({ client, db }) => {
    const medicaments = db.collection('medicaments');
    medicaments.find().toArray().then(arr => {
        arr.slice(51, 100).forEach(element => {
            medicaments.findOneAndUpdate(element, { $set: { Category: "Category 1" } });
        });

        //client.close();
    });
})

mongo().then(({ client, db }) => {
    const medicaments = db.collection('medicaments');
    medicaments.find().toArray().then(arr => {
        arr.slice(101, 150).forEach(element => {
            medicaments.findOneAndUpdate(element, { $set: { Category: "Category 2" } });
        });

        //client.close();
    });
})

mongo().then(({ client, db }) => {
    const medicaments = db.collection('medicaments');
    medicaments.find("All").toArray().then(arr => {
        arr.slice(151, 200).forEach(element => {
            medicaments.findOneAndUpdate(element, { $set: { Category: "Category 3" } });
        });

        //client.close();
    });
})
    

it.skip('Test 4. Insert medicament to db from file', done => {
    mongo().then(({ client, db }) => {
        const text = fs.readFileSync('./test.json', 'utf8');
        const list = JSON.parse(text);
        const medicaments = db.collection('medicaments');

        medicaments.insertMany(list).then(arr => {
            client.close();
            done();
        }).catch(done)
    }).catch(done);
});

it.skip('Test 5. Remove first medicament from db', done => {
    mongo().then(({ client, db }) => {
        const medicaments = db.collection('medicaments');

        medicaments.findOne().then(x => {
            medicaments.deleteOne(x).then(result => {
                client.close();
                done();
            }).catch(done);

        }).catch(done)
    }).catch(done);
});

it.skip('Test 6. Remove all medicament from db', done => {
    mongo().then(({ client, db }) => {
        const medicaments = db.collection('medicaments');

        medicaments.deleteMany({}).then(x => {
            client.close();
            done();
        }).catch(done);

    }).catch(done);
});
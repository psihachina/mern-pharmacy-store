const mongo = require('../utils/Connection');

exports.getMedicaments = (req, res) => {
    const findObj = {}
    if(req.params.id){
        findObj._id = mongo.getObjectID(req.params.id);
    };

    mongo().then(({ client, db }) => {
        const medicaments = db.collection('medicaments');

        medicaments.find(findObj).toArray().then(arr => {
            res.json(arr.slice(0, 250));
            client.close();
        }).catch(err => res.json(err));
    }).catch(err => res.json(err));
}

exports.getOrders = (req, res) => {
    const findObj = {}
    if(req.params.id){
        findObj._id = mongo.getObjectID(req.params.id);
    };

    mongo().then(({ client, db }) => {
        const medicaments = db.collection('orders');

        medicaments.find(findObj).toArray().then(arr => {
            res.json(arr);
            client.close();
        }).catch(err => res.json(err));
    }).catch(err => res.json(err));
}

exports.getDeliveries = (req, res) => {
    const findObj = {}
    if(req.params.id){
        findObj._id = mongo.getObjectID(req.params.id);
    };

    mongo().then(({ client, db }) => {
        const medicaments = db.collection('deliveries');

        medicaments.find(findObj).toArray().then(arr => {
            res.json(arr);
            client.close();
        }).catch(err => res.json(err));
    }).catch(err => res.json(err));
}

exports.getCategories = (req, res) => {
    const findObj = {}
    if(req.params.id){
        findObj._id = mongo.getObjectID(req.params.id);
    };

    mongo().then(({ client, db }) => {
        const medicaments = db.collection('category');

        medicaments.find(findObj).toArray().then(arr => {
            res.json(arr);
            client.close();
        }).catch(err => res.json(err));
    }).catch(err => res.json(err));
}
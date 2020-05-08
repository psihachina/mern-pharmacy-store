const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;


function connection() {
    return new Promise((resolve, reject) => {
        MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
            .then(client => {
                const data = {
                    client,
                    db: client.db('farm')
                };
                resolve(data);
            })
            .catch(reject);
    });
};

connection.getObjectID = id => new mongo.ObjectID(id);

module.exports = connection;
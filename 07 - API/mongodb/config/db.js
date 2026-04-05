// config/db.js
const { MongoClient } = require('mongodb');
require('dotenv').config();
const _uri = process.env.MONGO_URI;
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
const dbConnection = (collection, cb) => {
    MongoClient.connect(_uri)
        .then(async (client) => {
            try {
                const db = client.db('aya').collection(collection);
                await cb(db); // ✅ wait for callback
            } finally {
                client.close(); // ✅ always close
            }
        })
        .catch((err) => {
            console.error('DB Connection Error:', err.message); // ✅ handle error
        });
};
dbConnection('students', async (db) => {
    const stu = await db.findOne({}); // ✅ with filter
    console.log(stu);
});

module.exports = dbConnection; // ✅ export only — no call here
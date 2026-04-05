// config/db.js
const path = require('path');
const { MongoClient } = require('mongodb');

require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const _uri = process.env.MONGO_URI;
if (!_uri) {
    console.error('Missing MONGO_URI in .env (expected at mongodb/.env)');
    process.exit(1);
}

const dbConnection = (collection, cb) => {
    MongoClient.connect(_uri)
        .then(async (client) => {
            try {
                const db = client.db('aya').collection(collection);
                await cb(db);
            } finally {
                client.close();
            }
        })
        .catch((err) => {
            console.error('DB Connection Error:', err.message);
        });
};
dbConnection('students', async (db) => {
    const stu = await db.findOne({ name: 'aya' });
    console.log(stu);
});

module.exports = dbConnection;

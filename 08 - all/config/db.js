const { MongoClient } = require('mongodb')
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
require('dotenv').config()

let client      // the single connection, shared everywhere
let db          // the database instance

const connectDB = async () => {
    client = await MongoClient.connect(process.env.MONGO_URI)
    db = client.db('nodejs')
}

const getCollection = (collection) => {
    if (!db) throw new Error('DB not connected yet!')
    return db.collection(collection)
}
 
const closeDB = async () => {
    if (client) await client.close()
}

module.exports = { connectDB, getCollection, closeDB }
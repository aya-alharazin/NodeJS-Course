const {MongoClient} = require('mongodb')
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
require('dotenv').config()
const dbConnection = (collection , cb)=>{
    
    MongoClient.connect(process.env.MONGO_URI)
    .then(async (client)=>{
        const db = client.db('nodejs').collection(collection)
        await cb(db)
        client.close()
    })
    .catch((err)=>{
        console.log(err);
    })
}


module.exports = dbConnection


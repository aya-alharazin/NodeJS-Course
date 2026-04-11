const {MongoClient} = require('mongodb')
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
require('dotenv').config()
let db;
const dbConnection = async ()=>{
    
    await MongoClient.connect(process.env.MONGO_URI)
    .then(async (client)=>{
        db = client.db('nodejs')
    })
    .catch((err)=>{
        console.log(err);
    })
}
const getCollection=(collection)=>{
    return db.collection(collection)
}


module.exports = {
    dbConnection,getCollection
}


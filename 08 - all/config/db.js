const {MongoClient} = require('mongodb')
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
require('dotenv').config()
const dbConnection = async (collection ,cb)=>{
    
    await MongoClient.connect(process.env.MONGO_URI)
    .then(async (client)=>{
        db = client.db('nodejs').collection(collection)
        await cb(db)
        client.close()

    })
    .catch((err)=>{
        console.log(err);
    })
}



module.exports = 
    dbConnection



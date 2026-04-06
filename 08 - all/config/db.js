const {MongoClient} = require("mongodb")
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
require('dotenv').config()
const _uri = process.env.MONGO_URI
const dbConnection = (collection,cb)=>{
    MongoClient.connect(_uri)
    .then(async (client)=>{
        const db = client.db('nodejs').collection(collection)
        await cb(db)
        client.close()
    })
    .catch((err)=>{
        console.log(err);
    })
}
dbConnection('books',async (collection)=>{
    const book = await collection.findOne({})
    console.log(book);
    
})


module.exports = dbConnection
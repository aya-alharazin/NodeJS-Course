const {dbConnection} = require('../config')
const getBooks = (req,res,next)=>{
    dbConnection('books',async (collection)=>{
        const books = await collection.find({}).toArray()
        res.json(books)
    })
}

module.exports = { getBooks }
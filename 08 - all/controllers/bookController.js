const {dbConnection} = require('../config')
const getBooks = (req,res,next)=>{
     dbConnection('books',async (collection)=>{
        const books = await collection.find({}).toArray()
        res.send(books)
    })
}

module.exports = {getBooks}
const {dbConnection} = require('../config')
const getBooks = (req,res,next)=>{
    dbConnection('books',(collection)=>{
        const books = collection.find({}).toArray()
        res.send(books)
    })
}

module.exports = {getBooks}
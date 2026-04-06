const {dbConnection} = require('../config')
const getBooks = (req,res,next)=>{
    const pageNumber = parseInt(req.query.page)
    if(isNaN(pageNumber)){
        res.status(400).json({
            status:false,
            message:"page not found"
        })
    }
    const limit = 1
    const skip = (pageNumber-1)*limit
     dbConnection('books',async (collection)=>{
        const books = await collection.find({}).limit(limit).skip(skip).toArray()
        res.send(books)
    })
}

const getBooksPageCount = (req,res,next)=>{
    dbConnection('books',async (collection)=>{
        const limit =1
        const count = await collection.count({})
        const noOfPages = Math.ceil(count/limit)
        res.status(200).json({
            "page Counts":noOfPages
        })
    })
}

const getBookById = (req,res,next)=>{
    const _id = req.params.id
    dbConnection('books',(collection)=>{
        collection.findOne({})
    })
    
}

module.exports = {getBooks,getBooksPageCount,getBookById}
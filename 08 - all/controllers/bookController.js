const {dbConnection} = require('../config')
const {ObjectId} = require('bson')
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
    const _id = new ObjectId(req.params.id)
    dbConnection('books', async (collection)=>{
        const book = await collection.findOne(_id)
        if(!book){
            res.status(404).json({
                "status":false,
                "message" :"Book Not Found"
            })
        }
        res.json(book)
        
    })
    
}

module.exports = {getBooks,getBooksPageCount,getBookById}
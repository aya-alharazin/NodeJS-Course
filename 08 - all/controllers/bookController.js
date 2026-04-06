const {dbConnection} = require('../config')
const {ObjectId} = require('bson')
const {createError} = require('http-errors')
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
    if(!ObjectId.isValid(req.params.id)){
        const error = createError(400,'Id is not valid')
        res.status(error.statusCode).json({
            status:false,
            message :error.message
        })
    }
    const _id = new ObjectId(req.params.id)
    dbConnection('books', async (collection)=>{
    try{
        const book = await collection.findOne(_id)
        if(!book){
            const error = createError(404,'book not found')
            res.status(error.statusCode).json({
                status:false,
                message :error.message
            })
        }
        res.json(book)

    }catch(err){
        const error = createError(500,err.message)
        res.status(error.statusCode).json({
            status:false,
            message :error.message
        })
    }        
    })
    
}

module.exports = {getBooks,getBooksPageCount,getBookById}
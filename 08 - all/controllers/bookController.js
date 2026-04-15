const {dbConnection} = require('../config')
const {ObjectId} = require('bson')
const createError = require('http-errors')
const {Book} = require('../models')
const getBooks = (req,res,next)=>{
    const pageNumber = parseInt(req.query.page)
    if(isNaN(pageNumber)){
        res.status(400).json({
            status:false,
            message:"page not found"
        })
    }
    Book.getBooks(pageNumber)
    .then((data)=>{
        res.status(200).json(data.data)
    })
    .catch((err)=>{
        return next(createError(500,err.message))
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
        const err = createError(400,'Id is not valid')
        next(err)
    }
    const _id = new ObjectId(req.params.id)
    dbConnection('books', async (collection)=>{
    try{
        const book = await collection.findOne(_id)
        if(!book){
            const err = createError(404,'book not found')
            next(err)
        }
        res.json(book)

    }catch(err){
        const error = createError(500,err.message)
        next(error)
    }        
    })
    
}

module.exports = {getBooks,getBooksPageCount,getBookById}
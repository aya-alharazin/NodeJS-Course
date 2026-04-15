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
    Book.getBooksPageCount()
    .then((data)=>{
        res.status(200).json({
            "page Counts":data.noOfPages
        })
    })
    .catch((err)=>{
        return next(createError(500,err.message))
    })
        
    
}

const getBookById = (req,res,next)=>{
    if(!ObjectId.isValid(req.params.id)){
        const err = createError(400,'Id is not valid')
        return next(err)
    }
    const _id = new ObjectId(req.params.id)
    Book.getBookById(_id)
    .then((data)=>{
        if(!data.status){
            return next(createError(404,"this book not found"))
        }
        res.status(200).json(data.book)
    })
    .catch((err)=>{
        return next(createError(500,err.message))
    })
    
    
}

module.exports = {getBooks,getBooksPageCount,getBookById}
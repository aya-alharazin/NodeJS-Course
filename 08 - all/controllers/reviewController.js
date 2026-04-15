const {Review} = require("../models");
const createError = require('http-errors')

const add = (req,res,next)=>{
    const reviewData = req.body;
     // _book_id , rating , comment
     reviewData._reviewer_id = req._reviewer_id

    const validation = Review.validate(reviewData)
    if(validation.error){
        return next(createError(400,validation.error.message))
    }





}
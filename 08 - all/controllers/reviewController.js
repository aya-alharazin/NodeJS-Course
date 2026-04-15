const {Review} = require("../models");
const createError = require('http-errors')
const {ObjectId} = require('bson')

const add = (req,res,next)=>{
    const reviewData = req.body;
     // _book_id , rating , comment
     reviewData._reviewer_id = req._reviewer_id

    const validation = Review.validate(reviewData)
    if(validation.error){
        return next(createError(400,validation.error.message))
    }

    review.reviewData._book_id = new ObjectId(review.reviewData._book_id)
    review.reviewData._reviewer_id = new ObjectId(review.reviewData._reviewer_id)
    const review = new Review(reviewData)
    review.save()
    .then((data)=>{
        if(!data.status){
            return next(createError(500))
        }
        res.status(200).json({
            status:true,
            data:review
        })
    })
    .catch((err)=>{

    })



}

module.exports = {
    add
}
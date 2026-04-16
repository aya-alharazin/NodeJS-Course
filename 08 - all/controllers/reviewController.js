const {Review,Book} = require("../models");
const createError = require('http-errors')
const {ObjectId} = require('bson');


const add = (req,res,next)=>{
    const reviewData = req.body;
     // _book_id , rating , comment
     reviewData._reviewer_id = req._reviewer_id

    const validation = Review.validate(reviewData)
    if(validation.error){
        return next(createError(400,validation.error.message))
    }

    
    
    const review = new Review(reviewData)
    console.log(review.reviewData._reviewer_id);
    review.reviewData._book_id = new ObjectId(review.reviewData._book_id)
    review.reviewData._reviewer_id = new ObjectId(review.reviewData._reviewer_id)
    console.log(review.reviewData._reviewer_id);
    review.save()
    .then((data)=>{
        if(!data.status){
            return next(createError(500))
        }
        Book.refreshAvgRating(review.reviewData._reviewer_id)
        // res.status(200).json({
        //     status:true,
        //     data:review
        // })
        return returnJson(res,200,true,"",review)
    })
    .catch((err)=>{

    })

    const remove = (req,res,next)=>{
       const _id =  new ObjectId(req.params.id);
       Review.getOne(_id)
       .then((result)=>{
            if(!result.status){
                return next(createError(404,))
            }
            const _book_id = result.data._book_id

            Review.remove
            .then((result)=>{
                 if(result.status){
                    // res.status(200).json(result)
                    returnJson(res,200,true,"",null)
                    Book.refreshAvgRating(_book_id)
                 }else{
                     return next(createError(500,result.message))
                 }
            })
            .catch((err)=>{
                  return next(createError(500,err.message))
            })









       })
       .catch((err)=>{
            return next(createError(500,err.message))
       })
       
    }

}

module.exports = {
    add,remove
}
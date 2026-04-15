const {dbConnection} = require('../config')
const {reviewValidator} = require('../validators')
class Review{
    constructor(reviewData){
        this.reviewData=reviewData
    }


    async save(){
         const collection = dbConnection.getCollection('reviews')
        try{
         await collection.updateOne(
            {
                _book_id:this.reviewData._book_id,
                _reviewer_id:this.reviewData._reviewer_id
            },
            {
                $set:{
                    _book_id:this.reviewData._book_id,
                    _reviewer_id:this.reviewData._reviewer_id,
                    rating:this.reviewData.rating,
                    comment:this.reviewData.comment    
                }
            },
            {
                upsert:true
            }

         )
         return{
            status:true
         }
        }catch(err){
            return{
                status:false,
                message:err.message
            }
        }



    }








    static validate(reviewData){
        const validation = reviewValidator.validate(reviewData)
        return validation
    }








}
module.exports=Review
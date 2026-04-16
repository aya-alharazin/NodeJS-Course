const { dbConnection } = require('../config')
const { getCollection } = require('../config/db')

class Book{
    constructor(bookData){
        this.bookData=bookData
    }

    static async getBooks(pageNumber){
         try{
         const limit =1
         const skip = (pageNumber-1)*limit
         const collection =dbConnection.getCollection('books')
         const books = await collection.find({}).limit(limit).skip(skip).toArray()
         return{
            data:books,
            status:true
         }
        }catch(err){
            return{
                status:false,
                message: err.message || 'retrieving books failed'
            }
        }
    }



      
    
     static async getBooksPageCount() {
        try{
        const collection = dbConnection.getCollection('books')
        const limit =1
        const count = await collection.count({})
        const noOfPages = Math.ceil(count/limit)
        return{
            status:true,
            noOfPages:noOfPages
        }
    }catch(err){
        return{
            status:false
        }
    }
    }


    static async getBookById (_id){
        
        
        const collection = dbConnection.getCollection('books')
        
        
        try{
            const book = await collection.findOne({ _id })
            if(!book){
                return {
                    status:false,
                    book:null
                }
            }
            return {
                status:true,
                book:book
            }
    
        }catch(err){
            return {
                status:false,
                message:err.message
            }
        }        
       
        
    }


    static async refreshAvgRating(_book_id){
        const collection =  dbConnection.getCollection('reviews')
        const reviews = await collection.find({_book_id:_book_id}).toArray()
        let sum = 0
        const count = reviews.length
        for(let i=0;i<count;i++){
            if(reviews[i].rating){
                sum+=reviews[i].rating
            }
        }
        const avg = sum/count
        const collection2 = await dbConnection.getCollection('books')
        collection2.updateOne(
            {_id:_book_id},
            {$set:{avg_rating:avg}}
        ).toArray()

    
    }









}

module.exports = Book
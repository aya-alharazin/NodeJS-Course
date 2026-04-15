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
        }catch{
            return{
                status:false,
                message:'retreiving books failed'
            }
        }
    }





    
    
    
    
        
    













}

module.exports = Book
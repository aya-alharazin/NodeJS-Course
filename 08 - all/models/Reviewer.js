const {dbConnection} = require('../config')
class Reviewer{
    constructor(ReviewerData){
        this.ReviewerData=ReviewerData
    }


    async save(){
        try{
        await dbConnection('reviewers' ,async  (collection)=>{
            await collection.insertOne(this.ReviewerData)
        })
        return {
            status:true
        }
        }catch(e){
            return {
                status:false,
                message:e.message
            }
        }
    }
}
module.exports = Reviewer
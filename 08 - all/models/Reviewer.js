const {dbConnection} = require('../config')
class Reviewer{
    constructor(reviewerData){
        this.reviewerData=reviewerData
    }


    async save(){
        try{
            
        const collection =  dbConnection.getCollection('reviewers')
        
        await collection.updateOne(
            {name:this.reviewerData.name,_user_id:null},
            {$set:{_user_id:this.reviewerData._user_id}},
            {upsert:true}
        )
        return {
            status:true
        }
        }catch(err){
            return {
                status:false,
                message:err.message
            }
        }
    }
}
module.exports = Reviewer
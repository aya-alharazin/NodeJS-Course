const {dbConnection} = require('../config')
const {UserValidator,loginValidator} = require("../validators")
const {hashSync,compareSync} = require('bcryptjs')
const{Reviewer} = require("../models")
class User{
    constructor(userData){
        this.userData=userData
    }
 


    async save(){
        const hashedPassword = hashSync(this.userData.password)
        this.userData.password=hashedPassword
        const collection = dbConnection.getCollection('users')
        try{
        const result = await collection.insertOne(this.userData)
        return {
            _user_id :result.insertedId,
            status:true
        }
    }catch(err){
            return {
                status:false,
                message:err.message
            }
        }
        
    }

    
    


    
    static validate(userData){
        const validationResult = UserValidator.validate(userData)
        return validationResult
    }

    async isExsit(){
        const collection = dbConnection.getCollection('users')
        try{
        const user = await collection.findOne({
            '$or':[
                {email:this.userData.email},
                {username:this.userData.username}
            ]
        })
        if(!user){
            return{
                check:false
            }
        }else{
            if(user.email === this.userData.email && user.username === this.userData.username){
                return{
                    check:true,
                    message:'username and email already exist'
                }      
            }
            else if(user.email === this.userData.email){
                return {
                    check:true,
                    message:"email already exsit"
                }
            }else if(user.username === this.userData.username ){
                return {
                    check :true,
                    message:"username already exsit"
                }
            }
        }
    }catch(err){
        return {
            message:err.message,
            status:false
        }
    }

        
        
    }

 



     static async login (loginData){
        const validationResult = loginValidator.validate(loginData)
        if(validationResult.error){
            return {
                status:false,
                message:validationResult.error.message,
                code:400
            }
        }
        const collection = dbConnection.getCollection('users')
        try{
            const user = await collection.findOne({username:loginData.username})
            if (!user) 
            return {
                status:false,
                data:null,
                code:401, 
                message:"username is wrong"
            }
            const isMatch = compareSync(loginData.password,user.password)
            if(isMatch) {
                const sscollection = dbConnection.getCollection('reviewers')
                user.reviewer = await sscollection.findOne({_user_id:user._id})
                
                return {
                    status:true,
                    data:user,
                    code:200,
                    
                }

            }
            else
            return {
                status:false,
                data:null,
                code:401 ,
                message:"your password is wrong"
            }
        }catch(err){
            return {
                status:false,
                message:err.message,
                code:500
            }
        }
    }












}






// user.save()

module.exports=User
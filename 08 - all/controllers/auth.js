const {User} = require('../models')
const{Reviewer} = require("../models")
const createError = require('http-errors')
const jwt= require('jsonwebtoken')
const {readFileSync} = require('fs')
const signup = (req,res,next)=>{
    const userData = req.body;
    const validation = User.validate(userData)
    if(validation.error){
        return next(createError(400,validation.error.message))
    }
    
    const user =new User(userData);
    user.isExsit()
        .then((result)=>{
            if(result.check){
                return next(createError(409,result.message))
            } 
            // save the user
            user.save()
            .then((result)=>{
                res.status(201).json({
                    status:true,
                    message:"User created successfully"
                })
                const reviewer = new Reviewer({
                    _user_id:result._user_id,
                    name:userData.name,
                    email:userData.email                    
                })
                reviewer.save()
                .then((status)=>{
                    console.log('review save is done');
                    
                    if(status.status){
                        console.log('reviewer created successfully');
                        
                    }else{
                        console.log(status.message);
                        
                    }
                })
            })
            .catch((err)=>{
                return next(createError(500,err.message))
            })
            

        })
        .catch((err)=>{
            next(createError(500,err.message))
        })
       
}

const login = (req,res,next)=>{
    User.login(req.body)
    .then((data)=>{
        if(data.status){
            const jwtSecretKey =readFileSync('./config/private.key')
           const token = jwt.sign(
            {
                _id:data.data._id,
                _reviewer_id:data.data.reviewer._id
            },jwtSecretKey
           )
            res.status(200).json({
                token:token,
                status:true
            })
        }else{
            return next(createError(data.code,data.message))
        }
    })
    .catch((err)=>{
        return next(createError(500,err.message))
    })

}


module.exports = {signup,login}







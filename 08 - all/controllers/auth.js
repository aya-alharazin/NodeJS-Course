const {User} = require('../models')
const{Reviewer} = require("../models")
const createError = require('http-errors')
const signup = (req,res,next)=>{
    const userData = req.body;
    const validation = User.validate(userData)
    if(validation.error){
        next(createError(400,validation.error.message))
    }
    
    const user =new User(userData);
    user.isExsit()
        .then((result)=>{
            if(result.check){
                next(createError(409,result.message))
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
                next(createError(500,err.message))
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
           
            res.status(200).json(data.data)
        }else{
            next(createError(data.code,data.message))
        }
    })
    .catch((err)=>{
        next(createError(err.code,err.message))
    })

}


module.exports = {signup,login}







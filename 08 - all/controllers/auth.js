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
                console.log(result.check);
                next(createError(409,result.message))
            } 
            console.log(result.check);
            // save the user
            user.save()
            .then((status)=>{
                if(status.status){
                    res.status(201).json({
                        status:true,
                        message:"user has been created successfully"
                    })
                    const reviewer =new Reviewer(
                        {user_id: status._user_id,
                         name:userData.name,
                        email:userData.email}
                    )
                    reviewer.save()
                    .then((status)=>{
                        console.log(status);
                        
                    })
                }else{
                    next(createError(500,status.message))
                }
                
            })
        })
        .catch((err)=>{
            console.log('hi');
            
            next(createError(500,err.message))
        })
       
}
module.exports = signup
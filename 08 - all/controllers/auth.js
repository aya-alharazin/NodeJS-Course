const {User} = require('../models')
const {createError} = require('http-errors')
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
                next(createError(409),result.message)
            }
            // save the user
            user.save()
            .then((status)=>{
                if(status.status){
                    res.status(201).json({
                        status:true,
                        message:"user has been created successfully"
                    })
                }else{
                    next(createError(500,status.message))
                }
                
            })
        })
        .catch((err)=>{
            next(createError(500,err.message))
        })
       
}
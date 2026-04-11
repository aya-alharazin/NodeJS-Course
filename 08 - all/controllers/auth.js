const {User} = require('../models')
const {createError} = require('http-errors')
const signup = async (req,res,next)=>{
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
        })
        .catch((err)=>{
            next(createError(500,err.message))
        })
        await user.save()
}
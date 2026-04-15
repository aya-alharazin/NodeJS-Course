const jwt = require('jsonwebtoken')
const createError = require('http-error')
const {readFileSync} = require('fs')
module.exports=(req,res,next)=>{
    const authHeader = req.get('Authorization')
    if(!authHeader){
        return next(createError(401,'User not authenticated'))
    }

    const token = authHeader.split(' ')[1]
    const secretKey = readFileSync('./config/private.key')
    try{
    const decode = jwt.verify(token,secretKey)
    req._user_id = decode._id
    req._reviewer_id = decode._reviewer_id
    next()
    }catch(err){
        return next(createError(401,"hi guys"))
    }
}
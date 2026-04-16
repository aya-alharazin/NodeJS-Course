const express = require('express')
const createError = require('http-errors')
const app = express()
const routes = require('./routes')
const middlewares = require('./middlewares')
const {returnJson} = require('../my_modules/json_response/index')
global.returnJson = returnJson
/* To Handle All Un Handeled Errors or Promises*/
process.on('unhandledRejection',(reason)=>{
    console.log(reason);
    
    process.exit(1)
})
middlewares.global(app)
routes(app)
// Not Found Handler
app.use((req,res,next)=>{
    const error = createError(404,"aya")
    next(error)
})

app.use((err,req,res,next)=>{
    // res.json({
    //     status:err.statusCode,
    //     message:err.message
    // })
    return returnJson(res,err.statusCode,false,err.message,null)
})

module.exports = app
const express = require('express')
const app = express()
const routes = require('./routes')
routes(app)
/* To Handle All Un Handeled Errors or Promises*/
process.on('unhandledRejection',(reason)=>{
    console.log(reason);
    
    process.exit(1)
})

app.get((err,req,res,next)=>{
    res.json({
        status:err.statusCode,
        message:err.message
    })
})

module.exports = app
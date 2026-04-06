const express = require('express')
const app = express()
const routes = require('./routes')
routes(app)
/* To Handle All Un Handeled Errors or Promises*/
process.on('unhandledRejection',(reason)=>{
    console.log(reason);
    
    process.exit(1)
})



module.exports = app
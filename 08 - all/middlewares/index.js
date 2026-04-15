const express = require('express')
module.exports = {
    global: (app)=>{
        app.use(express.json())
    } ,
    auth: require('./auth')
}
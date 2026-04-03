const express = require('express');
const app = express();
app.get('/',(req,res,next)=>{
    res.redirect('/admin');
})

app.get('/admin',(req,res,next)=>{
    res.redirect('/');
})
module.exports = app;
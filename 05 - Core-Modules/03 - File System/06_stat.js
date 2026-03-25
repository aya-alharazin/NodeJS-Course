/*
    stat it will return  informations about specific file
*/
const {stat} = require('fs')
stat('data/text.txt' , (err,stat)=>{
    console.log(stat);
})

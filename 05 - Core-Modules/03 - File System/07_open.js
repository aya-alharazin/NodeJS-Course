const {open} =require('fs');
// This function test if this file exsit or not if not it will return error
// if exsit it will return the buffered content
// it is normal open function that will open a file .
// we can check if the file is exsit before reading and
// writing to it.
open("data/text.txt",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})
const {writeFile,open} =require('fs')

open('data/story.txt','a+' ,(err,fd)=>{
    if(err){
        console.log(err);
        return;
    }
    writeFile(fd ,'it starts by Aya' ,(err)=>{
        if(err){
            console.log(err);
            
        }
    })
})
const {opendir} = require('fs')
opendir("./" , async (err,dir)=>{
    for await (let dirent of dir){
        console.log(dirent.name);
    }
})
/*
 here the callback itself is async function 
 So read dir operation consist of two operations at first
 we need to open the dir and this is async operation and the second part is
 reading the content of directory and this also async operation and also
 we need to handle it using async await
 */
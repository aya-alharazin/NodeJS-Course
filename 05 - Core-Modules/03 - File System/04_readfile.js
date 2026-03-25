const {readFile , readFileSync} =require("fs");

readFile("data/text.txt","utf8",(err,data)=>{
  if(err){
    console.log(err);
    return;
  }
    console.log('async',data);
})

const content = readFileSync('data/text.txt' ,'utf8')
console.log('sync',content);

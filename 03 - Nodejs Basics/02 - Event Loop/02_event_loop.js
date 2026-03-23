const { pbkdf2 } =require('crypto')
const http=require('http')
const start = Date.now()
const hash =()=>{
    pbkdf2('123456**','##',10000,1000,'sha256',()=>{
        console.log("Hash",Date.now()-start);
        
    })
}

const server =http.createServer((req,res)=>{
    res.end("Aya Here!")
})
server.listen(5050,()=>{
    console.log('OS is listening on port 5050');
    
})
console.log("HI");
setImmediate(()=>{
    console.log("Hi there");
    
})


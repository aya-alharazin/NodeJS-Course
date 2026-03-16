const { pbkdf2 } =require('crypto')
const start = Date.now()
const hash =()=>{
    pbkdf2('123456**','##',10000,1000,'sha256',()=>{
        console.log("Hash",Date.now()-start);
        
    })

}

hash()
hash()
hash()
hash()
hash()
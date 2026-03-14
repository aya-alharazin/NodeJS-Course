const fs= require("fs")
const getProductByName=(name)=>{
    return new Promise((resolve,reject)=>{
        const data = fs.readFileSync('../data/products.json')
        const json = JSON.parse(data)
        const product = json.find((product)=>product.name===name)
        if(product){
            resolve(product)
        }else{
            err = {message:"sorry product is not found"}
            reject(err)
        }
    });
}

getProductByName("Tea Ahmad")
    .then(product=>{
        console.log(product);
        
    })
    .catch(err=>{
        console.log(err.message);
        
    })
    
products = require('./data/products.json')
async function getProductById(id){
    pro = products.find(product=>product.id===id)
    if(pro) return pro;
    throw new Error("Product not found")
}

getProductById(222)
    .then(product=>{
        console.log(product)
    })
    .catch(err=>{
        console.log(err);
        
    })
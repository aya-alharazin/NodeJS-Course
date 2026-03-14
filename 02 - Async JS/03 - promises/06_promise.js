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


const getStoreById=(id)=>{
    return new Promise((resolve,reject)=>{
        const data = fs.readFileSync('../data/stores.json')
        const json = JSON.parse(data)
        const store = json.find((store)=>store.id===id)
        if(store){
            resolve(store)
        }else{
            err = {message:"sorry product is not found"}
            reject(err)
        }
    });
}
const getCityByName=(name)=>{
    return new Promise((resolve,reject)=>{
        const data = fs.readFileSync('../data/cities.json')
        const json = JSON.parse(data)
        const city = json.find((city)=>city.name===name)
        if(city){
            resolve(city)
        }else{
            err = {message:"sorry product is not found"}
            reject(err)
        }
    });
}
// getProductByName("Tea Ahmad")
//     .then(product=>{
//         getStoreById(product.store_id)
//             .then(store=>{
//                 getCityByName(store.city)
//                     .then((city)=>{
//                         console.log(city);
//                     })
//                     .catch(err=>{
//                         console.log(err.message);
//                     })
//             })
//             .catch(err=>{
//                 console.log(err.message);
//             })
        
//     })
//     .catch(err=>{
//         console.log(err.message);
        
//     })
// Promise chain   
getProductByName("Tea Ahmad")
.then((product)=>{
    return getStoreById(product.store_id)
})
.then((store)=>{
    return getCityByName(store.city)
})
.then((city)=>{
    console.log(city);
})
.catch((err)=>{
    console.log(err.message);
    
})
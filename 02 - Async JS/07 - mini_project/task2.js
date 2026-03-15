const products = require('./data/products.json')
const stores = require('./data/stores.json')
const cities = require('./data/cities.json')
async function getProductById(id){
    pro = products.find(product=>product.id===id)
    if(pro) return pro;
    throw new Error("Product not found")
}
async function getStoreById(id){
    sto = stores.find(store=>store.id===id)
    if(sto) return sto;
    throw new Error("Product not found")
}
async function getCityById(id){
    let cit = cities.find(city=>city.id===id)
    if(cit) return cit;
    throw new Error("Product not found")
}
async function getProductFullDetails(id){
    let product = await getProductById(id)
    let store = await getStoreById(product.store_id)
    let city = await getCityById(store.city_id)
        return {
            product:product,
            store:store,
            city:city
        }
}

getProductFullDetails(1)
    .then(full=>console.log(full)
    )
    .catch(err=>console.log(err)
    )

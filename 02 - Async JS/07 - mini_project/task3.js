const products = require('./data/products.json')
const stores = require('./data/stores.json')
const cities = require('./data/cities.json')
async function getProductById(id){
    let pro = products.find(product=>product.id===id)
    if(pro) return pro;
    throw new Error(`Product with ${id} not found`)
}
async function getStoreById(id){
    let sto = stores.find(store=>store.id===id)
    if(sto) return sto;
    throw new Error("not found")
}
async function getCityById(id){
    let cit = cities.find(city=>city.id===id)
    if(cit) return cit;
    throw new Error("not found")
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

getProductFullDetails(99)
    .then(full=>console.log(full)
    )
    .catch(err=>console.log(err.message)
    )



// Task 3 — Error handling (The real world)
// Call getProductFullDetails with an id that doesn't exist (e.g. id: 99). Make sure your error is caught and prints a friendly message — not a crash.
// js// Expected output:
// "Error: Product with id 99 not found"
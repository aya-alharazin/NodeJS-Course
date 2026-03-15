// Task 4 — Parallel loading (Bonus challenge)
// Write getAllProductsWithStores() — fetches all products and for each one fetches its store, all in parallel using Promise.all. Return an array of { product, store } objects.
// js// Expected output:

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

async function getAllProductsWithStores(){
  const result = await Promise.all(
    products.map(async (product) => {
      const store = await getStoreById(product.store_id)
      return { product, store }
    })
  )
  return result
}


getAllProductsWithStores().then(console.log)















// [
//   { product: { name: 'Tea Ahmad', ... },   store: { name: 'Ahmad Store', ... } },
//   { product: { name: 'Coffee Blend', ... }, store: { name: 'Blend Shop', ... } },
//   { product: { name: 'Milk Tea', ... },    store: { name: 'Ahmad Store', ... } }
// ]

// 💡 Hint: Use products.map(p => getStoreById(p.store_id)) inside Promise.all


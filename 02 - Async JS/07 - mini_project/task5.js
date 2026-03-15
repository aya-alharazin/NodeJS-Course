const fs = require('fs');
const { promisify } = require('util')

const getProductsPromise = promisify(fs.readFile)
getProductsPromise('./data/products.json', 'utf8')
  .then(text => {
    const json = JSON.parse(text)
    console.log(json);
    
  })
  .catch(err => console.log(err.message))
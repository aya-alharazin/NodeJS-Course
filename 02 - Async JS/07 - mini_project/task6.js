const fs = require('fs');
const { promisify } = require('util')
const getOrdersPromise = promisify(fs.readFile)
async function getOrdersByProductId(productId){
    text = await getOrdersPromise('./data/orders.json', 'utf8')
    const orders = JSON.parse(text)
    ordersByProduct=orders.filter(order=>order.product_id===productId)
    console.log(ordersByProduct);
        
      }

getOrdersByProductId(1)
      .then(orders=>{
        console.log(orders);
        
      })
      .catch(err=>{
        console.log(err.message);
        
      })



// console.log(__filename); // /home/user/project/app.js
// console.log(__dirname);  // /home/user/project
const res= await fetch('https://www.ipchicken.com/')
console.log( await res.text());


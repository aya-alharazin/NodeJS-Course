const { createServer } = require("http");

/*
It will help me to make socket
*/
const server = createServer()
server.listen(5000);
server.on('connection',(socket)=>{
    console.log(socket);
    
})
const { log } = require('console');
const http=require('http')

const server = http.createServer((req,res)=>{
    switch(req.url)  {
        case '/':
            res.end(`
                <html>
                    <head>
                        <titlt>My App</title>
                    </head>
                    <body>
                        <h1>welcome welcome</h1>
                    </body>
                </html>
                `)
            break;
        case '/admin':
            res.end('This is admin page');
        break;
        case '/user':
            res.end('This is user page');
        break;
        default:
            res.end('default');
            
    }  

    }
)

// to run server
server.listen(5050,()=>{
    console.log('Hi Finally I learn Node');
    
})
//localhost:5050
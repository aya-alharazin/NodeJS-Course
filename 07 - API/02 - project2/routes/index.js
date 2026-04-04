module.exports = (app)=>{
    app.get('/',(req,res,next)=>{
        res.send('<h1>Welcome to my API</h1>')
    })
    app.get('/about',(req,res,next)=>{
        res.send('<h1>About page</h1>')
    })
    app.get('/contact',(req,res,next)=>{
        res.send('<h1>Message Received</h1>')
    })
}
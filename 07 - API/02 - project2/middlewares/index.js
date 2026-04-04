module.exports=(app)=>{
    app.use((req,res,next)=>{
        console.log(req.headers);
        next()
    })
}
module.exports = (app)=>{
    app.use((req,res,next)=>{
        if(req.query.name==='aya'){
            next();
        }else{
            res.status(500).json({
                message:"You are not Aya ! Whare is Aya ?"
            })
        }
    })
}
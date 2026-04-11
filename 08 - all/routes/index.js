const bookRouter = require('./bookRoutes')
const authRouter = require('./authRoute')
module.exports = (app)=>{
    app.use('/books',bookRouter)
    app.use('/auth',authRouter)
}  
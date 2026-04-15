const bookRouter = require('./bookRoutes')
const authRouter = require('./authRoute')
const reviewRouter = require('./reviewRoutes')
module.exports = (app)=>{
    app.use('/books',bookRouter)
    app.use('/auth',authRouter)
    app.use('/review',reviewRouter)
}  
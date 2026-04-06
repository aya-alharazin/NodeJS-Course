const bookRouter = require('./bookRoutes')
module.exports = (app)=>{
    app.use('/books',bookRouter)
}
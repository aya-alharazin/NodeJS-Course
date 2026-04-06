const app = require('../app')
const router = require('./bookRoutes')
app.use('books',router)

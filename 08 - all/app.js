const express = require('express')
require('./routes')
const app = express()
routes(app)

module.exports=app
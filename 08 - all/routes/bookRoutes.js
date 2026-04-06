const {getBooks} = require('../controllers')
const {Router} = require('express')
const router=Router()
router.get('/',getBooks)
module.exports = router
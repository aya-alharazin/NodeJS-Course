const {bookController} = require('../controllers')
const {Router} = require('express')
const router=Router()
router.get('/',bookController.getBooks)
module.exports = router
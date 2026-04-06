const {Router} = require('express')
const {bookController} = require('../controllers')
const router = Router()
router.get('/',bookController.getBooks)
router.get('/books-count',bookController.getBooksPageCount)
router.get('/:id',bookController.getBookById)


module.exports = router 
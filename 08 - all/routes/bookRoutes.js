const {Router} = require('express')
const {bookController} = require('../controllers')
const {auth} = require('../middlewares')
const router = Router()
router.get('/',auth,bookController.getBooks)
router.get('/books-count',bookController.getBooksPageCount)
router.get('/:id',bookController.getBookById)


module.exports = router 
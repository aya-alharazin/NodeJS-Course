const {Router} = require('express')
const {reviewController}=require('../controllers')
const {auth} = require('../middlewares')
const router = Router()
router.post('/add',auth,reviewController.add)

module.exports = router
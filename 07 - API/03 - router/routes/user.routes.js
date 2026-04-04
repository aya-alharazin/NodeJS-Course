const {Router} = require('express')
const {userController} = require('../controllers')
const router = Router()
router.get('/',userController.getUsers)
.get('/info',userController.getInfo)
module.exports = router
const {Router} = require('express')
const {signup} =require('../controllers')
const router= Router()
router.post('/signup',signup)

module.exports=router
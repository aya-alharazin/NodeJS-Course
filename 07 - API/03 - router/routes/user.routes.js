const {Router} = require('express')
const router = Router()
router.get('/',(req,res,next)=>{
    res.send('<h1>This is the whole suers</h1>')
})
.get('/info',(req,res,next)=>{
    res.send('<h1>This is the info of the users</h1>')
})
module.exports = router
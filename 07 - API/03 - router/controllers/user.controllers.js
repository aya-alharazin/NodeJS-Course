const getUsers = (req,res,next)=>{
    res.send('<h1>This is the whole suers</h1>')
}
const getInfo = (req,res,next)=>{
    res.send('<h1>This is the info of the users</h1>')
}
module.exports={
    getUsers,
    getInfo
}
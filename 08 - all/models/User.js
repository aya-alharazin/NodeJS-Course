const {dbConnection} = require('../config')
const {UserValidator} = require("../validators")
class User{
    constructor(userData){
        this.userData=userData
    }

    async save(){
        try{
            await dbConnection('users',async (collection)=>{
                await collection.insertOne(this.userData)
            })
            return {
                status:true
            }
        }catch(err){
            return {
                status:false,
                message:err.message
            }
        }
    }
    static validate(userData){
        const validationResult = UserValidator.validate(userData)
        return validationResult
    }

    async isExsit(){
        return new Promise((resolve,reject)=>{
            dbConnection('users',async(collection)=>{
                try{
                const user = await collection.findOne({
                    '$or':[
                        {email:this.userData.email},
                        {username:this.userData.username}
                    ]
                })
                if(!user){
                    resolve({
                        check:false
                    })
                }else{
                    if(user.email === this.userData.email && user.username === this.userData.username){
                        resolve({
                            check:true,
                            message:"email and username already exsit"
                        })
                    }
                    else if(user.email === this.userData.email){
                        resolve({
                            check:true,
                            message:"email already exsit"
                        })
                    }else if(user.username === this.userData.username ){
                        resolve({
                            check:true,
                            message:"email already exsit"
                        })
                    }
                }
        }catch(e){
            reject(e)
        }
    })
        })
        
    }
}


const user = new User({
    name :"ahmed",
    email:"alarazinaya@gmail.com",
    username:"hh1",
    password:"22323"
})
user.save()
.then((status)=>{
    console.log(status);
    
})



// user.save()

module.exports=User
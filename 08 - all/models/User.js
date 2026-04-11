const {db} = require('../config')
const {UserValidator} = require("../validators")
class User{
    constructor(userData){
        this.userData=userData
    }

    save(){
        dbConnection('users',async (collection)=>{
            await collection.insertOne(this.userData)
        })
    }
    static validate(userData){
        const validationResult = UserValidator.validate(userData)
        return validationResult
    }

    async isExsit(){
        await db.dbConnection()
        const collection = await db.getCollection('users')
        const user = await collection.findOne({
            '$or':[
                {usename:this.userData.usename},
                {email:this.userData.email}
            ]
        })
        if(user){
            return user
            
        }
    }
}


const user = new User({
    name :"aya",
    email:"alharazinaya@gmail.com",
    username:"aassssssssssssssssssssssssssssssaa",
    password:"22323"
})
user.isExsit()
    .then((user)=>{
        console.log(user);
        
    })


// user.save()
const {dbConnection} = require('../config')
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

    isExsit(){
        dbConnection('users',async(collection)=>{
            const user = await collection.findOne(
                {'$or': [{email:this.userData.emai},
                {username:this.userData.username} ]
                }
            )
            if(user){
                return {check:flase}
            }
            return {check:true}

            
        })
    }
}


const user = new User({
    name :"aya",
    email:"alharazinaya@gmail.com",
    username:"aassssssssssssssssssssssssssssssaa",
    password:"22323"
})
const val = User.validate();
console.log(val);


// user.save()
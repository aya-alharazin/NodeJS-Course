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
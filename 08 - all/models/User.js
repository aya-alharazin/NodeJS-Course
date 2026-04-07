const {dbConnection} = require('../config')
class User{
    constructor(userData){
        this.userData=userData
    }

    save(){
        dbConnection('users',async (collection)=>{
            await collection.insertOne(this.userData)
        })
    }
}


const user = new User({
    name :"aya",
    email:"alharazinaya@gmail.com",
    username:"ahh1",
    password:12345
})
user.save()
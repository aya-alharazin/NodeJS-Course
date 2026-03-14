function sayHello(name){
    console.log("Hello",name);
}
sayHello("aya");
sayHello("elbaz");
sayHello("20");
sayHello("true");
//arrow Function

const multiply=function(a,b){
    return a*b;
}
console.log(multiply(10,20));

const div= a =>   a*5;

const person = {
    firstName:"aya",
    lastName:"Alharazin",
    gpe:20,
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }
}
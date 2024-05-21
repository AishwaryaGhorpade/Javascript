//2 ways to create objects 1.singleton & 2.object Literals
//Singleton:creates single instance ,created by constructor
//Literals:multiple instances

//createing obj by singleton
//Object.create  or
//const obj1=new Object()

//object Listerals
const JsUser={
    name:"aish",   //or "name":"aish",
    age:18,      //"age":18,
    1:"riya",    //"1":"riya"
    2:"diya",
    "location":"Jaipur",
    email:"aish@gmail.com",
    isLogin:false,
    arr:[1,"Aish",2.3]
}
//means key takes as string,even if we not write it on double quotes

//accessing
console.log(JsUser.email);  
//console.log(JsUser[email]);  //error:key(email) take it as string in ""
console.log(JsUser["email"])  //prefer   key can be given as string 
console.log(JsUser["location"])
console.log(JsUser.location);

//symbol decrare in object (imp)
const sym=Symbol("Aish");
const obj={
[sym]:"mykey"
}
console.log(obj)
console.log(obj[sym]); //don't use double quotes while accessing symbol
console.log(typeof sym)

//changing value of key
JsUser.email="riya@gmail.com";

Object.freeze(JsUser)  //obj is freeze,now value cannot be change
JsUser.email="diya@gmail.com";
console.log(JsUser)

//adding ele in objects
const tinder={};
tinder.email="aish@gmail.com"
tinder.name="Aish";
tinder.age=23;
console.log(tinder)

//creating objects in onjects
const app={
    email:"aishghorpade",
    username:{
        fullname:{
            fname:"Aish",
            lname:"ghorpade"
        }
    }
}
console.log(app)
console.log(app.username)
console.log(app.username.fullname)
console.log(app.username.fullname.fname)

//combining multiple objects
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}
//const obj4={obj1,obj2,obj3}
//console.log(obj4)
 const obj4=Object.assign({},obj1,obj2,obj3)  //{} is the target object where source-objects(obj1,2,3) ele will store
 console.log(obj4)

 const target={1:"a",2:"b"}
 const source={3:"a",4:"b"}
 const ans=Object.assign(target,source)

console.log(ans)
console.log(target)
console.log(ans===target)

//combing using spread operator
const obj5={...obj1,...obj2,...obj3}
console.log(obj5)

const login=[   //loggin is as array consist of object type
    user1={
        email:"riya@gmail.com",
        pass:"123"
    },
    user2={
        email:"diya@gmail.com",
        pass:"1234"
    }
]
console.log(login[1].email) 

//keys,values,entries
const user={
    name:"aish",
    age:23,
    clg:"dsce"
}
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty("age"))
console.log(user.hasOwnProperty("age2"))
  
//object destructuring
console.log(user.name)  //instead of doing this,destrucre this
const {name}=user  //now we can use name
console.log(name)
//destructuring by short name
const {name:n}=user  //now we can use n
console.log(n)
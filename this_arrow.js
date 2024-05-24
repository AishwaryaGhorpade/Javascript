const username={
    name:"riya",
    age:5,
    WelcomeUser:function(){
        console.log(`${this.name},welcome to website`)
        console.log(this)
    }
    
}
username.WelcomeUser()
username.name="yash"
username.WelcomeUser()

//imp
console.log(this)  ///In node,o/p will be {} but  in browser console o/p will be window object(bcz browser have window object) 

//this keyword in function
//this keyword work in objects but this key word will not wrk in functions
function one(){
    console.log(this)   
} 
one()    //returns global...

function two(){
    const fname="Aish"
    console.log(this.fname)    //o/p:undefined
} 
two() 
//In arrow function also we get same o/p for this keyword such as global and undefined


//Arrow Function
const greting=()=>{
    console.log("Welcome")
}
greting()

//if return stmt is one there in 1 stmmt no need of curly braces and return keyword
const greting2=()=> console.log("Welcome2")

greting2()   //fun calling

//using parameters
const adding=(num1,num2)=>{
    return num1+num2;
}
console.log(adding(3,4))

//or
const adding2=(num1,num2)=>num1+num2;  //return stmt:(num1+num2)
console.log(adding2(3,4))
//or
const adding3=(num1,num2)=>(num1+num2);  //return stmt:(num1+num2) ,  () means return
console.log(adding3(3,4))

const adding4=(num1,num2)=>{Name:"Diya"}
console.log(adding4(3,4))   //undefined(bca return stmt shoud be return in ()curly braces)

const adding5=(num1,num2)=>({Name:"Diya"})  
console.log(adding5(3,4))




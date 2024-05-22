//Functions
function greeting(){
    console.log("Good morning!");
}
greeting()

//passing parameters in functions
//add two numbers
function sum(num1,num2){
    console.log(num1+num2)
}
sum()
sum(3,4)
sum(3,null)
sum(3,"a")
sum(3,"4")
const res=sum(3,4)
console.log(res)  //o.p->undefined bcz function sum is not returning anything

//return keyword
function add(num1,num2){
    return num1+num2
}
const ans=add(3,4)
console.log(ans)
console.log(add(4,6))

function login(username){
    if(username===undefined)  //or we can give condition this also-> if(!username){}
    {
        console.log("please enter username")
        return 
    }
    return `${username} logged in`
}
console.log(login());
console.log(login("Aish"))

//default parameter value
function login(username="Yash"){
    if(username===undefined)  //or we can give condition this also-> if(!username){}
    {
        console.log("please enter username")
        return 
    }
    return `${username} logged in`
}
console.log(login());
console.log(login("Aish"))

//Rust operator
function calculateAllNos(...num){
    return num;
}
console.log(calculateAllNos(100,200,300,400,500))

function calculateAllNos2(num1,num2,...num){
    return num;
}
console.log(calculateAllNos2(100,200,300,400,500))

//passing object in function
function PassObject(obj)
{
    console.log(`name is ${obj.name} and age is ${obj.age}`)
}
const user={
    name:"aish",
    age:23
}
PassObject(user)

//direct passing obj while calling function
PassObject({
    name:"diya",
    age:3
})

//passing array in functions 
function secondValue(arrayname){
    return arrayname[1];
}
const arr=[1,2,3,4]
console.log(secondValue(arr))

//direct array passing while calling function
console.log(secondValue([11,22,33,44,55]))

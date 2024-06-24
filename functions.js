//Functions
function greeting(){
    console.log("Good morning!");  //Good morning!
}
greeting()

//passing parameters in functions
//add two numbers
function sum(num1,num2){
    console.log(num1+num2)
}
sum()      //NAN
sum(3,4)   //7
sum(3,null)  //3
sum(3,"a")   //3a
sum(3,"4")   //34
const res=sum(3,4)  
console.log(res)  //o.p->undefined bcz function sum is not returning anything   o/p->7  undefined

//return keyword
function add(num1,num2){
    return num1+num2
}
const ans=add(3,4)
console.log(ans)      //7
console.log(add(4,6))   //10

function login2(username){
    if(username===undefined)  //or we can give condition this also-> if(!username){}
    {
        console.log("please enter username")
        return 
    }
    return `${username} logged in`
}
console.log(login2());     //please enter username   undefined  
console.log(login2("Aish"))   //Aish logged in

//default parameter value
function login(username="Yash"){
    if(username===undefined)  //or we can give condition this also-> if(!username){}
    {
        console.log("please enter username")
        return 
    }
    return `${username} logged in`
}
console.log(login());  //Yash logged in
console.log(login("Aish"))  //Aish logged in

//Rust operator
function calculateAllNos(...num){
    return num;
}
console.log(calculateAllNos(100,200,300,400,500))  //[ 100, 200, 300, 400, 500 ]

function calculateAllNos2(num1,num2,...num){
    return num;
}
console.log(calculateAllNos2(100,200,300,400,500))  //[ 300, 400, 500 ]

//passing object in function
function PassObject(obj)
{
    console.log(`name is ${obj.name} and age is ${obj.age}`)
}
const user={
    name:"aish",
    age:23
}
PassObject(user)  //name is aish and age is 23

//direct passing obj while calling function
PassObject({
    name:"diya",          //name is diya and age is 3
    age:3
})

//passing array in functions 
function secondValue(arrayname){
    return arrayname[1];
}
const arr=[1,2,3,4]
console.log(secondValue(arr))  //2

//direct array passing while calling function
console.log(secondValue([11,22,33,44,55]))  //22

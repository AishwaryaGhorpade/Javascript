console.log("hello");
//variables
m1=5;
m2=5.6454;
name1="Aish";
isFollow=true;
age1=null;
price1=undefined;
let value1=Symbol("123");
let value2=Symbol("123");
console.log(value1===value2)
//BigInt,Symbol

//conversion
//res:
//string => NAN
//number inside string => number
//boolean  => number  (true=1,false=0)
let score="33";
let scoreInNo=Number(score);
console.log(scoreInNo);

let score1="33aa";
let scoreInNo1=Number(score1);
console.log(scoreInNo1);

let score2=true;
let scoreInNo2=Number(score2);
console.log(scoreInNo2);

//res:
//number => boolean (1=true,0=false)
//number => string
//"" =>NAN
let marks=45
let marksInstring=String(marks);
console.log(marksInstring);
console.log(typeof marksInstring)

let str1="Hello"
let str2=" Aish"
let str3=str1+str2
console.log(str3);
console.log(1+"2")
console.log("1"+2)
console.log("1"+2+1)
console.log(1+2+"1")



//rules of variables
a1=23;
//1a=23; no. shoudn't come first
//console=23  //reversed word cann't use
Console=23;  //console and Console,both r diff
name_="aish";
Name$="Aish";

//var declaration
var age=23;
var age=45;
var age=98;    //var can re-declare and upadate.Blobal scope

let n1=44;
//let n1=33;     let cannot be re-declare but it can be upadate. block scope
n1=33;
let n3;   //op-undefined

const n2=23;   //to declare constant,cannot re-declare and upadate

//objects
const student={
    name:"Aish",
    age:23,
    cgpa:9.09,
    isHealthly:true
};
console.log(student);
console.log(typeof student);
console.log(student["name"]);  //2 way to access obj key values
console.log(student.name);
   
student["name"]="Rohit";    //object key can be upadated but  object name cannot(student) bcz its const
//student{};  

//operators
//arithmetic op
let a=5;
let b=2;
console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a / b =",a/b);
console.log("a % b =",a%b);
console.log(2**3);

//urinary op
//a++,++a,a--,--a
a++;
console.log(a);

//asignment op
//=,+=,-+,*=,/=,%=,**=
a+=4
console.log(a);

//comparision op
//>,<,<=,>=,==,===
console.log(5==5);
console.log(5!=5);
console.log(5=="5");   //==(equal to),just check the data equality
console.log(5==="5");  //===(strickly equal to),checks the the data with data type equality
console.log(5===5);
console.log("2">0);  //true
console.log("02">0);  //true
console.log(null>0);  //false
console.log(null==0);  //false
console.log(null>=0);  //true
//for undefine variable with all comparision operator output is false
console.log(undefined>0)  //false

//logical op
//&&,||,!
console.log("5>0 && 5==5",5>0 && 5==5);

//condition stmt
//switch stmt

//ternary op
let age4=23;
let result=age4>=18 ? "can vote" : "cannot vote";
console.log(result);

//get user input and check a no. is multiple of 5 or not
// let num=prompt("Enter a number:");
// if(num%5==0){
//     console.log("yes");
// }
// else{
//     console.log("No");
// }

//loops
//for loop
let fullName="Aishu";
for(let i=0;i<5;i++)
{
    console.log(fullName[i]);
}
console.log("hello Aish\n Welcome");

//while loop
let i=1;
while(i<=5){
    console.log(i);
    i++;
}
//do while loop
let k=1;
do{
    console.log(k);
    k++;
}while(k<=5);

//for of loop
let Name="Diya";
for(let i of Name){
    console.log(i);
}
console.log("hello","Aish");
console.log("hello"+" "+"Aish");

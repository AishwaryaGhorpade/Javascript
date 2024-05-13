console.log("Aishwarya"+" Ghorpade");  //string concatenation
//instead of doing this use backthick this is called as string interpolition.
let fname="Aishwarya";
let lname="ghorpade";
let age=23;
console.log(`Hello,My name is ${fname} ${lname} and my age is ${age}`);

//string functions
//onther way of declaring string 
const gameName=new String("Aishwarya");
console.log(gameName);
//how to use string functions
//syntax:stringName.__proto__.stringunction
console.log(gameName.__proto__);

//functions
console.log(gameName.length);  //length of string
console.log(gameName.toUpperCase());  //for uppercase
console.log(gameName.toLowerCase())  //for lowercase
console.log(gameName.charAt(2));    //charat
console.log(gameName.indexOf('s'));  //indexof

const str=gameName.substring(0,4);  //substring
console.log(str);
const str1=gameName.slice(-8,-3);   //in slice we can use neg index but in substring we cannot
console.log(str1);

let str2="    Hello world   ";
console.log(str2);
console.log(str2.trim());  // trim removes extra white spaces of both left side and right side spaces.
//we can use trimstart()[for left space removing] and trimend()[for right space removing] function also


let str3="aish04%gmail.com";
console.log(str3.replace("%","@"));  //replace

//includes fun
console.log(str3.includes("aish"));  //op-true
console.log(str3.includes("riya"));  //op-false

//split method
//It return an array-split method split the string in seaparator
let str4="aish-riya-diya-yash";
console.log(str4.split('-'));
let str5="aish1 riya2-diya3 yash4";
console.log(str5.split(' '));









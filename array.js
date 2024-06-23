//Array
//2 ways for creating array
const arr=[1,2,3,4];
console.log(arr);
const arr2=new Array(2,4,6,8,9);
console.log(arr2);

//array can stores different datatypes
const names=["aish" ,23, true,23.5];
console.log(names)

//accessing element from array
console.log(arr[0]);
console.log(arr[1]);

//array methods
arr.push(5);        //push
console.log(arr);

arr2.pop();         //pop
console.log(arr2);

arr.unshift(9);    //unshift:add 9 ele at 1st position
console.log(arr);

arr.shift();     //shift: remove 1st element
console.log(arr);

console.log(arr.includes(5));   //true
console.log(arr.includes(19));  //false

console.log(arr.indexOf(3));  //returns the ele(3) index
console.log(arr.indexOf(19));  //if ele(19) is not there in the arr ,retuens -1 

const newarr=arr.join();
console.log(arr);       //[1,2,3,4,5]  return an object
console.log(newarr);    // 1,2,3,4,5   return an string
console.log(typeof arr);   //object
console.log(typeof newarr); //string

//diff b/w slice and splice
const myarr=[0,1,2,3,4,5];
console.log("A",myarr);     //A [0,1,2,3,4,5]

const myn1=myarr.slice(1,3);
console.log(myn1);            //[1,2]
console.log("B",myarr);       //B [0,1,2,3,4,5]

const myn2=myarr.splice(1,3);
console.log(myn2);               //[1,2,3]
console.log("C",myarr);          //C [0,4,5]
 
let myarr2=[0,1,2,3,4,5]
const myn3=myarr2.splice(1,3);  
console.log(myarr2.splice(1,3));  //[4,5]
console.log(myn3);               //[1,2,3]
console.log("C",myarr2);          //C [0]

//concat and push
const even=[2,4,6,8];
const odd=[1,3,5,7,9];
even.push(odd);  //push odd array as next element  
console.log(even);    //[ 2, 4, 6, 8, [ 1, 3, 5, 7, 9 ] ]
console.log(even[4]);  //[ 1, 3, 5, 7, 9 ]
console.log(even[4][2])  //5

const even2=[2,4,6,8]; 
const odd2=[1,3,5,7,9];
const nums2=even2.concat(odd2);  //concat return new array
console.log(nums2);  // [ 2, 4, 6, 8, 1, 3, 5, 7, 9]

//spread operator:It is a one more way of concating 2 or more arrays
const a=[1,2,3];
const b=[4,5,6];
const c=[7,8,9];
const res=[...a, ...b,...c];
console.log(res);  //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//flat method
const array=[1,2,3,[4,3,2],4,5,6,[4,7,8,[9,4,5]]];
const anotherarray=array.flat(Infinity);
console.log(anotherarray);  //[ 1, 2, 3, 4, 3, 2, 4, 5, undefined ]

console.log(Array.isArray("Aish"));  //checking array or not  //false  bca it is string type
console.log(typeof "Aish")  //string
console.log(Array.from("Aishwarya"));  //from:It converts to array   [ 'A', 'i', 's', 'h', 'w', 'a','r', 'y', 'a']
const score1=100;
const score2=200;
const score3=300;
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]
//console.log(...score1,...score2,...score3)  //error
//spread operator only used for iterable objects



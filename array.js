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

console.log(arr.includes(5));  
console.log(arr.includes(19));

console.log(arr.indexOf(3));  //returns the ele(3) index
console.log(arr.indexOf(19));  //if ele(19) is not there in the arr ,retuens -1 

const newarr=arr.join();
console.log(arr);
console.log(newarr);
console.log(typeof arr);
console.log(typeof newarr);

//diff b/w slice and splice
const myarr=[0,1,2,3,4,5];
console.log("A",myarr);

const myn1=myarr.slice(1,3);
console.log(myn1);
console.log("B",myarr);

const myn2=myarr.splice(1,3);
console.log(myn2);
console.log("C",myarr);

//concat and push
const even=[2,4,6,8];
const odd=[1,3,5,7,9];
even.push(odd);  //push odd array as next element
console.log(even);
console.log(even[4]);
console.log(even[4][2])

const even2=[2,4,6,8];
const odd2=[1,3,5,7,9];
const nums2=even2.concat(odd2);  //concat return new array
console.log(nums2);  

//spread operator:It is a one more way of concating 2 or more arrays
const a=[1,2,3];
const b=[4,5,6];
const c=[7,8,9];
const res=[...a, ...b,...c];
console.log(res);

//flat method
const array=[1,2,3,[4,3,2],4,5,6[4,7,8,[9,4,5]]];
const anotherarray=array.flat(Infinity);
console.log(anotherarray);

console.log(Array.isArray("Aish"));  //checking array or not
console.log(Array.from("Aishwarya"));  //from:It convers to array

const score1=100;
const score2=200;
const score3=300;
console.log(Array.of(score1,score2,score3));



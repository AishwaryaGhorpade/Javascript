//primitive datatypes are store in stack
//non-primitive(reference) datatypes are stored in heap

//difference between stack and heap memory

//stack using primitive datatypes
let userId="aish@gmail.com";
let userId2=userId;   //userId2 makes the copy the value of userId
console.log(userId);
console.log(userId2);
userId2="riya@gmail.com";
console.log(userId);  //userId will not change the value bcz userId=userId2 means just makes the copy the value,both are different
console.log(userId2); 

//Heap uses Non-primitive datatypes
const obj1={
   name:"Aish",
   age:23
};
const obj2=obj1;
console.log(obj1.name);
console.log(obj2.name);
obj1.name="riya";
console.log(obj1.name);
console.log(obj2.name);

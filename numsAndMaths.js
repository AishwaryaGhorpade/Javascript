const score=400;
console.log(score);

//another way to declare number
const balance=new Number(100);
console.log(balance);
console.log(typeof balance);
console.log(balance.toString().length);
console.log(balance.toString());
console.log(balance.toFixed(2));
let percentage=88.888767;
console.log(percentage.toFixed(3));
console.log(balance.toFixed(2));

let n1=23.28534;
console.log(n1.toPrecision(3));
let n2=123.98;
console.log(n2.toPrecision(3));
let n3=1123.9876;
console.log(n3.toPrecision(3));

const hundreds=1000000;
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString());

//+++++++++++++++++++++++ Maths++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(4.3));
console.log(Math.round(4.8));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.max(3,4,5,5,6));
console.log(Math.min(3,4,5,5,6));
console.log(Math.random());   //it generate random between 0-1
console.log(Math.floor(Math.random()*10)+1);

//to generate random number using range
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);  //formula
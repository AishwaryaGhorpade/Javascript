//dates
let myDate=new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.getDay());
console.log(myDate.getDate());
console.log(myDate.getTime());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let createdDate=new Date(2023,0,23);  //month starts from 0 ,jan:0,feb:1,....
console.log(createdDate.toString()); 

let anotherDate=new Date(2024,4,12,5,3);
console.log(anotherDate.toLocaleString());

let myDate2=new Date("2023-01-14");  //(yyyy-mm-dd)in this pattern month starts form 1, jan:1,feb:2...
console.log(myDate2.toLocaleString());

let myDate3=new Date("01-14-2024");    //(mm-dd-yyyy)
console.log(myDate3.toLocaleString());

//calculating time from miliseconds to seconds
console.log(Date.now()); //in miliseconds
console.log(Date.now()/1000);  //in seconds
console.log(Math.floor(Date.now()/1000));  //floor value

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth());  //jan:0,feb:1..
console.log(newDate.getDay());   //mon:1,tue:2...

newDate.toLocaleString('default',{
    weekday:"long"
})




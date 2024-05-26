//high order loops are for of and for in
//for of
const arr=[1,2,3,4,5]
for(const i of arr){
    console.log(i)
}

//map itration
const mymap=new Map()   //it is a type of object ,contains unique key-pair values
mymap.set("name","aish")
mymap.set("age",23)
mymap.set("clg","DSCE")
mymap.set("name","yash")
console.log(mymap)
console.log(typeof mymap)

//map iteration using for of loop
for(const ans of mymap){   //return array of key and value
    console.log(ans)
}

for(const [key,value] of mymap){
    console.log(key,":-",value)
}

//object cannot be iterate by using for of loop
const obj={
    name:"aish",
    age:23,
    city:"mudhol"
}
console.log(obj)
// for(const [key,value] of obj){     //error:obj is not iterable
//     console.log(key,":-",value)
// }

//object can be iterate by usingfor in loop
for(const ans in obj){   //ans holds key
  console.log(ans)
}
for(const ans in obj){   //ans holds key
    console.log(`key is ${ans} and value is ${obj[ans]}`)
}

//for in loop in array
const myarr=[2,4,6,8]
for (const key in myarr) {    //key holds index
    console.log(key)
}
for (const key in myarr) {    //key holds index
    console.log(myarr[key])
}

//object iterate using for in loop
const obj2={
    'a':1,
    'b':2,
    'c':3
}
for (const key in obj2) {
    console.log(key)
}
for (const key in obj2) {
    console.log(key,":-",obj2[key])
}

//for each loop 
const coding=["cpp","python","javascript","java"]
coding.forEach(function (item){
    console.log(item)
})
coding.forEach((item)=>{
    console.log(item)
})

function printme(item){
    console.log(item)
}
coding.forEach(printme)

//foreach holds item, index , complete array also
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

//object inside array
const array1=[
    {
        name:"yash",
        age:1
    },
    {
        name:"diya",
        age:3
    },
    {
        name:"Riya",
        age:5
    }
]
array1.forEach((item)=>{
    console.log(item)
    console.log(item.name)
    console.log(item.age)
})
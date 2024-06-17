//foreach loop cannot return the value,it returns undefined
const nums=[1,2,3,4]
const ans=nums.forEach((item)=>{
    return item;
})
console.log(ans)         //undefined

const ans2=nums.forEach((item)=>item>2)
console.log(ans2)     //unsdefined

//using filter we can retun value
const res=nums.filter((item)=>item>2)
console.log(res)  

const res2=nums.filter((item)=>{
   return item>2
})                       //if we start scope then should use return keyword
console.log(res2)  

//foreach for filtering
const newarr=[]
nums.forEach((item)=>{
    if(item>2){
        newarr.push(item)
    }
})
console.log(newarr)

const books=[
    {
        name:"bookone",
        genre:'history',
        publish:2021
    },
    {
        name:"booktwo",
        genre:'general',
        publish:1990
    },
    {
        name:"bookthree",
        genre:'history',
        publish:1987
    },
    {
        name:"bookfour",
        genre:'science',
        publish:2000
    },
    {
        name:"bookfive",
        genre:'science',
        publish:1985
    }

]
const userbooks=books.filter((book)=>{
    return book.genre==="history"
})
console.log(userbooks)

//multiple condition
const userbooks2=books.filter((book)=>{
    return book.genre==='history' && book.publish>=2000
})
console.log(userbooks2)

//map function
const numbers=[1,2,3,4,5]
const numList=numbers.map((num)=>{
    return num+10
})
console.log(numList)

//chaining:we can use multiple functions like map,filter etc
const numList2=numbers
          .map((num)=>num*10)
          .map((num)=>num+1)
          .filter((num)=>num>20)
console.log(numList2)

//reduce function
const list=[1,2,3]
const sum=list.reduce(function (acc,curvalu){
    console.log(`acc is ${acc} and curvalue ${curvalu}`)
    return acc+curvalu
},0)         //initialing acc=0
console.log(sum)

const sum2=list.reduce((acc,curvalu)=>acc+curvalu,0)
console.log(sum2)
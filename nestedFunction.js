function one()
{
    const name="aish"
    function two(){
        const age=23
        console.log(name);
        console.log(age);
    }
    console.log(name);
    //console.log(age);
    two()
}
//console.log(name);
one()

//two ways to declare function
console.log(addone(5))  //no error
function addone(num){
    return num+1
}
console.log(addone(4))

//2nd way
// console.log(addtwo(7))  //error
const addtwo=function(num){
    return num+2
}
console.log(addtwo(4))
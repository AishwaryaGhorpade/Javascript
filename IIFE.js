//IIFE:Immediately invoked function Expression
//sometime will get problem from global scope potution,to remove global scope polution(like variable,etc) IIFE used.


//syntax: (function)(execution)
(function one(){
    console.log("hello World")
})();

//if multiple IIFE functions are there then functions must be end with ;
//If Function have name then its named IIFE else simple IIFE
//IIFE function with parameters
(function add(n1,n2){
    console.log(n1+n2);
})(4,5);

//IIFE function using arrow function
( () =>{                     //simple IIFE
    console.log("hello")
})()

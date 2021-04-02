//Hoisting

//using the fat arrow syntax requires you to define
//functions can be defined after the call

console.log(
    add2(2, 5)
)
const add2 = (x, y) => { 
    return x + y
}// arrow functions don't get hoisted - this won't work with console.log ahead of the function


console.log(
    add2(2, 5), adder(2, 5)
)
function adder(x, y){ 
    return x + y
}// functions do get hoisted - meaning the computer will 'proofread' your function first, find the variable, and move forward with running the code. SO you can put the console.log ahead of the function in the document




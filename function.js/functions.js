//functions care about what comes in and what goes out

// name (data) => data out
//f(x) = x*x // square function
/* 
Way one:
<keyword> <yourName> (<what I need to work>){
    // What I do
    return <something> // what I want to give back
}

*/


//Two ways to write a function in js
function sqr(x){
    return x * x // 5*5
}
console.log(sqr(5))

//console.log(sqr(5)) can also be written as:
//let result = sqr(5)
//console.log(result)


//Fat arrow function or lambda function
//all 3 of these are valid:

let aSqr = () => {
    return x * x // explicit return
}

let bSqr = (x) => x * x
let cSqr = x => x * x // implicit return
let bMult = (x, y) => x * y

function greet(){ // This needs no parameters to work
    console.log("Hello world")
}

greet() // returns Hello world

function betterGreet(fName){ // this is a one parameter function
    console.log("Hello " + fName)
}
betterGreet("Nellie") // returns Hello Nellie // passes in one argument



let createFullName = (fName, lName) => {return `${fName} ${lName}`}
let FullName = createFullName("Justin", "Ahmann")
console.log(FullName) // returns Justin Ahmann


function add2(x, y) {
    return x + y
}
console.log(add2(3, 5)) // returns 8
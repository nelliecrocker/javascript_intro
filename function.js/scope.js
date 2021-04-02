// Let Const Var ... others
let x = 5 //let respects code blocks
            //let will expose the variable to its scope and any inner scope
const favNumber = 42 // const can't be reassigned
//favNum = 50 // breaks code

var z = 10 // for now these are =
y = 5 // and should I say equally bad

x = 9 // x is being reassigned(previously declared) <- this is fine

// Scope
if (true){ // this is a code block
    let x = 8 // x in here is not the x on line 2
}
console.log(x)

for (let i = 0; i < 10; i++){ // let limits where the variable lives and how it works
console.log(i)
}
//console.log(i) // i has been garbage collected

const myFunc =  //almost always use const with declaring a function because you don't want it to change

for (var j = 0; j < 10; j++){ 
    console.log(j)
}
console.log(j)
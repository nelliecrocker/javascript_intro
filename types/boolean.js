// What is a boolean?
// they are either true or false
// allow us to branch code

/* x = 5   never do this
var x = 5  dont do this either
let x = 5  when you might change the value
const x = 5   when you want the value to stay the same*/

/* Creating a new variable:
declaration & initialization */

//declaration
let y;
//initialization / variable assignment
y = 5;

// How can we make a boolean?
let x = Boolean(5) // Function that turns something to a bool
x = Boolean(0) // reassignment
console.log(x) // returns as false

let z = false; // not the same as 'string'; one is of type string, one is of type boolean
z = true;
console.log(typeof z) // returns as boolean

let result = 5 > 4
console.log(result)

/* Different ways to create boolean values:
== checks for equality
<=
<
>=
>
&& returns true if both (a && b) are true
|| returns true if either (a || b) are true
*/

let flippedBool = !true // ! is called bang, read as not true (! true; ! = not); turns it into its opposite
console.log(flippedBool) // returns false (bang makes it not true)


//truthy and falsy; truthy are expressions which evaluates to boolean true value and falsy evaluates to boolean false value

//truthy 'test', [1,2], { test:5}, 1
testResult = Boolean([1,2])
console.log(testResult)

//falsey 0, "", {}, null, undefined, NaN
let falseyTest = Boolean(0)
console.log(falseyTest)


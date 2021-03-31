// Conditional Statements
/* 
Conditionals are used to execute a piece of code if a condition is true.
They allow our code to make decisions and carry out actions based on those decisions.
 */

//3 main types
// -If statements
// -Switches
// -Ternaries

//If statements
let mathResult = 2 + 2 === 4;
console.log(mathResult) // returns true

if (mathResult) console.log('This equates to true')

//Block Body + Else

if (mathResult) {
    console.log('This equates to true');
} else {
    console.log('This equates to false')
}

//Chaining if/else statements
//else ifs allow us to provide a new condition to test if the conditions above are not met.

let tempF = 80

if (tempF > 95) {
    console.log("It's hot!");
} else if (tempF > 50) {
    console.log("It's warm!");
} else if (tempF >= 32) {
    console.log("It's chilly!");
} else ("I cannot provide a temperature.")

//Testing multiple conditions

let myName = 'Nellie';
let age = 32;

if (myName === 'Nellie') {
    console.log('name logged');
} else if (age === 32) {
    console.log('Age Logged');
} else if (myName === 'Nellie' && age === 32) {
    console.log('Name & Age Logged');
}

// Switches
// Run a block of code based on different cases
// something can run if something else is met as true
// use break statements to tell the code its done running (break;)

let tempG = 30;

switch (true) {
    case tempG > 95:
        console.log("It's hot!");
        break;
    case tempG > 50:
        console.log("It's Warm!");
        break;
    case tempG > 32:
        console.log("It's chilly!");
        break;
        default:
            console.log("I cannot provide the weather");
};

let dog = 'lab';

switch(dog){
    case 'husky':
        console.log("The husky jumped in the snow");
        break;
        case 'lab':
            console.log('the lab caught the ball');
            break;
            case 'shepherd':
                console.log("the shepherd wagged its tail");
                break;
}


//Ternaries
// Condition ? True : False

let lightSwitch = true;

lightSwitch ? console.log('Lights are on') : console.log('Lights are off');

let tempH = 45

tempH > 95 ? console.log('it is hot') : 
tempH > 50 ? console.log('it is warm') :
tempH > 30 ? console.log('it is cold'):
console.log('I cannot provide the weather');


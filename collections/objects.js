//Objects
 
// key/value pairs
// syntax:
// {
//     k1: v1,
//     k2: v2
// }

// keys can be in " " but don't have to be if they are valid variable names (they don't start with a number or have invalid characters or has spaces)

let obj1 ={
    name: "justin"
}
let obj2 ={
    "name": "Amit"
}

//There are 2 ways to get things out of objects "dot" notation and "square bracket" notation
 
 console.log(obj1.name) // returns justin -- ask for the key and you get back the value
 console.log(obj1["name"]) // returns justin

 let car = {
     make: 'Jeep',
     model: 'Wrangler',
     year: 2020,
     miles: 10_000,
     owners: ["Amy", "Josh"] // objects can hold more than just a primitive type
 }
 console.log(car.miles) // returns 10,000
console.log(car["miles"]) // returns 10,000
console.log(car.owners) // returns ['Amy', 'Josh']
console.log(car.owners[1]) // returns 'Josh' because it is the first index in the array

let person ={
    fName: 'Justin',
    lName: 'Ahmann',
    fullName: function() {
        return `${this.fName} ${this.lName}` // using a method (function inside of objects)
    },
    greet: function(greetWord){
        return `${greetWord}, ${this.fName}`
    }
}
console.log(person.fullName()) // returns Justin Ahmann  - this is a function as an object
console.log(person.greet("Hello")); // returns Hello, Justin

//objects can be built up incrementally. This demos hows we can add new keys through assignment

let builderObj = {} // an empty object
console.log(builderObj); // returns {}
builderObj.name = "Justin"
builderObj['age'] = 28
builderObj.greet = function(greetWord){
    return `${greetWord}, ${this.name}`
}
console.log(builderObj); // returns { name: 'Justin', age: 28 }
console.log(builderObj.greet("Hello")); // returns Hello, Justin





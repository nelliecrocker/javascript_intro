// For .. in Loop
/* 

legend:
    keyword = 'for'
    var = some temporary word you use to refer to the current item
    collection = some collection you want to go through ex .. array or object or strong

<keyword>(<var> in <iterable>){
    // do something
}

*/

let person = {
    name: "Justin",
    age: 28
}
//A look ahead
// console.log(person.name)
// console.log(person["name"])

for(let property in person){
    console.log(property)
    console.log(person[property]) // a good use of a for in loop
}

let randomNums = [1, 9, 30, 31, 11, 29, 53]
for(let rand in randomNums){
    //console.log(rand)
    console.log(randomNums[rand])
}

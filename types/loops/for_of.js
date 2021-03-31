// For .. of loop
/*
legend:
    keyword = 'for of'
    var = some temporary word you use to refer to the current item
    collection = some collection you want to go through ex .. array or object or string

    NOTE: this is better usually for arrays and strings if you want the items

<keyword>(<var> of <collection>){
    // do something
}
*/

let students = ['amy', 'adam', 'blake', 'circe', 'drew']
for (let student of students){
    console.log(student)
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
for (let letter of alphabet){
    console.log(letter)
}
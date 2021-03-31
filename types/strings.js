//single line comment

console.log("this is text, and a string")

/* multi-line comment
allows us to write non code in code files that may be useful */

//strings have certain requirements
let str_a = "This is a double quote string" // use this if you have quoted text within a quote
console.log('This is \nnew')
// \n creates a new line
// \ is an escape for the next character
// \\ is a tab

let str_b = 'this is a single quote strong'

//use this to add data into a string
let str_c = `this is a backtick quote string`
//^ this is a template string - use ${} to plug in data

let f_name = 'Justin'
let l_name = 'Ahmann'

let full_name = f_name + l_name // reads as JustinAhmann
let template_full = `${f_name} ${l_name}` // reads as Justin Ahmann

//just mentioning this, we will talk more later
let str_d = string(5)

let multi_line1 = 'this is a long string' +
'and I want it on many lines'

let multi-line2 = 'this is also a long string \
and I want it on many lines'


let demo_str = 'This is a demo'
let result = demo_str.splice(3)

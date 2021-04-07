//Arrays
//Arrays are used to store multiple values in a single variable.
//There are array methods that allow us to traverse, as well as mutate the data being stored within the array.
//Array are 0 indexed, first value will have an index of 0, and the last item will have an intex of the array length-1


let arr = [ 'first', 'second', 'third'];

console.log(arr[arr.length-1]);

let arr2 = Array(3)
console.log(arr2.length);

// Foreach

let boardGames = ['Monopoly', 'Sorry', 'Risk', 'Clue'];

boardGames.forEach(function(game) {
    console.log(game)
})

//Methods

//Array.push()
// Add an element to the end of an array

let shoppingList1 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList1.push('coffee'))
console.log(shoppingList1) // adds coffee after oranges

//Array.pop()
// remove the last element in the array, and it will return that element

let shoppingList2 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
shoppingList2.pop()
console.log(shoppingList2) // removes oranges from array

//Array.unshift()
//Adds a new element to the beginning of an array

let shoppingList3 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
shoppingList3.unshift('coffee')
console.log(shoppingList3) // adds coffee before celery

//Array.shift()
//Remove the first from the array and return that element

let shoppingList4 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
shoppingList4.shift('coffee')
console.log(shoppingList4) // switches coffee for celery

//Array.map()
//Transforms the elements in the original array by calling the given function once for each element in the array

let shoppingList5 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
shoppingList5.map((item) => {
item.toUpperCase
})
console.log(shoppingList5) // turns all items into upper case

//Array.filter()
// Creates a new array with only the elements that pass the test in a given function

let shoppingList6 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList6.filter(item => item.startsWith('l'))); //creates a new array with only the items starting with the letter L // 'limes', 'lemons'

//Array.find()
//Returns the first element in an array that passes a test given as a function

let shoppingList7 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList7.find(item => item.startsWith('l'))); // returns limes since it is the first item that starts with an L

//Array.reduce()
//Executes a given function for each value of the array and returns a single value - takes a bunch of thigns and turns them into one

let shoppingList8 = ['celery', 'limes', 'lemons', 'salt', 'oranges']

let costs = [2.00, 3.00, 4.00, 5.00]
console.log(costs.reduce((acc, currentValue) => {
    return acc + currentValue
}));

costs.reduce((acc,currentValue)=> {
    console.log(acc, currentValue)
    return acc + currentValue;
})

let costs2 = [1, 1, 1, 1, 1];
console.log(costs2.reduce((acc, currentValue)=> {
    return acc + currentValue;
},10)); // returns 15

//Array.includes()
//determines whether an array has a specific element

let shoppingList9 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList9.includes('limes')); //returns boolean of true
console.log(shoppingList9.includes('beef')); //returns boolean of false

//Array.indexOf()
//search the array for a specific element and returns its first index, and it will return -1 if the element is not found

let shoppingList10 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList10.indexOf('salt'));//returns 3 meaning it does exist and the index is at 1. If it did not exist, it would show -1

//Array.findIndex()
//Returns the index of the first element in an array that passes the test in a given function
//Returns -1 when the element is not found

let shoppingList11 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList11.findIndex(item => item.startsWith('o'))); //returns 4 since orange is at 4 - if an element is not found it will return -1

//Array.every()
//checks if all elements in an array pass a test given as a function. If there is 1 elements that returns a false value, the function returns false and does not check the rest of the elements
let shoppingList12 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList12.every(item => item.startsWith('l')));//returns false because not every item starts with L
console.log(shoppingList12.every(item => item.length >1)); // returns true because each item is greater than 1

//Array.concat()
//merge two or more arrays, and returns a new array

let shoppingList13 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
let shoppingList14 = ['eggs', 'sugar']

console.log(shoppingList13.concat(shoppingList14)); // returns one array with all items listed

//Array.slice()
//selects a part of an array and returns a new array. selects the elements starting at the provided start argument(index value), and ends at, but does not include the provided end argument

let shoppingList15 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList15.slice(1,3)); // returns ['limes, 'lemons'] because it is index 1 and 2. It shops at index 3 but is not listed


//Array.splice()
//Add/removes elements in an array and returns the removed elements.
//  First argument takes in an integer that specifies at what index to add/remove the elements
//  Second argument takes in the number of items to be removed.
//  Optional third element takes in the new elements to be added to the array.

let shoppingList16 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
shoppingList16.splice(2,1)
console.log(shoppingList16); // removes lemons because lemons is at the second index and only 1 item is specified to be removed

let shoppingList17 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList17.splice(2,1, 'cherries')); // removes lemons and adds cherries in its place

//Array.sort()
//sorts the items in an array. The sort order can either be alphabetic or numeric, and either ascending or descending. By default sort() orders the values as strings in alphabetic and ascending order. Can take in a compare function which indicates if you want to sort by ascending or descending values

let shoppingList18 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList18.sort()); // returns all items in alphabetical order

let costs3 =[3,2,67,5]
console.log(costs3.sort((a , b) => a - b ));


//Array.reverse()
//reverses the order of the elements in an array

let shoppingList19 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList19.reverse()); // returns salt, oranges, limes, lemons, celery

//Array.toString()
//convert an array into a string

let shoppingList20 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList20.toString()); // returns all items in a string

let stringArr = shoppingList20.toString()
console.log(typeof stringArr); // returns string

//Array.join()
//converts the elements of an array into a string. Can accept an optional parameter. "Separator" which indicates how the elements will be separated. Default separator is a comma.

let shoppingList21 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList21.join('!, and')); // returns celery! andlimes! andlemons!, andsalt!, andOranges

//Spread operator
// the spread operator, indicated by '...' e dots, expands the contents of an array and takes them out of the array structure.

let shoppingList22 = ['celery', 'limes', 'lemons', 'salt', 'oranges']
arr2 = [1,2,3,4]
let values1 = [... shoppingList22, arr2]
console.log(values1); // returns new array with all of the values pulled out





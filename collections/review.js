//Say you have a list of numbers and you want 2 arrays
//One with evens and one with odds

 // x % 0 == 0 -> even numbers

 let demoArr = []
 for(let i = 1; i <= 100; i++){
    demoArr.push(i)
 }
    
 let checkEven = (num) => {
     return num % 2 === 0
 }
 console.log(demoArr);// returns numbers 1 - 100

    console.log(demoArr.filter(elem => elem % 2 == 0)); // filter takes a call back
    //this is a function that will be used by the filter method
    console.log(demoArr.filter(checkEven));//this is a function that will be used by the filter method

    let splitArr = []
    for(let z = 1; z <= 100; z++){
        if (z % 2 == 0){
            splitArr.push(z)
        }else {
            splitArr.shift(z)
        }
    } 

    console.log(splitArr)
    for(let curNum in splitArr){
        console.log(splitArr[curNum])
    } 

    //Function review
    let sqr = (x) => {
        return x*x
    }// {} - block body, you have to explicityly 'return' what you want to give back

    let conciseSqr = x => x*x // {} - concise body, implicit return


    

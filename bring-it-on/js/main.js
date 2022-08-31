// *Variables*
// Create a variable and console log the value

let num = 10

console.log(num)

// Create a variable, add 10 to it, and alert the value

let addTen = 20

addTen += 10

console.log(addTen)


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

// function subFour(sub1,sub2,sub3,sub4){
//     alert(sub1 - sub2 - sub3 - sub4)
// }

// subFour(10,2,2,2)

// Create a function that divides one number by another and returns the remainder

function div(num1,num2){
    return num1 % num2
}

console.log(div(10,6))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

// function addTwo(num1,num2){
//     let sum = Number(num1 + num2)
//     if(sum > 50){
//         alert('JUMANJI')
//     }
// }

// addTwo(40,11)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function mThree(m1,m2,m3){
    let rando = Number(m1 * m2 * m3)
    if(rando % 3 === 0){
        alert('ZEBRA')
    }

}


//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function take(word,num){
    for(let i = 1; i <= num; i++){
        console.log(word)
    }
}   

// I need to practice loops!! The rest I have down pretty well.
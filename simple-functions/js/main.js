//---Easy
//create a function that subtracts two numbers and alerts the difference

function subTwo(num1, num2){
    alert(num1 - num2)
}

subTwo(4,2)

//create a function that divides three numbers and console logs the quotient

function divThree(d1, d2, d3){
    console.log(d1/d2/d3)
}

divThree(10,2,2)


//create a function that multiplys three numbers and returns the product

function multiThree(m1,m2,m3){
    return m1 * m2 * m3
}

let returnedNum = multiThree(2,3,2)

console.log(returnedNum)

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function takeThree(t1, t2, t3){
    return (t1 + t2) % t3
}

console.log((takeThree(10,5,10)))

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function takeFour(l1,l2,l3,l4){
    let sum = l1 * l2
    if(sum > 100){
        console.log(l3 + l4)
    }else if(sum < 100){
        console.log(l4 - l3)
    }else if(sum === 100){
        alert((l1 * l2 * l3)%l4)
    }
}
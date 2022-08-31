//--- Easy
//create a variable and assign it a number

let nightTime = 11

//minus 10 from that number

nightTime -= 10

//print that number to the console

console.log(nightTime)

//--- Medium
//create a variable that holds a value from the input

let novaSkye = document.querySelector('#danceDanceRevolution').value

// wrap the value ^^ in Number() because without it, it will read as an empty string (because there's nothing in the input)

//add 25 to that number

novaSkye += 25

//alert that number

alert(novaSkye)

//--- Hard
//create a variable that holds the h1

let theHeader = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

theHeader.addEventListener('click', sumOfTwo)

function sumOfTwo(){
    console.log(nightTime + novaSkye)
}
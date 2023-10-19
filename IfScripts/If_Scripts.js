"use strict"

 //let payRate = 12.50
// let hoursWorked = 20

// let payRate = 25.00
// let hoursWorked = 40

//let payRate = 17.30
//let hoursWorked = 45



// overtime equation ---> " ( ( 1.5 hrs_incentive *  $17.30 pay ) * 5 hrs_over ) + ( $17.30 pay ( 40 hrs_base ) ) "
let k = 5
let gumbo = 1.5 * 17.30
let soup = k * gumbo
let pb = 17.30 * 40 
let comida = (soup + pb)


let GrossPay = hoursWorked * payRate; 

if (hoursWorked === 40) {
    GrossPay = hoursWorked * payRate; 
}

if (hoursWorked < 40) {
    payRate = 12.50
}

if (hoursWorked > 40) {
    payRate = comida
}




 //GrossPay = hoursWorked * payRate; 
GrossPay = comida;
console.log(GrossPay);
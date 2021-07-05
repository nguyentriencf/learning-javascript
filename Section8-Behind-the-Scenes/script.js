// 'use strict';


// function calAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         let firstName = "Van"
//         const output = `${firstName}, you are ${age} born in ${birthYear}`;
//         console.log(output);
//     }
//     printAge();
//     if (birthYear >= 1981 && birthYear <= 1996) {
//         var str = `ten tao la ${firstName}`
//         console.log(str);
//     }
//     str = `Bo Van la ${firstName}`;
//     console.log(str);


// }
// const firstName = "trien";
// calAge(1999);


// how hoisting work

// 
// console.log(me);
// console.log(job);
// console.log(year);
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));

// undefine
var me = "Van";
//error
let job = "teacher";
//error
const year = 1999;

// can working good
function addDecl(a, b) {
    return a + b;
}

//error
var addExpr = function(a, b) {
    return a + b;
}

//error
//console.log(addArrow(2, 3));
var addArrow = (a, b) => a + b;


// example var variable
// if (!numProduct) deleteShopingCart();
// var numProduct = 10;

// function deleteShopingCart() {
//     console.log("All product deleted");
// }

var x = 1;
let y = 2;
const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
}
calcAge(1999);

const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    console.log(this);
}
calcAgeArrow(1999);


const jonas = {
    year: 1999,
    calcAge: function() {
        console.log(2037 - this.year);
    }
}

jonas.calcAge();

const trien = {
    year: 2000,
}

trien.calcAge = jonas.calcAge;
trien.calcAge();

const f = trien.calcAge;
console.log(f);
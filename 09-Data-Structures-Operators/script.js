'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.categories[mainIndex]];
    }
};


const arr = [1, 2, 3]

const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring assignmen
const [x, y, z] = arr;
console.log(arr);
// console.log(x, y, z);
// console.log(a, b, c);

let [main, secondary] = restaurant.categories
console.log(main, secondary);

// switching variable
// const temp = main;
// main = secondary;
// secondary = temp;

//using destucturing
[main, secondary] = [secondary, main];

console.log(main, secondary);

console.log(restaurant.order(0, 0));


//receive 2 value ruturned from function
let [starter, mainC] = restaurant.order(0, 0);
console.log(starter, mainC);
[starter, mainC] = [mainC, starter]
console.log(starter, mainC);

// destructuring inside array other
// nested destructuring
const nested = [1, 2, [3, 4]]
    // let [i, j, k] = nested
let [i, , [j, k]] = nested;
console.log(i, j, k);

// default value
const [d = 1, e = 1, f = 1] = [6, 9]
//const [a=1,b=2,c=3] =[6,9]
console.log(d, e, f);
// => 6 9 1
console.log(d, e, f);
// => 6 9 undefined
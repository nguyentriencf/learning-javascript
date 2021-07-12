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
    },
    oderDelivery: function({ starterIndex = 1, mainIndex = 0, time = '22:20', address }) {
        console.log(`Order receive! ${this.starterMenu[starterIndex]} and ${this.categories[mainIndex]}, will be delivery ${address} at ${time}`);
    },
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`);
    },
    oderPizza: function(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// for-of loop
for (let item of menu) console.log(item);

for (let item of menu.entries()) console.log([`${item[0]} : ${item[1]}`]);

for (let [i, el] of menu.entries()) console.log([`${i} : ${el}`]);


/*
console.log('---------- OR ---------');

console.log(3 || 'Trien');
console.log('' || 'Trien');
console.log(true || 0);
console.log(undefined || null);
// 3
// 46 Trien
// 47 true
// 48 null

console.log(undefined || 0 || '' || 'hello' || 23);
// hello
// restaurant.numGuests = 39
// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests);
// console.log(guests2);

console.log('---------- And ---------');
console.log(0 && 'Trien');
// 0
console.log(39 && 'Trien');
// Trien

console.log('hello' && 23 && null && 'trien');

// Practical  example
if (restaurant.oderPizza) {
    restaurant.oderPizza('mushrooms', 'spinach');
}
restaurant.oderPizza && restaurant.oderPizza('mushrooms', 'spinach');
// mushrooms
// 40 ["spinach"]
// 39 mushrooms
// 40 ["spinach"]

console.log("---------- nullish value ---------");

// ---------- OR ---------
restaurant.numGuests = 0
const guests = restaurant.numGuests || 10;
console.log(guests);

// ---------- nullish value ---------

// const guestsCorrest = 0 ?? 10;



/*
restaurant.oderPizza('Mushrooms', 'onion', 'olive', 'spinach');
//1) destructuring
// spread  because on right side of =
const arr = [1, 2, ...[3, 4, 5]];

//rest because on left side of =
const [a, , c, ...others] = [...arr];
console.log(a, c, others);
//1 3 (2) [4, 5]
//1 2 (3) [3, 4, 5]

const { sat, ...weekenDays } = restaurant.openingHours;
console.log(weekenDays);
//2) function
const add = function(...number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++)
        sum += number[i];
    console.log(sum);
}

add(1, 2);
add(3, 4, 5);
add(6, 7, 8, 9);
// [1, 2]
// [3, 4, 5]
// [6, 7, 8, 9]
const x = [0, 98, 98]
add(...x)
    /*
// the spread operator
const arr = [7, 8, 9]
const badNewArr = [1, 2, 3, ...arr]
console.log(badNewArr);
// => [1, 2, 3, 7, 8, 9]

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const str = "Trien";
const letters = [...str, "s."];
console.log(letters);


// real-would example
const ingredients = [prompt("Let\'s make pasta! Ingredient 1'?"), prompt("Ingredient 2'?"), prompt("Ingredient 3'?")]
console.log(ingredients);

restaurant.orderPasta(...ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//object
const newRestaurents = { founderIn: 1998, restaurant, founder: 'Guisepe' }
console.log(newRestaurents);

const restaurantCoppy = {...restaurant };
restaurantCoppy.name = 'Nguyen Trien';
console.log(restaurantCoppy.name);
console.log(restaurant.name);

/*
restaurant.oderDelivery({
time: "23:30",
address: "29 Ngo Gia Tu",
mainIndex: 2,
starterIndex: 2,
});
restaurant.oderDelivery({
address: "30 Ngo Gia Tu",
})

const { name, openingHours, categories } = restaurant;
const { name: restaurenName, openingHours: hours, categories: tag } = restaurant;
console.log(restaurenName, hours, tag);
console.log(name, openingHours, categories);
//default value
const { menu = [], starterMenu: sta = [] } = restaurant;
// console.log(menu, sta);
// result
// []

// (4) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]
// 0: "Focaccia"
// 1: "Bruschetta"
// 2: "Garlic Bread"
// 3: "Caprese Salad"
// length: 4
// __proto__: Array(0)

// mutating variable
let a = 111;
let b = 99;
const obj = { a: 23, b: 4, c: 5 };
({ a, b } = obj);
console.log(a, b);
// 23  4

// Nested object
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);
// 11 13


/*
const arr = [1, 2, 3]

const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring assignmen
const [x, y, z] = arr;
// console.log(arr);
// console.log(x, y, z);
// console.log(a, b, c);

let [main, secondary] = restaurant.categories
// console.log(main, secondary);

// switching variable
// const temp = main;
// main = secondary;
// secondary = temp;

//using destucturing
// [main, secondary] = [secondary, main];

// console.log(main, secondary);

// console.log(restaurant.order(0, 0));


//receive 2 value ruturned from function
let [starter, mainC] = restaurant.order(0, 0);
// console.log(starter, mainC);
[starter, mainC] = [mainC, starter]
// console.log(starter, mainC);

// destructuring inside array other
// nested destructuring
const nested = [1, 2, [3, 4]]
// let [i, j, k] = nested
let [i, , [j, k]] = nested;
// console.log(i, j, k);

// default value
const [d = 1, e = 1, f = 1] = [6, 9]
//const [a=1,b=2,c=3] =[6,9]
// console.log(d, e, f);
// => 6 9 1
// console.log(d, e, f);
// => 6 9 undefined


*/
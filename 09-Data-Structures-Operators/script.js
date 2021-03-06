'use strict';

// Data needed for a later exercise
// const flights =
    // '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 12 + 12,
    },
};
// Data needed for first part of the section

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    //ES6 enhance object literals
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.categories[mainIndex]];
    },
    oderDelivery({ starterIndex = 1, mainIndex = 0, time = '22:20', address }) {
        console.log(`Order receive! ${this.starterMenu[starterIndex]} and ${this.categories[mainIndex]}, will be delivery ${address} at ${time}`);
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`);
    },
    oderPizza(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};

// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const getCode = str => str.slice(0,3).toUpperCase();
for(const flight of flights.split('+')) {
    const [type,from,to,time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll('_',' ')} ${getCode(from)} ${getCode(to)} (${time.replace( ':','h')
    })`.padStart(37)
    console.log(output);
}

/*
// split and join
console.log('nguyen+trien+learning+js'.split('+'));
console.log('Nguyen Trien'.split(' '));
const [lastName,firstName] = 'Nguyen Trien'.split(' ');
const newName= ['Mr.',lastName,firstName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
    const names = name.split(' ');
    const nameUpper = [];
    for(const n of names) {
        // nameUpper.push(n[0].toUpperCase()+ n.slice(1))
        nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
console.log(nameUpper.join(' '));
}
capitalizeName('nguyen dinh phat trien')
// paading
const message = 'go to gate 23!'
console.log(message.padStart(25,'+').padEnd(30,'+'));
//+++++++++++go to gate 23!+++++

const maskCreditCard = function(number) {
    const str =  number +'';
    const last = str.slice(-4);
    return last.padStart(str.length,'*')
}
console.log(maskCreditCard(98349));

console.log(maskCreditCard(9842938928349));
console.log(maskCreditCard('09898798788787'));
// repeat
 const message2 = 'Bad weather ... All Departure';
 console.log(message2.repeat(5));

 const planeInLine = function(n) {
     console.log(n);
     console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
 };
 planeInLine(3);
 planeInLine(8);
 planeInLine(5);
 planeInLine(100);




/*
// Boolean
const A  = 'A32neo';
console.log(A);
console.log(A.includes('A32'));
console.log(A.includes('boeing123'));   
console.log(A.startsWith('A'));
// true
// 51 false
// 52 true

//practice exercise
const checkBaggage = function(items) {
    const baggage = items.toLowerCase();
    console.log(baggage);
    if(baggage.includes('knife') || baggage.includes('gun')){
        console.log('Not allow board');
    }else {
        console.log('Welcom to board');
    }
}

checkBaggage('I have a laptop, food, knife');
checkBaggage('socks and camera');
checkBaggage('Got some Snack and a Gun for protection')
// replacing
const priceVND = '39,1999vnd'
const priceUS = priceVND.replace('vnd','$').replace(',','.')
console.log(priceUS);

const anoucement = 'All passenger come to boarding door 23, Boarding door 23!'
// console.log(anoucement.replace('door','gate'));
console.log(anoucement.replace(/door/g,'gate'));

//All passenger come to boarding gate 23, Boarding door 23!
// console.log(anoucement.replaceAll('door','gate'));
// All passenger come to boarding gate 23, Boarding gate 23!    


// Comparing emails 
const email = 'nguyentrien0309@gmail.com'
const emailLogin =' Nguyentrien0309@gmail.com ';
console.log(email);
// const lowerEmail = emailLogin.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const nomalizationEmail = emailLogin.toLowerCase().trim();

console.log(email === nomalizationEmail);
//true

// Fix capitalation in name 
const passenger = 'tRieN';
const passengerLowerCase = passenger.toLocaleLowerCase();
const passengerCorrect = passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
console.log(passenger);
console.log(passengerCorrect);

//string

const airPlane = 'TAP AIR Portugal'
const plane = 'A320'
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
// A 3 2 0
console.log('A320'[0]);

console.log(airPlane.slice(4,7));
console.log(airPlane.slice(0,airPlane.indexOf(' ')));

console.log(airPlane.slice(-2));
// al
console.log(airPlane.slice(1,-1));

const checkMiddleSeat = function(seat) {
    // B and E is middle seat 
    const s= seat.slice(-1)
    if( s==='B'|| s==='E')
        console.log('You got the middle seat');
    else
        console.log('You got lucky!');
}
checkMiddleSeat('11B')
checkMiddleSeat('3C')
checkMiddleSeat('11E')

console.log(new String('Trien'));
console.log(typeof new String('Trien'));





/*
const question = new Map([
    ['question','What is the best programming languege in the would'],
    [1,'C'],
    [2,'Java'],
    [3,'Javascript'],
    ['correct',3],
    [true, 'Correct'],
    [false,'Try again!']
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
//Map(6) {"question" => "What is the best programming languege in the would", 1 => "C", 2 => "Java", 3 => "Javascript", true => "Correct", …}
const hourMap = new Map(Object.entries(openingHours));
console.log(hourMap);
// Map(3) {"thu" => {…}, "fri" => {…}, "sat" => {…}}

// Quiz app
console.log(question.get('question'));
for(const [key,value] of question) {
if( typeof key === 'number') console.log(`Answer ${key}:${value}`);
}
//const answer = Number(prompt('Your answer'));
const answer =3;
console.log(answer);
console.log(question.get(question.get('correct') === answer));


// Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

/*
const rest = new Map();
rest.set('name', 'Nguyen Dinh Phat Trien');
rest.set(3,1999);
rest.set('monhoc:',['js','react','C#']);
console.log(rest.set('name2','Tran Thi Thu Van'));
// Map(4) {"name" => "Nguyen Dinh Phat Trien", 3 => 1999, "monhoc:" => Array(3), 2 => "Tran Thi Thu Van"}


rest.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open',11)
.set('close',23)
.set(true,'we are open')
.set(false,'we are close');
console.log(rest.get('name'));
console.log(rest.get('name2'));
console.log(rest.get('open'));
console.log(rest.get('close'));
console.log();
// Nguyen Dinh Phat Trien
// 63 Tran Thi Thu Van
// 64 11
// 65 23.

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('name'));
//true
rest.set(document.querySelector('h1'), 'Heading')
const arr =[1,2];
rest.set(arr,'test');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
// test 

/*
// sets
const orderSet = new Set([
    'Pizza', 
    'Pizza',
    'Pizza',
    'Ritito',
    'Pasta',
    'Pizza'
])
console.log(orderSet);
//Set(3) {"Pizza", "Ritito", "Pasta"}
console.log(orderSet.size);
// 3
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('trien'));
// true
// false
orderSet.add('Gralic Bread')
orderSet.delete('Pizza');
console.log(orderSet[0]);
// undefined


// example 
const staff  = ['waiter','Chef', 'Waiter','Manage', 'Chef', 'Waiter']
const staffSet =[...new Set(staff)];
console.log(staffSet);
// Set(4) {"waiter", "Chef", "Waiter", "Manage"}




/*
// properties Name
 const properties = Object.keys(openingHours);
 console.log(properties);
 let openStr = `We are open on ${properties.length}:`;
 for(const day of properties) {
    openStr +=`${day}, `;
 }
console.log(openStr);

// Entries object \
const entries = Object.entries(openingHours);
console.log(entries);
//0: (2) ["thu", {…}]
// 1: (2) ["fri", {…}]
// 2: (2) ["sat", {…}]
for(const [key,{open :o, close:c}] of entries) {
    console.log(`on ${key} we open at ${o} and close at ${c}`);
}

/*
// console.log(restaurant);
if (restaurant.openingHours.mon) console.log(
    restaurant.openingHours.mon.open);
if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
}

// with Optional chain
console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
  
    console.log(`On ${day}, we open at ${open}`);
}

console.log(restaurant.openingHours.fri.open);
// 11

// method 
console.log(restaurant.order?.(0,1)|| 'The method does not exist');
console.log(restaurant.orderRisoto?.(0,1)??'The method does not exist');

// arrays
const users =[
    {name:'Trien', email:'nguyentrien0309@gmail.com'}
]
const user =[];
console.log(users[0]?.name ?? 'User array empty');
console.log(user[0]?.name ?? 'User array empty');

if(users.length > 0) console.log(users[0].name)
 else console.log('User array empty');
/*
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
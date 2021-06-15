// activating strict mode
// const interface = true;
// // let
// // if = fds;
// // let

// // function 
// function logger() {
//     console.log("tôi là triển");
// }
// // calling/ running /invoking function
// logger();

// // function declaration
// function calAge1(birthYear) {
//     return 2037 - birthYear;
// }

// // function expresstion
// const calAge2 = function(birthYear) {
//     return 2037 - birthYear;
// }

// console.log(calAge1(1999), calAge2(1999));

// coding challenge

// function arrow
const calAvagScore = (a, b, c) => a + b + c / 3;
const scoreTrien = calAvagScore(10, 20, 30);
const scoreVan = calAvagScore(40, 98, 90);
console.log(scoreTrien, scoreVan);

function checkWin(scoreTrien, scoreVan) {
    if (scoreTrien > scoreVan)
        console.log("trien is win");
    else if (scoreVan > scoreTrien)
        console.log("Van is win");
    else
        console.log("no person win");
}

checkWin(scoreTrien, scoreVan);
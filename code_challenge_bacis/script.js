//coding challenge 01
// const massTrien = 59;
// const height = 1.68;
// const massTrien1 = 60;
// const heightTrien1 = 1.69;

// const BMITrien = massTrien / height ** 2;
// const BMITrien1 = massTrien1 / heightTrien1 ** 2;
// const trienHeighterTrien1 = BMITrien > BMITrien1;
// if (BMITrien > BMITrien1) {
//     console.log(`Trien's BMI (${BMITrien}) is higher Trien1's (${BMITrien1})`)
// } else {
//     console.log(`Trien's BMI (${BMITrien}) is lower Trien1's (${BMITrien1})`);
// }

// coding challenge 03

// const scoreTrien = (1000) / 3;
// const scoreTrien2 = (1000) / 3;

// console.log(scoreTrien, scoreTrien2);
// if (scoreTrien > scoreTrien2 && scoreTrien >= 100) {
//     console.log("trien la nguoi chien thang");
// } else if (scoreTrien2 > scoreTrien && scoreTrien2 >= 100) {
//     console.log("trien2 la nguoi chien thang");
// } else if (scoreTrien === scoreTrien2 && scoreTrien >= 100 && scoreTrien2 >= 100) {
//     console.log("ca hai deu la nguoi chien thang");
// } else {
//     console.log("Khong co ai la nguoi chien thang");
// }

// comparation betweend switch,case and if/else statement

// const day = "friday";

// switch (day) {
//     case "monday":
//         console.log(`thu 2 ${day}`);
//         break;
//     case "tuesday":
//     case "wednesday":
//         console.log("thu 3 hoac thu 4");
//         break;
//     case "thurday":
//         console.log(`thu ${day}`);
//         break;
//     case "friday":
//         console.log("hom nay la thu 6 ngay 13 em oi");
//         break;
//     case "saturday":
//         console.log("thu 7");
//         break;
//     default:
//         console.log("chu nhat");
//         break;
// }

// if (day === "monday") {
//     console.log(`thu 2 ${day}`);
// } else if (day === "tuesday" || day === "wednesday") {
//     console.log("thu 3 hoac thu 4");
// } else if (day === "thurday") {
//     console.log(`thu ${day}`);
// } else if (day === "friday") {
//     console.log("hom nay la thu 6 ngay 13 em oi");
// } else if (day === "saturday") {
//     console.log("thu 7");
// } else {
//     console.log("chu nhat");
// }

//condition ternary operator

const age = 14;
age >= 18 ? console.log("du tuoi uong ruou") : console.log("chua du tuoi uong ruou");

const drink = age >= 18 ? "du tuoi uong ruou roi ne" : "chua du tuoi uong ruou ne";
console.log(drink);

// so sanh voi cau lenh if/else
let drink2;
if (age >= 18) {
    drink2 = "du tuoi uong ruou roi ne";
} else {
    drink2 = "chua du tuoi uong ruou ne";
}
console.log(drink2);
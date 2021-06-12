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

const scoreTrien = (1000) / 3;
const scoreTrien2 = (1000) / 3;

console.log(scoreTrien, scoreTrien2);
if (scoreTrien > scoreTrien2 && scoreTrien >= 100) {
    console.log("trien la nguoi chien thang");
} else if (scoreTrien2 > scoreTrien && scoreTrien2 >= 100) {
    console.log("trien2 la nguoi chien thang");
} else if (scoreTrien === scoreTrien2 && scoreTrien >= 100 && scoreTrien2 >= 100) {
    console.log("ca hai deu la nguoi chien thang");
} else {
    console.log("Khong co ai la nguoi chien thang");
}
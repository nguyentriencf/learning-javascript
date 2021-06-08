const massTrien = 59;
const height = 1.68;
const massTrien1 = 60;
const heightTrien1 = 1.69;

const BMITrien = massTrien / height ** 2;
const BMITrien1 = massTrien1 / heightTrien1 ** 2;
const trienHeighterTrien1 = BMITrien > BMITrien1;
console.log(BMITrien, BMITrien1, trienHeighterTrien1);
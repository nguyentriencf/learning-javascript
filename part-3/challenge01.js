// 1.understanding the problem
// Array transformed into string, seperated by .
// What x the day? answer: index of array + 1

// 2.Break up into sub-problem
// Transform array into string
// Transform each element to string with *C
// String needs contain day (index +1)
// Add ... between element and start and end of string
// log string to console

const temp = [23, 43, 45, 31]
const temp1 = [32, 43, 54, 43]
const printForecast = function(arr) {
    let str = '...';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}* in day ${i + 1}... `;
    }
    console.log(str);
}
console.log(temp);
printForecast(temp);
printForecast(temp1);
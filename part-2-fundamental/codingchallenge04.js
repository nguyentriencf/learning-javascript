const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ?
        bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 185, 10, 1110];

const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip * bills[i]);
}
console.log(bills, tips, totals);

const calAverage = function(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calAverage(totals));
console.log(calAverage(tips));
console.log(calAverage(bills));
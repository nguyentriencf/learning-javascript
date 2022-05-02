'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements =  function(movements) {
  movements.forEach((mov,i) => {
    containerMovements.innerHTML ='';
    const type = mov >0 ? 'deposit' :'withdrawal'
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin',html);
  });
}

displayMovements(account1.movements)



// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// REDUCE METHOD
// tham số thứ nhất của reduce mothod callback thứ nhất chưa ba tham số 
// tham số thư nhất là biết tổng mỗi lần lặp , curr là giá trị của biến hiện tại, i => index
// tham số thứ 2 của reduce method là giá trị khởi tạo trước khi lặp của biến acc
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const calcDisplayBalance = (movements) =>{
 const balance = movements.reduce((acc, cur, i) => {
   return acc + cur;
 }, 0);
 labelBalance.textContent = `${balance} VND`
}
calcDisplayBalance(movements);


// REDUCE MOTHOD tương tự như for 
let balence2 = 0;
for (let mov of movements) balence2 += mov
console.log(balence2)

// tìm giá trị lớn nhất trong mảng bằng reduce method
const max = 
  movements.reduce((acc, mov)=>{
    if(acc> mov){
      return acc
    }else{
      return mov
    } 
  },movements[0])
console.log(max);
// dùng forech cũng ra kết quả tương tự nhưng gây ra side effect 
// làm ảnh hưởng tới mảng ban đầu.
// const user = "Nguyen Dinh Phat Trien"
// const username =user.split(' ').map((name)=>{
//   return name[0]
// }).join('');
// console.log(username)
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// function checkdDogs(dogJulia,dogKate){
  
//  const dogJuliaCorrected =  dogJulia.slice();
//  dogJuliaCorrected.splice(0,1);
//  dogJuliaCorrected.splice(-2)
 
//  console.log(dogJuliaCorrected.slice(1,3));

// }
// checkdDogs([3, 5, 2, 12, 7],[9, 16, 6, 8, 3])
// const arrNumber = [200, -200, 340, -300, -20, 50, 400, -460];
// const withdrawal =  arrNumber.filter(mov=> mov>0)
// console.log(withdrawal);


/////////////////////////////////////////////////

/*
let arr = ['a','b','c','d','e']


// slice method
console.log(arr.slice(2));
console.log(arr);
console.log(arr.slice(2,4));
console.log(arr.slice(0,-1));
console.log(arr.slice(-3));
console.log(arr.slice());
console.log([...arr]);
console.log(arr);
// ['c', 'd', 'e']
// ['c', 'd']
// ['a', 'b', 'c', 'd']
// ['c', 'd', 'e']
// ['a', 'b', 'c', 'd', 'e']
// ['a', 'b', 'c', 'd', 'e']

// splice method

console.log(arr.splice(1));
console.log(arr.reverse());

// ['b', 'c', 'd', 'e']
//  ['a']

// reserse 
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['f','g','i','j','k']

console.log(arr2.reverse());
console.log(arr2);

// concat
const letter = arr.concat(arr2);
console.log(letter);
// as same spread operator
console.log([...arr,...arr2]);

// join method trả về một chuỗi nối các phần tử ngăn cách với nhau bằng kí tự trong tham sô truyền vào
console.log(typeof letter.join('-'));
*/

/*
//  Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i,mov] of movements.entries()) {
  if(mov >0){
    console.log(`Movement ${i +1}: You disposit ${mov}`);
  }else {
    console.log(`Movement ${i + 1}: You disposit ${Math.abs(mov)}`);
  }
}
console.log('------------forEach-------------------');
// forEach method using callback function 
movements.forEach(function(mov,i){
   if (mov > 0) {
     console.log(`Movement ${i + 1}: You disposit ${mov}`);
   } else {
     console.log(`Movement ${i + 1}: You disposit ${Math.abs(mov)}`);
   }
})

*/

/*
// forEach With Maps and Sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((val, key, map) => {
  console.log(`${key}: ${val}`);
});
//USD: United States dollar
//EUR: Euro
//GBP: Pound sterling
console.log('----------------');
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'Euro']);
currenciesUnique.forEach((val, _, map) => {
  console.log(`${val}: ${val}`);
});
*/
// function tinhtong(a){
//   let t=0;

//   for(let i =0; i <= a; i++ ){
//       t+=i
//   }
//   console.log(t);
// }
// tinhtong(2)

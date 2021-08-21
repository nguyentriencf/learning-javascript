'use strict';

// 
const runOne = function(){
    console.log('this is never run again');
}
runOne();

//Immediately Invoke Funtion Expression (IIFE)
(function(){console.log('this is never run again')})()
// IIEF cũng là việc với arrow function
// (() => console.log('This will ALSO never run again'))();

/*
//the call and apply Methods
const lufthanasa = {
    airline:'lufthansa',
    iataCode:'PT',
    bookings: [],
    //book: function(){}
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}, ${name}` });
    }
};
lufthanasa.book('3999','Trien')
console.log(lufthanasa);

const trienAirline = {
    airline:'trienAriline',
    iataCode:'TT',
    bookings:[]
}
const book = lufthanasa.book;
// call method nhận list argument
book.call(trienAirline, 19, 'VanTran');

// apply method không nhận list argument
const ctAirline = {
    airline:'NGuyen Dinh Phat Trien',
    iataCode:'NDFF',
    bookings:[]
}
const flightData = [456,'Mr.TrienDepTrai']
book.apply(ctAirline,flightData)
console.log(ctAirline);
book.call(trienAirline,...flightData);

//The bind Method
const bookCtAirline = book.bind(ctAirline);
bookCtAirline( 332,'bindMethod')
const bookTrienAirline = book.bind(trienAirline,23);
bookTrienAirline('passengers');
bookTrienAirline('accountHolder')

//with event Listener
lufthanasa.planes = 300;
lufthanasa.buyPlane = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
// this key lúc này sẽ là button nên ta kh thể truy cập được data bên trong lufthanasa
lufthanasa.buyPlane()
console.log(lufthanasa);
document.querySelector('.buy').addEventListener('click',lufthanasa.buyPlane.bind(lufthanasa))
// bind sẽ trả về một func mơi. Bởi vì ta truyền thàm số lufthanasa vào trong hàm bind thì lúc này this key word lúc này sẽ có data là lufthanasa
// call and apply method là sẽ gọi hàm còn bind method sẽ return về new function

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1,200));

const addVAT = addTax.bind(null,0.23)
// (value) => value + value * rate;
// tham số thứ nhất là this key work nhưng để null thì kh có bất cứ gì xảy ra
// hàm này khác với default parameter bời nó tạo ra một hàm mới từ bind method dựa vào hàm addTax
// default parameter là hàm tái sử dụng 
// Một điều cần chú ý khi sử dụng bind method như ví đó là vị trị của từng argument phải đúng vị trí khi truyền thàm số vào hàm
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxVat = function(rate) {
    return function(value){
        return value + value *rate;
    }
}
const addVat2 = addTaxVat(0.1)
console.log(addVat2(200));

/*
// function returning function
const great = function(greating) {
    return function(name) {
        console.log(`${greating} ${name}`);
    }
}

const greatng = great('Nguyen')
greatng('Trien')
great('trien')('nguyen');
// const great2 = (greatings) =>{
//     return (names) =>{
//         console.log(`${greatings} ${names}`);
//     }
// }

const great2 = greatings => names => console.log(`${greatings} ${names}`);

great2('trien1')('nguyen1');


/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();// / /g là một regular expression để chọn tât cả các khoảng trăng
};

const upperCase = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher-order function vì thàm số thứ 2 là một func
// chú ý tham số thứ thứ 2 là chỉ truyền chính giá trị hàm vì thế nó chỉ là giá trị chúng ta không gọi đó là hàm
const transformer = function (str, fn) {
    console.log(`Original strings:  ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};
transformer('javascript is the best!',upperCase);
transformer('javascript is the best!', oneWord);

// upperCase và oneWord được được là tham số thì lúc này chúng sẽ được gọi là callback-function

const high5 = function(){
    console.log('🤞');
}
document.body.addEventListener('click',high5)
// cũng giống như ví dụ trên high5 được gọi là callback-function
// addEventListener được gọi là higher-order function

/*
//How Passing Arguments Works: Value vs. Reference

const flight = 'PT399'
const trien = {
    name:'Nguyen Trien',
    passport:091457898
}

const checkIn  = function(flightNum, passenger) {
    flightNum = 'TV99';
    passenger.name = 'Mr.' + passenger.name
    if(passenger.passport === 091457898) alert('chenckIn')
    else alert('wrong passenger')
}
checkIn(flight,trien)
console.log(flight);
console.log(trien); // lúc này object trien sẽ bịnthay đổi nguyên nhân là truyền tham chiếu vào hàm

const newPassport = function(person) {
    person.passport= Math.trunc(Math.random()*1000);
}
newPassport(trien);
checkIn(flight,trien)

// default parameter
/*
const bookings= []
const createBooking = function(flightNum, numPassengers =1, price=199 * numPassengers) {
    // es5 =>
    // numPassengers= numPassengers || 1;
    // price = price || 199;

    const booking ={
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking)
}
createBooking('PT199')
createBooking('PT199',2);
createBooking('PT197',undefined,1000) // skip parameters 2th
*/

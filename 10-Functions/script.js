// 'use strict';



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
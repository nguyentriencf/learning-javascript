'use strict';

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
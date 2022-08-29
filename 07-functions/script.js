'use strict';
const bookings = [];

const createBookings = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 1999;

  // object shorthand
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBookings('HW123');
createBookings('HW123', undefined, 123);
createBookings('HT858', 12, 500);
createBookings('POKE', 34, 1000);
createBookings('HER45', 54, undefined);

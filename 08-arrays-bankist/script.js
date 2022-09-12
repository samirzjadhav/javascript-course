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

const displayMovements = function (movement) {
  containerMovements.innerHTML = '';
  movement.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calsDisplaceBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calsDisplaceBalance(account1.movements);

// const user = 'Steven Thomas Williams'; //stw
// const userName = user
//   .toLowerCase()
//   .split(' ')
//   .map(name => name[0])
//   .join('');

// console.log(userName);
// console.log(user);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/*
/////////////////////////////////////////////////

// Slice
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// Slice method
console.log(arr.slice());

// Sparead method
console.log([...arr]);

//SPLICE
//console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letter = arr.concat(arr2);
console.log(letter);
console.log([...arr, ...arr2]);

//JOIN
console.log(letter.join('-'));

// new AT method
const newArr = [23, 24, 35];
console.log(newArr[0]);
console.log(newArr.at(0));

// Getting last array element
console.log(newArr[newArr.length - 1]);
console.log(newArr.slice(-1)[0]);
console.log(newArr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));

// Looping arrays foreach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`movement ${i + 1} You deposited ${Math.abs(movement)}`);
  } else {
    console.log(`movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}

console.log('-----FOREACH-----');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`movement ${i + 1} You deposited ${Math.abs(mov)}`);
  } else {
    console.log(`movement ${i + 1} You withdrew ${Math.abs(mov)}  `);
  }
});

// 0: FUNCTION(200)
// 1: FUNCTION(450)
// 2: FUNCTION(400)
// 3: FUNCTION(3000)
// ...

// The Map Method in Array
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
  //   return mov * eurToUsd;
  // });
  const movementsUSD = movements.map(mov => mov * eurToUsd);
  
  console.log(movements);
  console.log(movementsUSD);
  
  const movementsUSDfor = [];
  for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
  console.log(movementsUSDfor);
  
  const movementsDescription = movements.map(
    (mov, i) =>
    `movement ${i + 1} You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
      )}`
      );
      console.log(movementsDescription);

//THE FILTER METHOD IN ARRAY
const deposits = movements.filter(function (mov) {
  return mov > 0;
  //return mov < 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);
*/

//  THE REDUCE METHOD IN ARRAYS
console.log(movements);
// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}:${acc}`);
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

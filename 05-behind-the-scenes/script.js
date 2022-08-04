'use strict';

function calAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();

  if (birthYear >= 1981 && birthYear < 1996) {
    var millienial = true;
    //Creating NEW variable with same name as outer scope's variable
    const firstName = 'samir';

    //Reassigning outer scope's variable
    //output = 'new output!';

    const str = `Oh, and you're millinial, ${firstName}`;
    console.log(str);

    function add(a, b) {
      return a + b;
    }
  }

  console.log(millienial);

  return age;
}

const firstName = 'jonas';
calAge(1991);

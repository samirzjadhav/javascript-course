"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const formatNumber = function (num) {
  var units = ["M", "B", "T", "Q"];
  var unit = Math.floor((num / 1.0e1).toFixed(0).toString().length);
  var r = unit % 3;
  var x = Math.abs(Number(num)) / Number("1.0e+" + (unit - r)).toFixed(2);
  return x.toFixed(2) + units[Math.floor(unit / 3) - 2];
};

const renderContry = function (data, className = "") {
  const currency = Object.keys(data.currencies)[0];
  const language = Object.values(data.languages)[0];

  const html = `     
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${formatNumber(
        data.population
      )} People</p>
      <p class="country__row"><span>🗣️</span>${language}</p>
      <p class="country__row"><span>💰</span>${
        data.currencies[currency].symbol
      } ${data.currencies[currency].name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    window.data = data;

    const currency = Object.keys(data.currencies)[0];
    const language = Object.values(data.languages)[0];

    const html = `     
<article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${formatNumber(
      data.population
    )} People</p>
    <p class="country__row"><span>🗣️</span>${language}</p>
    <p class="country__row"><span>💰</span>${
      data.currencies[currency].symbol
    } ${data.currencies[currency].name}</p>
  </div>
</article>`;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("india");
getCountryData("USA");
getCountryData("portugal");
*/

/*
const getCountryAndNeighbour = function (country) {
  // AJAX CALL COUNTRY 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    window.data = data;

    // Render country 1
    renderContry(data);

    // get neighbour country 2
    const [neighbour] = data.borders;
    if (!neighbour) return;

    // AJAX CALL COUNTRY 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderContry(data2, "neighbour");
    });
  });
};

getCountryAndNeighbour("india");

// CallBack Hell
setTimeout(() => {
  console.log("1 second passed");
  setTimeout(() => {
    console.log("2 second passed");
    setTimeout(() => {
      console.log("3 second passed");
      setTimeout(() => {
        console.log("4 second passed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

// Fetch function
// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// request.send();

const request = fetch("https://restcountries.com/v3.1/name/India");
console.log(request);

/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderContry(data[0]);
    });
};
*/

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// simplified version of promises
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`country not found (${response.status})`);
//       return response.json();
//     })
//     .then((data) => {
//       renderContry(data[0]);
//       const neighbour = Object.keys(data[0].borders[0]);
//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((response) =>{if(!response.ok)throw new Error(`Country not found (${response.status})`)} response.json())
//     .then((data) => renderContry(data, "neighbour"))
//     .catch((err) => {
//       console.error(`${err}💥💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err} try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.com/v3.1/name/${country}`,
//     "country not found "
//   )
//     .then((data) => {
//       renderContry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error("no neighbour found!");

//       console.log(data);
//       // Country 2
//       getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((data) => renderContry(data, "neighbour"))
//     .catch((err) => {
//       console.error(`${err}💥💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err} try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener("click", function () {
//   getCountryData("india");
// });

// Coding challenge 1
/*
Your tasks:
PART 1
1. Create a function 'whereAmI' which takes asn inputs a latitude value 
('lat') and a longitude value ('lng') (these are GPS coordinates, examples 
are in test data below).
2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
to convert coordinates to a meaningful location, like a city and country name.
Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call 
will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json.
Use the fetch API and promises to get the data. Do not use the 'getJSON' function 
we created, that is cheating 😉
3. Once you have the data,take a look at it in the console to see all the attributes 
that you received about the provided location. Then, using this data, log a message 
like this to the console: “You are in Berlin, Germany”
4. Chain a.catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second.If youre loadfast,you will 
get this error with code 403. This is an error with the request. Remember, fetch() 
does not reject the promise in this case. So create an error to reject the promise 
yourself, with a meaningful error message
PART 2
6. Now it's time to use the received data to render a country.So take the relevant 
attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors,just like we haved one in the last lecture 
(you can even copy this code, no need to type the same code)
      The Complete JavaScript Course 30
Test data:
§ Coordinates 1: 52.508, 13.381 (Latitude, Longitude) 
§ Coordinates 2: 19.037, 72.873
§ Coordinates 3: -33.933, 18.474
GOOD LUCK 😀
*/

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((res) => {
//       if (!res.ok) throw new Error(`problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`your in ${data.city},${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then((res) => {
//       console.log(res);
//       if (!res.ok) throw new Error(`country not found (${res.status})`);
//       return res.json();
//     })
//     .then((data) => renderContry(data[0]))
//     .catch((err) => console.error(`${err.massage} 💥 `));
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// The Event Loop In Practics
// console.log("Test start");
// setTimeout(() => console.log("0 sec timer"), 0);
// Promise.resolve("Resolved promises 1").then((res) => console.log(res));

// Promise.resolve("Resolved promises 2").then((res) => {
//   for (let i = 0; i < 100000; i++) {}
//   console.log(res);
// });

// console.log("Test end");

// BULDING A SIMPLE PROMISES
// const lotteryPromises = new Promise(function (resolve, reject) {
//   console.log("Lottery draw is happening 🔮");
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve("You win 💰");
//     } else {
//       reject(new Error("You lost your money 💩"));
//     }
//   }, 2000);
// });
// lotteryPromises
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// // Promisifying setTimeout
// const wait = function (second) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, second * 1000);
//   });
// };

// asynchronous behavior
// wait(2)
//   .then(() => {
//     console.log("1 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("2 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("3 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("4 second passed");
//     return wait(1);
//   })
//   .then(() => console.log("5 second passed"));

// CallBack Hell
// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 second passed");
//     setTimeout(() => {
//       console.log("3 second passed");
//       setTimeout(() => {
//         console.log("4 second passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promise.resolve("abc").then((x) => console.log("x"));
// Promise.reject(new Error("problem!")).catch((x) => console.error("x"));

// PROMISIFYING THE GEOLOCATION APIS
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   (position) => resolve(position),
//     //   (err) => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// getPosition().then((pos) => console.log(pos));
// const whereAmI = function () {
//   getPosition()
//     .then((pos) => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`your in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then((res) => {
//       console.log(res);
//       if (!res.ok) throw new Error(`country not found (${res.status})`);
//       return res.json();
//     })
//     .then((data) => renderContry(data[0]))
//     .catch((err) => console.error(`${err.massage} 💥 `));
// };
// btn.addEventListener("click", whereAmI);

// CODING CHALLENGE #2
/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some 
stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. 
This function returns a promise which creates a new image (use document.
createElement('img')) and sets the .src attribute to the provided image path.
When the image is done loading, append it to the DOM element with the 'images'
class, and resolve the promise. The fulfilled value should be the image element
itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the 
wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'),
and load a second image (HINT: Use the image element returned by the createImage
   promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path.
 Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

let currentImg;

createImage("img/img-1.jpg")
  .then((img) => {
    currentImg = img;
    console.log("Image 1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log("Image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.error(err));

// const callMe = () =>
//   new Promise((res, reject) => {
//     const result = Math.random();

//     if (result > 0.5) {
//       res(result);
//     } else reject(result);
//   });

// const loading = false;

// callMe()
//   .then((result) => console.log("success", result))
//   .catch((err) => console.log("err", err))
//   .finally(() => console.log("setting loading to false"));

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
//     .then((response) => response.json())
//     .then((data) => renderContry(data, "neighbour"))
//     .catch((err) => {
//       console.error(`${err}💥💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err} try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    "country not found "
  )
    .then((data) => {
      renderContry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error("no neighbour found!");

      console.log(data);
      // Country 2
      getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((data) => renderContry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err}💥💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err} try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener("click", function () {
  getCountryData("india");
});

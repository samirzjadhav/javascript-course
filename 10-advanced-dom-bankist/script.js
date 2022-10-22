"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/*
// LECTURE
//  Selecting element
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const selectAll = document.querySelectorAll(".section");
console.log(selectAll);

document.getElementById("section--1");
const allButton = document.getElementsByTagName("button");
console.log(allButton);

console.log(document.getElementsByClassName("btn"));

// Creating and inserting element
// .insertAdjacentHTML
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  'We use cookied for improved funtionality and analytics. <button class="btn btn--close-cookie"> Got it!<button>';

header.prepend(message);
header.append(message);

// header.append(message.cloneNode(true));
// header.before(message);
header.after(message);

// Delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

// Data attribute
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c", "j");
logo.classList.contains("c", "j"); // not include

// Don't use it
logo.classList = "jonas";
*/

// Scrolling
const btnScrolling = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrolling.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log("current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "Height/Width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientHeight
  );

  // smooth scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

const h1 = document.querySelector("h1");

const alerth1 = function (e) {
  alert("addEventListener: Great! you are reading the heading :D");
};

h1.addEventListener("mouseenter", alerth1);

setTimeout(() => h1.removeEventListener("mouseenter", alerth1), 3000);

// h1.addEventListener("mouseenter", function (e) {
//   alert("addEventListener: Great! you are reading the heading :D");
// });

// h1.onmouseenter = function (e) {
//   alert("onmouseenter:  Great! you are reading the heading :D");
// };

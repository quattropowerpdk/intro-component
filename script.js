"use strict";

const firstName = document.querySelector(".first_name");
const lastName = document.querySelector(".last_name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btn = document.querySelector(".button");

const errorOne = document.querySelector(".one");
const errorTwo = document.querySelector(".two");
const errorThree = document.querySelector(".three");
const errorFour = document.querySelector(".four");

const imageOne = document.querySelector(".img1");
const imageTwo = document.querySelector(".img2");
const imageThree = document.querySelector(".img3");
const imageFour = document.querySelector(".img4");

function ValidateEmail(input, error, img) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (input.value.match(mailformat)) {
    error.classList.add("hidden");
    img.classList.add("hidden");
  } else {
    error.classList.remove("hidden");
    img.classList.remove("hidden");
  }
}

const errorMessage = function (input, error, img) {
  if (input.value === "") {
    error.classList.remove("hidden");
    img.classList.remove("hidden");
  } else {
    error.classList.add("hidden");
    img.classList.add("hidden");
  }
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  errorMessage(firstName, errorOne, imageOne);
  errorMessage(lastName, errorTwo, imageTwo);
  errorMessage(password, errorFour, imageFour);
  ValidateEmail(email, errorThree, imageThree);
});

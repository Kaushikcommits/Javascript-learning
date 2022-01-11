"use strict";

const modal = document.querySelector(".modal");
const btnsShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const showModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener(
    "click",
    /* not adding parantheses for the function here 
otherwise showModal fucntion will execute as soon as the for loop starts
 without waiting for the click to happen */ showModal
  );
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

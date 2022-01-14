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

// if ESC is pressed then the following happens
document.addEventListener(
  "keydown" /* if a key is only pressed once */,
  function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      //execute only if the modal is not hidden {
      closeModal();
    }
  }
);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

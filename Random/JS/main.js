"use strict";

const mainAge = (birthYear, year) => {
  const age = year - birthYear;
  return age;
};

const age = mainAge(1993, 2021);

console.log(`your age is ${age}`);

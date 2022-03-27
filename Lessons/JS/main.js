"use strict";

const mainAge = (birthYear, year) => {
  const age = year - birthYear;
  return age;
};

const age = mainAge(1993, 2021);

console.log(`your age is ${age}`);

/* --------------------------------- THIS Keyword and functions ----------------------------------*/

let firstName = "Matilda";

const kaushik = {
  firstName: "Kaushik",
  year: 1993,
  calcAge: function () {
    console.log(2037 - this.year);
    //this fucntion below will not work since the isMillenial function
    //is called inside a function hence the this keyword will be set to undefined

    /* 
    const isMillenial = function () {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },*/

    //instead this funciton will make the above code work but this was pre ES6
    /*
    const self = this;
    const isMillenial = function () {
      console.log("Hehe", self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },*/

    // After ES6, we can simply use the arrow function since
    //the arrow function does not have a this keyword and takes the this keyword from the parent's scope
    const isMillenial = () => {
      console.log("Hehe", this.year >= 1981 && this.year <= 1996); // 'THIS'is now pointing
      //to parent kaushik object
    };
    isMillenial(); // * this function is inside calcAge function
  },

  greet: function () {
    console.log(this.firstName);
  },
};

kaushik.greet();
kaushik.calcAge();

console.log(this.firstName);
/* this will return 'undefined' since 'this' keyword points to the global scope and 
firstName is declared as let, let or const does not create a variable property in the global scope instead only var does*/

//// Arguments Keyword //////
// function in the execution content in the callstack get a 'this' keyword and also the argument keyword as explained below
const addExpr = function (a, b) {
  console.log(arguments);
};

addExpr(2, 3, 16, 10);

//arrow functions do not get the arguments keyword just as they do not get the this keyword

/* ----------------------------------------------------- PRIMITIVE TYPES and OBJECTS -------------------------------------- */

/* What are Primitives also called as Primitive Types:
  - Number;
  - String;
  - Boolean;
  - Undefined;
  - Null;
  - Symbol;
  - BigInt;


  What are Objects also called as Reference Types:
  - Object Literal
  - Arrays
  - Functions
  - Many more..

  */

// PRIMITIVES
let age1 = 28;
let myAge = age1;
age1 = 30;

console.log(age1); // age will be equal to 30 now
console.log(myAge); // my age will be 28 since it has been declared before changing the value of age1 at the next line
// see *** img/primitives_and_objects_storage *** to understand about storage of values of primitives and objects in the memory

//REFERENCE TYPES
const me = {
  name: "Kaushik",
  age2: 28,
};
const friend = me;
friend.age2 = 26;

console.log("me :", me); // the above code will actually turn the age of me to 26, see *** img/primitives_and_objects_storage ***
console.log("friend: ", friend);

// Instead we can do like in the example below:

//Reference Types

const shirleyMarried = {
  firstName: "Shirley",
  lastName: "DIVAN",
};

const shirleyDivorced = Object.assign({}, shirleyMarried);
/* Object.assign() will copy the shirleyMarried object to an empty object {} and then store it inside shirleyDivorced so basically
creating a new reference and copy the shirleyMarried object to the new reference and pointing to the same 
value in the memory heap, in other words it doesn't do deep cloning. If we try to add an array and use .push 
for an array on the first object, it also applies .push to the cloned object, so for a deep cloning there are 
other ways that we will see later down the line. */

shirleyDivorced.lastName = "AMBROISE";
console.log("Shirley Married:", shirleyMarried);
console.log("Shirley Divorced:", shirleyDivorced);

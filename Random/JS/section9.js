"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // see A.3 and A.4
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // adding opening hours (see below : Destructuring Objects)
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // adding orderDelivery function (see B.6)
  //function with an object of 4 attributes as a parameter

  orderDelivery: function ({ starterIndex, mainIndex = 0, time, address }) {
    //mainIndex above is set to 0 in default if the function cannot destructure the object in parameter
    console.log(
      `Your order: 
        starter : ${this.starterMenu[starterIndex]}
        mainCourse : ${this.mainMenu[mainIndex]} 
        will be delivered to: ${address} at: ${time}`
    );
  },
};

/*********************** A/  Array desctucturing: ****************************/

// to pick out elements from the array inside the object restaurant above we can do the following:

// A.1) Destructuring

let [first, , third] = restaurant.categories;
/* accessing the 1st and the 3rd element
from the categories property/array of the restaurant object and storing it inside
first and third variables, to jump to the 3rd element, a blankspace
between first and third like this [first, ,third] is needed */
console.log(first, third); // console now prints Italian Vegetarian

// A.2) Switching variables

//switch the third variable with the first variable:
[first, third] = [third, first];
console.log(first, third); // this will now print Vegetarian Italian

// A.3) Function return an array

/* ( 2.0 ) To make a function return an array and then destruct :
    look at line 14 for the function declaration
*/

// A.4) Destructuring the data from the function

//Store 2  values inside variables from order function inside restaurant object
const [starter, mainCourse] = restaurant.order(3, 1);
console.log(starter, mainCourse); // this will return Caprese Salad Pasta thanks to the function

// A.5) Nested Destructuring

const nested = [5, 6, [7, 8]]; //this is a nested array, array inside array
const [a, , c] = nested;
console.log(a, c); // this will return 5, [7,8]

// to assign 7,8 to seperate variables we need to do the following:
const [d, , [f, g]] = nested;
console.log(d, f, g); // this will now print 5,7,8

// A.6) Default Values
const [l, m, n] = [2, 3];
console.log(l, m, n); // This will now print 2,3,undefined
const [o = 1, p = 1, q = 1] = [4, 5];
console.log(o, p, q); // this will now print 4,5,1 because q has now been set to 1 above

/************************** B/ Destructuring Objects : *************************/

/* 
The destructuring of Objects will be very useful to deal with the data 
from API calls, the data will be in the form of objects.
below are useful numbered tricks to destructure Objects:
*/

// added opening hours in the restaurant object above (see)

// B.1) assigning the attributes of the restaurant object to seperate variables
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // see log

// B.2) if we wanted to change the names of the variables, we can do this :
const {
  name: restaurantName,
  openingHours: timings,
  categories: tags,
} = restaurant;

// B.3) To set default arguments (like with arrays) in the object 'restaurant' to avoid undefined
//in the console log

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // this should now print '[]'

// B.4) Muttating the variable (like with the arrays)

let a1 = 111;
let b1 = 999;

const obj = { a1: 50, b1: 100, c1: 150 };

console.log(a1, b1); // this will print "111 999"

({ a1, b1 } = obj); // taking the values from obj and
//assigning it to the variables created above outside the object and
//wraping them inside parantheses () because
//without the (..), starting a code with { curly braces}, it becomes a code block
//(ex: " if (..) {code inside an if statement's curly braces can be called as code block} )
//since it not possible to declare a code black with "="
//it is necessary to wrap them inside parantheses

console.log(a1, b1); // This should now print "50 100"

// B.5) Nested Objects

// the openingHours inside the restaurant object has nested objects (thur, fri, sat),
// the openingHours is itself a nested object inside the restaurant object

//Destructuring nested objects:

const { open: openFriday, close: closeFriday } = openingHours.fri; //assigning objects
//inside openingHours to variables "open" changed name to "openFriday" and "close"
//changed name to closeFriday. Note that the . dot notation is used above for openingHours.fri
// instead of manual deconstructing
// const { fri:{open:openFriday, close:closeFriday} = openingHours }
console.log(openFriday, closeFriday); // this should now log the timings of Friday

// B.6) Destructing an object using functions

// added the function orderDelivery in the restaurant object. see above

//calling it
restaurant.orderDelivery({
  starterIndex: 1,
  mainIndex: 1,
  time: 15.34,
  address: "6 rue Beauséjour",
});

/************************* C/ Spread Operator : *********************** */

// The spread operator is used to unpack all the array elements at once

// C.1) EX:

const array1 = [7, 8, 9];
const badArray1 = [4, 5, 6, array1[0], array1[1], array1[2]];
console.log(badArray1);

const goodArray1 = [1, 2, 3, ...badArray1]; // the 3 dots spread operator
//unpacks all the elements of the array individually and prints them as separate values
console.log(goodArray1); // This will display Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(...goodArray1); // Unpacking this goodArray1 as well
// this will print : 1 2 3 4 5 6 7 8 9 without the array

// the spread operator can be used only when there is necessity to type array elements
//using commas ex: ,array1[0], array1[1], array1[2]

// C.2) Copy array and Join array

// Copy
const copyMainMenu = [...restaurant.mainMenu];
console.log(...copyMainMenu);
// Join
const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...menu1);

/* The spread operator can be used on all iterables:

  What are iterables?
  iterables are array, string, maps etc... will be covered in later sections 

*/

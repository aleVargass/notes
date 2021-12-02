// Explore Differences Between the var and let Keywords
/**
 * var keyword is that you can overwrite variable declarations without an error.
 * when using let, a variable with the same name can only be declared once
 */
let catName;
let quote;
function catTalk() {

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();



// Compare Scopes of the var and let Keywords
/**
 * the stored function will always refer to the value of the updated global i variable.
 *  returns the global i and not the value i had when the function was created in the for loop.
 */
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);



// Declare a Read-Only Variable with the const Keyword
/**
 * A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.
 * It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays).
 */
function printManyTimes(str) {

  // Only change code below this line
  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
  // Only change code above this line

}
printManyTimes("freeCodeCamp");



// Mutate an Array Declared with const
/**
 * objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.
 */
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
    s[0] = 2
    s[1] = 5
    s[2] = 7
  // Using s = [2, 5, 7] would be invalid
  // Only change code above this line
}
editInPlace();



// Prevent Object Mutation
/**
 *  function Object.freeze to prevent data mutation.
 * Once the object is frozen, you can no longer add, update, or delete properties from it
 */
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS)
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();



// Use Arrow Functions to Write Concise Anonymous Functions
/**
 * we often don't need to name our functions, especially when passing a function as an argument to another function.
 * Use Arrow Functions to Write Concise Anonymous Functions
 */
const magic = () => new Date();



// Write Arrow Functions with Parameters
/**
 * If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.
 */
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));



// Set Default Parameters for Your Functions
/**
 * The default parameter kicks in when the argument is not specified (it is undefined).
 * You can add default values for as many parameters as you want.
 */
// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line



// Use the Rest Parameter with Function Parameters
/**
 *  you can create functions that take a variable number of arguments. 
 * . These arguments are stored in an array that can be accessed later from inside the function.
 * The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.
 */
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}



// Use the Spread Operator to Evaluate Arrays In-Place
/**
 * which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
 * returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work: const spreaded = ...arr;
 */
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);



// Use Destructuring Assignment to Extract Values from Objects
/**You can extract as many or few values from the object as you want. */
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

const { name, age } = user;

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today, tomorrow} = HIGH_TEMPERATURES



// Use Destructuring Assignment to Assign Variables from Objects
/**
 *  allows you to assign a new variable name when extracting values.
 * You can do this by putting the new name after a colon when assigning the value.
 * 
 */
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;



// Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST




// Use Destructuring Assignment to Assign Variables from Arrays
/**
 * Spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.
 * Destructuring an array lets us do exactly that
 * We can also access the value at any index in an array with destructuring by using commas to reach the desired index
 */
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

let a = 8, b = 6;
// Only change code below this line
[a,b] = [b,a]



// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
/**
 * The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.
 */
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b,...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);



// Use Destructuring Assignment to Pass an Object as a Function's Parameters
/**
 * This effectively destructures the object sent into the function.
 */
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max,min}) => (max + min) / 2.0; 
// Only change code above this line



//Create Strings using Template Literals
/**
 * Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
 */
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line
  //  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);

  return failureItems;
}

const failuresList = makeList(result.failure);



// Write Concise Object Literal Declarations Using Object Property Shorthand
/**
 * ou can simply write x once, and it will be converted tox: x (or something equivalent) under the hood.
 */
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name, age,gender
  };
  // Only change code above this line
};



// Write Concise Declarative Functions with ES6
/**
 * you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:
 */
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);



// Use class Syntax to Define a Constructor Function
/**
 * It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, 
 * The class syntax simply replaces the constructor function creation
 * It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.
 * UpperCamelCase should be used by convention for ES6 class names
 * The constructor method is a special method for creating and initializing an object created with a class
 */
// Only change code below this line
class Vegetable{
  constructor(name) {
  this.name = name
  }
}
// Only change code above this line
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'



// Use getters and setters to Control Access to an Object
/**
 * You can obtain values from an object and set the value of a property within an object.
 * Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
 * Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.
 * Getters and setters are important because they hide internal implementation details.
 * It is convention to precede the name of a private variable with an underscore (_). 
 */
// Only change code below this line
class Thermostat{
  constructor(F) {
    this._F = F
  }
  get temperature() {
    return 5/9 * (this._F-32)
  }
  set temperature(C) {
    this._F = C * 9/5 + 32
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius



// Create a Module Script
/**
 * Exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them.
 */
<html>
  <body>
    {/* <!-- Only change code below this line --> */}
<script type="module" src="index.js"></script>
    {/* <!-- Only change code above this line --> */}
  </body>
</html>



// Use export to Share a Code Block
/**
 * You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it.
 */
export const add = (x, y) => {
  return x + y;
}
//Or
const add = (x, y) => {
  return x + y;
}

export { add };
//Export multiple things
export { add, subtract };



// Reuse JavaScript Code Using import
/**
 * Allows you to choose which parts of a file or module to load.
 *  The ./ tells the import to look for the file in the same folder as the current file.
 * The relative file path (./) and file extension (.js) are required when using import in this way.
 */
import { add } from './math_functions.js';
// Multiple
import { add, subtract } from './math_functions.js';

// Example
import {uppercaseString, lowercaseString} from "./string_functions.js"

uppercaseString("hello");
lowercaseString("WORLD!");



// Use * to Import Everything from a File
/**
 * The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property.
 */
import * as stringFunctions from "./string_functions.js"

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");



// Create an Export Fallback with export default
/**
 * Use this syntax if only one value is being exported from a file.
 * also used to create a fallback value for a file or module.
 *  you cannot use export default with var, let, or const
 */
export default function subtract(x, y) {
  return x - y;
}



// Import a Default Export
/**
 * , is not surrounded by curly braces ({})
 * You can use any name here when importing a default.
 */
  import subtract from "./math_functions.js"

subtract(7,4);



// Create a JavaScript Promise
/**
 * Promise is a constructor function, so you need to use the new keyword to create one.
 * It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise.
 */
const makeServerRequest= new Promise((resolve, reject) => {
  
})



// Complete a Promise with resolve and reject
/**
 *  promise has three states: pending, fulfilled, and rejected.
 */
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve('We got the data')
  } else {  
    reject('Data not received')
  }
});



// Handle a Fulfilled Promise with then
/**
 * then method is executed immediately after your promise is fulfilled with resolve.
 * result comes from the argument given to the resolve method.
 */
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }

  makeServerRequest.then(result => {
    console.log(result)
  })
});



// Handle a Rejected Promise with catch
/**
 * is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called.
 * error is the argument passed in to the reject method.
 */
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});
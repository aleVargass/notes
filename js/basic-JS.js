// Declare JavaScript Variables
/**
 * Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.
 * types: undefined, null, boolean, string, symbol, bigint, number, and object.
 * Computer variables differ from mathematical variables in that they can store different values at different times.
 * Any of the eight data types may be stored in a variable.
 * Computers can perform mathematical operations on a number, but not on a string.
 * Variables which are declared without the var keyword are automatically created in the global scope
 */
var myName;



// Understanding Uninitialized Variables
/**
 * They have an initial value of undefined
 * If you do a mathematical operation on an undefined variable your result will be NaN
 * If you concatenate a string with an undefined variable, you will get a literal string of undefined.
 */



// Understanding Case Sensitivity in Variables
/**
 * all variables and function names are case sensitive
 * Write variable names in JavaScript in camelCase
 */
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;



// Concatenating Strings with the Plus Equals Operator
var ourStr = "I come first. ";
ourStr += "I come second.";



// Create Decimal Numbers with JavaScript
/**
 * Decimal numbers are sometimes referred to as floating point numbers or floats.
 * Not all real numbers can accurately be represented in floating point. https://en.wikipedia.org/wiki/Floating-point_arithmetic#Accuracy_problems
 */
var myDecimal = .1;



// Finding a Remainder in JavaScript
/**
 * The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.
 */
var remainder = 11 % 3;



// Escaping Literal Quotes in Strings
/**
 * you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.
 */
var sampleStr = "Alan said, \"Peter is learning JavaScript\".";



// Escape Sequences in Strings
/**
 * \':	single quote
\":	double quote
\\:	backslash
\n:	newline
\r:	carriage return
\t:	tab
\b:	word boundary
\f:	form feed
 */
var myStr = "FirstLine\n"
    "\t\\SecondLine\n"
"ThirdLine"; 



// Understand String Immutability
/**
 * String values are immutable, which means that they cannot be altered once created.
 * to change myStr would be to assign it with a new string, 
 */
var myStr = "Bob";
myStr = "Job";




// Arrays
/**
 * push(): takes one or more parameters and "pushes" them onto the end of the array. 
 * pop(): removes the last element from an array and returns that element.
 * shift(): removes the first element from an array and returns that element.
 * unshift() adds the element at the beginning of the array.
 */
const arr = [];
arr.push(1,2);
let elementPoped = arr.pop();
arr.shift();
arr.unshift(0);



// Assignment with a Returned Value
/**
 * we can take the return value of a function and assign it to a variable.
 */
ourSum = sum(5, 12);



// Comparison with the Equality Operator
/**
 * In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. 
 */
1   ==  1 //true
1   ==  2 //false
1   == '1' //true
"3" ==  3 //true




// Selecting from Many Options with Switch Statements
/**
 * case values are tested with strict equality (===).
 *  The break tells JavaScript to stop executing statements. 
 * If the break is omitted, the next statement will be executed.
 */
switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}

var result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}



// Build JavaScript Objects
/**
 * You can even omit the quotes for single-word string properties,
 * if your object has any non-string properties, JavaScript will automatically typecast them as strings.
 */
var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};




// Accessing Object Properties with Bracket Notation
/**
 * . If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
 *  you can still use bracket notation on object properties without spaces.
 */
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];

// Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);



//add a property
myObj.newProp = newValue;



//delete properties
delete myObj.prop;



// Testing Objects for Properties
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");



//  Accessing Nested ObjectsPassed
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;



// Accessing Nested Arrays
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1];
ourPets[1].names[0];



// Validations in objects
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if(prop !== 'tracks' && value) records[id][prop] = value
  else if (prop === "tracks" && !records[id].hasOwnProperty('tracks')) records[id][prop] = [value] 
    else if(prop === 'tracks' && value) records[id][prop].push(value)
   else if(!value) {
    delete records[id][prop]
  }
  console.log(records[id])
  return records
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');



// Nesting For Loops
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}



// Profile Lookup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
    for(let i = 0; i<contacts.length; i++) {
        if(contacts[i].firstName === name) {
            if(contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop]
            } else {
                return 'No such property'
            }
        }
    }
    return 'No such contact' 
  // Only change code above this line
}

lookUpProfile("Akira", "likes");



// Generate Random Whole Numbers within a Range
/**
 * 
 * @param {*} myMin 
 * @param {*} myMax 
 * @returns Random int  >= myMin && <= myMax
 */
function randomRange(myMin, myMax) {
  return Math.floor(Math.random()*(myMax - myMin +1 )) + myMin;
}



// Use the parseInt Function
function convertToInteger(str) {
  return parseInt(str)
}

convertToInteger("56"); 



// Use Multiple Conditional (Ternary) Operators
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}



// Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const countArr = rangeOfNumbers(startNum, endNum - 1);
    countArr.push(endNum);
    return countArr;
  };
};
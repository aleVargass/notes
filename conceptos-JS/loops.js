// Syntax
for (let i = 0; i < Array.length, i++;) {
}



// for... in 
/**
 * dot notation don´t work 
 */
for (const keys in ale) {
    console.log(keys, ale[keys]);
}
// Ex.
function countOnline(usersObj) {
  let count = 0;
  for (const keys in usersObj) {
    if (usersObj[keys].online === true) {
      count++;
    };
  }
  return count
}



// for... of
/**
 * Iterate over the values
 */
colores = ['blanco', 'negro', 'verde'];
for (const values of colores) {
console.log(values)
}



// Object.keys()
/**
 * Syntax: Object.keys(obj)
 * Usage: Return an array with the keys
 */
// Ex.
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
   return Object.keys(obj)
}

console.log(getArrayOfUsers(users));



// Modify an array stored in an object
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend)
  return userObj.data.friends
}

console.log(addFriend(user, 'Pete'));



//break/continue
//solo funciona en estructuras de control (for, while
//break detiene la estructura de control
const numeros2 = [5, 10, 15, 20, 25, 30];
for (let i = 0; i < numeros2.length; i++) { if (i===2) { break; } console.log(numeros[i]); } 
// continue detiene la iteracion
    for (let i=0; i < numeros.length; i++) { if (i===2) { continue; } console.log(numeros[i]); }



//iterable y iterator
    /* i -> Array Iterator {}
i.next() -> Object { value: any, done: boolean }
i.next().value -> elem
i.next().done -> boolean */
const iterable = [10, 20, 30, 40, 50];



//crear una variable iterator a partir de un iterable
const i = iterable[Symbol.iterator]();

let element = i.next();
while (!element.done) {
    console.log(element.value);
    element = i.next();
}



// .endsWith() without an substring method
function confirmEnding(str, target) {
  let sliced_string = ""
  for (let i = str.length-target.length; i<str.length; i++) {
    sliced_string += str[i]
  }

  console.log(sliced_string)
  if (sliced_string !== target) {
    return false
  }
  return true;
}

confirmEnding("Bastian", "n");



// repeat() without methods
function repeatStringNumTimes(str, num) {
  let repeated_str = "";
  for (let i = 0; i < num; i++) {
    repeated_str += str
  }
  console.log(repeated_str)
  return repeated_str;
}

repeatStringNumTimes("abc", 3);



// truncate string
function truncateString(str, num) {
  if (str.length <= num) {
    return str
  }

  let truncated_str = "";
  for (let i = 0; i < num; i++) {
    truncated_str += str[i]
  }
  truncated_str += "..."
  console.log(truncated_str)
  return truncated_str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
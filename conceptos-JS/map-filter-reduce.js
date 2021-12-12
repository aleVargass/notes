// high order functions dont modify the object or array

// filter()
/* brackets if are 2+ args */
function getRating(watchList) {
  // Only change code below this line
  let count = 0;
  const averageRating = watchList.filter(movie =>
    movie["Director"] === "Christopher Nolan"
  ).map(movie => movie["imdbRating"])
  .reduce((sum, rating) => {
    count++;
    return sum + parseFloat(rating)}, 0) / count;
  
  // Only change code above this line
  return averageRating
}

console.log(getRating(watchList));



// reduce() Syntax:
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];
const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);

// More ex:
const squareList = arr => {
  // Only change code below this line
  return arr = arr.filter(num => num > 0 && parseInt(num) === num)
  .reduce((array, num) => {
     array.push(num * num)
     return array
  }, []);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
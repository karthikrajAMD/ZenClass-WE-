//2).
// Warmup problems (https://medium.com/@reach2arunprakash/guvi-zen-class-javascript-warm-up-programming-problems-15973c74b87f)

// Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.

function addFive(num) {
  return num + 5;
}
console.log(addFive(5));
console.log(addFive(0));
console.log(addFive(-5));

// Write a function called “getOpposite”.
// Given a number, return its opposite

function getOpposite(num) {
  if (num === 0) return 0;
  if (Number.isInteger(num)) {
    return -num;
  } else {
    return -1;
  }
}
console.log("......Opposite of num....");

console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite("5a"));
console.log(getOpposite(5.5));

//Fill in your code that takes an number minutes and converts it to seconds.

function toSeconds(min) {
  return min * 60;
}
console.log("......min to seconds....");
console.log(toSeconds(5));
console.log(toSeconds(3));
console.log(toSeconds(2));

//Create a function that takes a string and returns it as an integer.

function toInteger(mystr) {
  return parseInt(mystr);
}
console.log("......string to num....");
console.log(toInteger("6"));
console.log(toInteger("1000"));
console.log(toInteger("12"));

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function nextNumber(myint) {
  return myint + 1;
}
console.log("......increment of num....");
console.log(nextNumber(0));
console.log(nextNumber(9));
console.log(nextNumber(-3));

//Create a function that takes an array and returns the first element.

function getFirstElement(arr) {
  return arr[0];
}
console.log("......1st element of array...");
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement([80, 5, 100]));
console.log(getFirstElement([-500, 0, 50]));

// Convert Hours into Seconds
// Write a function that converts hours into seconds.

function hourToSeconds(arr) {
  return arr * 60 * 60;
}
console.log("......hours to seconds...");
console.log(hourToSeconds(2));
console.log(hourToSeconds(10));
console.log(hourToSeconds(24));

// Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.

function findPerimeter(num1, num2) {
  return (num1 + num2) * 2;
}
console.log("......Perimeter of Rectangle...");
console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
console.log(findPerimeter(2, 9));

// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(num1, num2) {
  if (num1 + num2 < 100) return true;
  return false;
}
console.log("......true if sum is less than 100..");
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));

// There is a single operator in JavaScript, capable of providing the remainder of a division operation.
// Two numbers are passed as parameters. The first parameter divided by the second
// parameter will have a remainder, possibly zero. Return that value.

function remainder(num1, num2) {
  if (num1 % num2) return num1;
}
console.log("......remainder....");
console.log("remainder(1, 3): ", remainder(1, 3));
console.log("remainder(3, 4): ", remainder(3, 4));
console.log("remainder(-9, 45): ", remainder(-9, 45));

// The farmer has counted his animals and he gives you a subtotal for each species.
// You have to implement a function that returns the total number of legs of all the animals.

function CountAnimals(tur, horse, pigs) {
  return tur * 2 + horse * 4 + pigs * 4;
}
console.log("......count animals leg....");
console.log("CountAnimals(2, 3, 5): ", CountAnimals(2, 3, 5));
console.log("CountAnimals(1, 2, 3): ", CountAnimals(1, 2, 3));
console.log("CountAnimals(5, 2, 8): ", CountAnimals(5, 2, 8));

// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function frames(num1, num2) {
  return num1 * num2 * 60;
}
console.log("......No.of Frames....");
console.log("frames(1,1): ", frames(1, 1));
console.log("frames(10,1): ", frames(10, 1));
console.log("frames(10,25): ", frames(10, 25));

// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divisibleByFive(num1) {
  if (num1 % 5 === 0) return true;
  return false;
}
console.log("......div by 5....");
console.log("divisibleByFive(5): ", divisibleByFive(5));
console.log("divisibleByFive(-55): ", divisibleByFive(-55));
console.log("divisibleByFive(37): ", divisibleByFive(37));

// Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.

function isEven(num) {
  if (Number.isInteger(num)) {
    if (num % 2 === 0) return true;
    return false;
  }
  return -1;
}
console.log("......Even....");
console.log("isEven(12): ", isEven(12));
console.log("isEven(0): ", isEven(0));
console.log("isEven(11): ", isEven(11));
console.log("isEven(11h): ", isEven("11h"));

// Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

function areBothOdd(num1, num2) {
  if (num1 % 2 != 0 && num2 % 2 != 0) return true;
  return false;
}
console.log("......both num are odd or not....");
console.log("areBothOdd(1, 3): ", areBothOdd(1, 3));
console.log("areBothOdd(2, 3): ", areBothOdd(2, 3));
console.log("areBothOdd(0, 4): ", areBothOdd(0, 4));
console.log("areBothOdd(0, 0): ", areBothOdd(0, 0));

// Write a function called “getFullName”.
// Given a first and a last name, “getFullName”
// returns a single string with the given first and last names separated by a single space.

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log("......firstName lastName...");
console.log("getFullName(“GUVI”, “GEEK”): ", getFullName("GUVI", "GEEK"));
console.log("getFullName(“GUVI”, ):", getFullName("GUVI", ""));
console.log("getFullName(, “GEEK”):", getFullName("", "GEEK"));
console.log("getFullName(“”, “”): ", getFullName("", ""));

// Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.
// Input:

function getLengthOfWord(word1) {
  if (typeof word1 == "string") return word1.length;
  return -1;
}
console.log("......get length ...");
console.log("getLengthOfWord(“GUVI”): ", getLengthOfWord("GUVI"));
console.log("getLengthOfWord(“”): ", getLengthOfWord(""));
console.log("getLengthOfWord(): ", getLengthOfWord());
console.log("getLengthOfWord(9): ", getLengthOfWord(9));

// Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.

function isSameLength(word1, word2) {
  if (word1.length === word2.length) return true;
  return false;
}
console.log("......is same length....");
console.log("isSameLength(“GUVI”, “GEEK”): ", isSameLength("GUVI", "GEEK"));

// Create a function to calculate the distance between two points
// defined by their x, y coordinates

function getDistance(x1, y1, x2, y2) {
  let y = x2 - x1;
  let x = y2 - y1;
  return Math.sqrt(x * x + y * y);
}
console.log("......is same length....");
console.log(getDistance(100, 100, 400, 300));

// Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array.
//  If the array has a length of 0, it should return ‘undefined’

function getNthElement(array, n) {
  if (array.length == 0) return "undefined";
  return array[n];
}
console.log("......getNthElement....");
console.log("getNthElement([1, 3, 5], 1): ", getNthElement([1, 3, 5], 1));

// Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array.
//  If the given array has a length of 0, it should return ‘-1’.
function getLastElement(array) {
  if (array.length == 0) return -1;
  return array[array.length - 1];
}
console.log("......getLastElement....");
console.log("getLastElement([1, 2, 3, 4]): ", getLastElement([1, 2, 3, 4]));

// Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key.
// If there is no property at the given key, it should return undefined.

var obj = {
  name: "Karthik Raja",
  age: 24,
  dob: "28-04-1998",
};
function getProperty(object, key) {
  return object[key];
}
console.log("......getProperty....");
console.log("getProperty(obj,name): ", getProperty(obj, "name"));
console.log("getProperty(obj,age): ", getProperty(obj, "age"));
console.log("getProperty(obj): ", getProperty(obj, "fullname"));

// Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.

var obj = {
  fullname: "Karthik Raja",
};
function addProperty(object, key) {
  return (object[key] = true);
}
console.log("......addProperty....");
console.log("diplaying object", obj);
console.log("addProperty(obj, “is 18+”): ", addProperty(obj, "is 18+"));

// Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.

var obj = {
  fullname: "Karthik Raja",
};
function removeProperty(object, key) {
  return delete object[key];
}
console.log("......removeProperty....");
console.log("removeProperty(obj, “name”): ", removeProperty(obj, "fullname"));
console.log("diplaying object", obj);

// Return an array, where the first element is the count of positives numbers and the
// second element is sum of negative numbers.

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar3 = [];
var neg, pos;
var ar2 = function countPositivesSumNegatives(arr) {
  pos = arr
    .filter((n) => n > 0)
    .length.toString()
    .split(" ");
  neg = arr
    .filter((n) => n < 0)
    .length.toString()
    .split(" ");
  ar3.push(pos, neg);
  return ar3;
};
console.log("......count positive negative....");
console.log(ar2(arr));

// Create a function that receives an array of numbers and returns an array
// containing only the positive numbers

function getPositives(ar) {
  return ar.filter((n) => n > 0);
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log("......only positive negative....");
console.log(ar2);

// Write a function `powersOfTwo` which will return list of
//  all powers of 2 from 0 to n (where n is an exponent).

function powersOfTwo(n) {
  var myArray = [];
  for (var i = 0; i <= n; i++) {
    myArray.push(2 ** i);
  }
  return myArray;
}
console.log("......powersOfTwo....");
console.log("powersOfTwo(0): ", powersOfTwo(0));
console.log("powersOfTwo(1): ", powersOfTwo(1));
console.log("powersOfTwo(2): ", powersOfTwo(2));

// Find the maximum number in an array of numbers

function findMax(ar) {
  return ar.filter(function (n) {
    if (n > m) m = n;
  });
}
var m = 0;
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("......maximum number in an array....");
console.log(`Max:  ${m}`);

// Print the first 100 prime numbers
// Function prints the first nPrimes numbers

printPrimes(100);
function printPrimes(nPrimes) {
  var n = 0;
  var i = 2;
  console.log("......first nPrimes numbers....");
  while (n < nPrimes) {
    if (isPrime(i)) {
      console.log(n, " → ", i);
      n++;
    }

    i++;
  }
}
// Returns true if a number is prime
function isPrime(n) {
  if (n == 2) return true;
  else {
    for (i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
      return true;
    }
  }
}

// Create a function that will return in an array the first “nPrimes”
//  prime numbers greater than a particular number “startAt”
console.log("......particular number “startAt”....");
console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt) {
  var ar = [];
  var i = startAt;

  while (ar.length < nPrimes) {
    if (isPrime(i)) {
      ar.push(i);
    }

    i++;
  }
  return ar;
}

// Returns true if a number is prime
function isPrime(n) {
  if (n < 2) return false;

  if (n == 2) return true;

  var maxDiv = Math.sqrt(n);

  for (var i = 2; i <= maxDiv; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

// Reverse a string

var s = reverseString("JavaScript");
console.log("......Reverse a string....");
console.log(s);
function reverseString(s) {
  return s.split("").reverse().join("");
}

// Create a function that will merge two arrays and return the result as a new array

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];

var ar = mergeArrays(ar1, ar2);
console.log("......merge two arrays....");
console.log(ar);
function mergeArrays(ar1, ar2) {
  var result = [];

  for (let el of ar1) {
    result.push(el);
  }
  for (let e2 of ar2) {
    result.push(e2);
  }

  return result;
}

// Calculate the sum of numbers received in a comma delimited string
console.log("......sum of numbers....");
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s) {
  let sum1 = 0;
  let sum = s.split(" ");

  for (f of sum) {
    sum1 += parseFloat(f);
  }
  return sum1;
}

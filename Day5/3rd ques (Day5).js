// a. Print odd numbers in an array

let arr = [1, 2, 3, 4, 5, 9, 46, 99, 95, 101, 103, 420];

console.log(
  "a).Odd Numbers in Array: " +
    arr.filter((n) => {
      return n % 2 !== 0;
    })
);

//b. Convert all the strings to title caps in a string array

let string = ["Karthik", "Raja", "studies", "at", "Guvi"];

string = string.map((n) => {
  return n.toUpperCase();
});
console.log("b).Caps String Array is: " + string);

//c. um of all numbers in an array using numArray Defined Above
let num = [1, 2, 3, 4, 5, 9, 46, 99, 95, 101, 103, 420];
let sum = num.reduce((sum, cur) => {
  return sum + cur;
});

console.log("c).Sum of elements in Array: " + sum);

// d. Return all the prime numbers in an array
let arr1 = [1, 2, 3, 4, 5, 9, 46, 99, 95, 101, 103, 420];
let prime = arr1.filter((n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return n != 1;
});
console.log("d).Prime Number in array are: " + prime);

// e. Return all the palindromes in an array
let e = [111, 102, 505, 323, 612, 776, 707, 121];

let palin = (function (arrayString) {
  return e.filter((n) => {
    let source = n + "";

    if (source.split("").reverse().join("") === n + "") return true;

    return false;
  });
})(e);

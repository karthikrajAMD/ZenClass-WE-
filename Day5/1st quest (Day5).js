//1).
// a). Print odd numbers in an array
let a = [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 26, 27];
const oddnum = a.filter((n) => n % 2);
console.log(oddnum);

// b).Convert all the strings to title caps in a string array

let b = ["raja", "is", "doing", "fullstack", "at", "guvi"];
const caps = b.map((n) => n.toUpperCase());
console.log(`The result is ${caps}`);

//c).Sum of all numbers in an array
let c = [2, 3, 5, 6, 8, 22, 33, 44];

const sum = c.reduce((s, curr) => s + curr);

console.log(sum);

//d).Return all the prime numbers in an array

let d = [1, 2, 3, 4, 5, 6, 34, 56, 77, 19, 21, 11];

const prime = d.filter(function (n) {
  for (i = 2; i < n / 2; i++) {
    if (n % i == 0) return false;
    return true;
  }
});
console.log(prime);

//e).Return all the palindromes in an array

let e = ["madam", "sir", "teacher", "hello", "wow", "guvi"];

let palin = (function (arrayString) {
  return e.filter((n) => {
    let source = n + "";
    // var rev = source.split("").reverse().join("");

    if (source.split("").reverse().join("") === n + "") return true;

    return false;
  });
})(e);
console.log("Pallindrome from given strings in array are:" + palin);

//f).Return median of two sorted arrays of the same size

let a1 = [1, 2, 3, 4, 5, 8, 10, 13];
let b1 = [8, 9, 10, 12, 16, 20, 22];

function median(arr) {
  if (arr.length % 2 === 0) {
    index = arr.length / 2;
    mid = (arr[index] + arr[index - 1]) / 2;

    console.log("Median of array 1: " + Math.round(mid));
  } else {
    console.log("Median of array 1: " + arr[Math.trunc(arr.length / 2)]);
  }

  return;
}
median(a1);
median(b1);

//g).Remove duplicates from an array
let a2 = [2, 3, 4, 3, 5, 6, 2, 44, 65, 35, 44, 65, 89];

let dupp = ((arr, index) => {
  return [...new Set(a2)];
})(a2);

console.log("Array without Duplicates " + dupp);

//h).Rotate an array by k times

let a3 = [1, 3, 4, 7, 8, 10];
let rotate = ((arr, k) => {
  for (let i = 0; i < k; i++) {
    let val = arr.shift();
    arr.push(val);
  }
  return arr;
})(a3, 3);

console.log(`Array roatated by k times is: ${rotate}`);

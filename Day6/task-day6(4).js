//4).Find the culprits and nail them — debugging javascript
//https://medium.com/@reach2arunprakash/guvi-zen-simple-debugging-tasks-adcdc2d3249d

//1).Fix the code to get the largest of three.

aa = (f, s, t) => {
  f, s, t;
  console.log("1).");
  console.log(f, s, t);
  if (f > s && f > t) {
    console.log(f);
  } else if (s > f && s > t) {
    console.log(s);
  } else {
    console.log(t);
  }
};
aa(1, 2, 3);

//2).Fix the code to Sum of the digits present in the number

let n = 123;
n = n.toString();
var sum = 0;
console.log("2).", add(n));

function add(n) {
  for (var i = 0; i < n.length; i++) {
    sum += +n[i];
  }
  return sum;
}

//3).Fix the code to Sum of all numbers using IIFE function
var arr = [9, 8, 5, 6, 4, 3, 2, 1];

console.log(
  "3).",
  (function (arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  })(arr)
);

//4).Fix the code to gen Title caps.

var arr = ["guvi", "geek", "zen", "fullstack"];
console.log("4).");
var ano = function (arro) {
  for (var i = 0; i < arro.length; i++) {
    console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
  }
};
ano(arr);

//5).Fix the code to return the Prime numbers

const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter((num) => {
  for (let i = 2; i <= num; i++) {
    if (num % i === 0 && num != 2) {
      return false;
    }
    return true;
  }
});
console.log("5).", myPrime);

//6).Fix the code to sum the number in that array

const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var sum = (a, b) => a + b;
sum = num.reduce(sum);
console.log("6).", sum);

//7).Fix the code to rotate an array by k times and return rotated array using IIFE function
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function (arr) {
  out = arr.slice(k + 1, arr.length);
  var count = out.length;
  for (var i = 0; i < k + 1; i++) {
    out[count] = arr[i];
    count += 1;
  }
  console.log("7).", out);
})(arr);

//8).Fix the code to gen Title caps.
var arr = ["guvi", "geek", "zen", "fullstack"];
console.log("8).");
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
  }
})(arr);

//9).print all odd numbers in an array using IIFE function

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
console.log("9).");
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      console.log(arr[i]);
    }
  }
})(arr);

//10).Fix the code to reverse.

(function (str) {
  str = str.split("").reverse().join("");
  console.log("10).", str);
})("abcd");

//11).Fix the code to remove duplicates.
var res = function (arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  console.log("11).", newArr);
};
res(["guvi", "geek", "guvi", "duplicate", "geek"]);

//12).Fix the code to give the below output:
var array = [
  [
    ["firstname", "vasanth"],
    ["lastname", "Raje"],
    ["age", 24],
    ["role", "JSWizard"],
  ],
  [
    ["firstname", "Sri"],
    ["lastname", "Devi"],
    ["age", 28],
    ["role", "Coder"],
  ],
];
var final = [];
while (array.length != 0) {
  var outer_remove = array.shift();

  while (outer_remove.length != 0) {
    var inner_remove = outer_remove.shift();
    var key = inner_remove[0];
    var value = inner_remove[1];
    var new_object = {};
    new_object[key] = value;
    final.push(new_object);
  }
}
console.log("12).", final);

//13).Sum of odd numbers in an array

var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var odd = 0;
var s = as.reduce(function (a, c) {
  if (c % 2 == 1) {
    return (odd = odd + c);
  }
  return a;
});
console.log("13).", s);

//14).Swap the odd and even digits
aa = (data) => {
  var a = data;
  var l = "";
  for (i = 0; i < a.length - 1; i++) {
    var s = a[i + 1];
    var b = a[i];
    l += s;
    l += b;
    i = i + 1;

    if (a.length % 2 != 0) {
      l += a[a.length - 1];
    }
  }
  console.log("14).", l);
};
aa("1234");

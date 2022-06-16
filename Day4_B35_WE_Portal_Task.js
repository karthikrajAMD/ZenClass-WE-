// //1). How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

console.log(obj1 == obj2); // false because both obj1&2 points to different instance

//but we can prove by matching with their key and value using loop.

function compare(a, b) {
  let bool = false;

  for (key in a) {
    if (a[key] == b[key]) {
      bool = true;
    } else {
      bool = false;
      break;
    }
  }
  return bool;
}
console.log(compare(obj1, obj2));

// 2). Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console

const getflag = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v3.1/all");
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
    const countries = xhr.response;

    for (n of countries) {
      let im = document.createElement("img");
      // let img = document.querySelector("img");
      console.log("Flag Image URL:" + n.flags.png);
      let image = im.setAttribute("src", n.flags.png);
      document.body.append(im);
    }
  };
};

getflag();

//3). Use the same rest countries and print all countries name, region, sub region and population

const getall = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v3.1/all");
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
    const countries = xhr.response;

    for (n of countries) {
      console.log("Name is:" + n.name.common);
      console.log("Region is:" + n.region);
      console.log("Sub Region is:" + n.subregion);
      console.log("Population is:" + n.population);
    }
  };
};

getall();

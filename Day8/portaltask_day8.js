//a.Get all the countries from Asia continent /region using Filter function

const getall = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v3.1/all");
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
    const countries = xhr.response;
    for (n of countries) {
      if (n.region == "Asia") {
        console.log(`The countries in Asia are "${n.name.common}"`);
      }
    }
  };
};
getall();

//b.Get all the countries with a population of less than 2 lakhs using Filter function
const pop = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v3.1/all");
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
    const countries = xhr.response;

    const val = countries.filter(function (n) {
      if (n.population < 200000) {
        return n;
      }
    });
    console.log(val);
  };
};
pop();

//c.Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var countries = JSON.parse(this.response);
  countries.forEach((n) => {
    console.log(
      `Name is "${n.name.common}" it's Capital is: "${n.capital}" flag is "${n.flag}"`
    );
  });
};

//d.Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var countries = JSON.parse(this.response);
  const population = countries.reduce((acc, n) => {
    return acc + n.population;
  }, 0);
  console.log("The total population is:", population);
};

//e.Print the country which uses US Dollars as currency.

const usd = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v3.1/all");
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
    const countries = xhr.response;

    const val = countries.filter(function (n) {
      if ((n.currencies.USD = "United States dollar")) {
        console.log("name:", n.name.common, "==>", n.currencies);
      }
    });
  };
};
usd();

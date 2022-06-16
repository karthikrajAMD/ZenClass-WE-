//1).https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie {
  constructor(title, studio, rating = "PG") {
    this.Title = title;
    this.Studio = studio;
    this.Rating = rating;
  }
}

const movie1 = new Movie("Casino Royale", "Eon Productions", "PG­13");
console.log("Movie 1:", movie1);

var movie = [
  (don = { Title: "don", Studio: "Green", Rating: "PG" }),
  (Vikram = { Title: "Vikram", Studio: "Blue", Rating: "PG13" }),
  (RRR = { Title: "RRR", Studio: "Yellow", Rating: "PG" }),
  (Beast = { Title: "Beast", Studio: "Red", Rating: "PG" }),
];

function getPG(mov) {
  var arr = [];
  for (var i = 0; i < mov.length; i++) {
    if (mov[i].Rating == "PG") {
      arr = mov[i].Title + "," + arr;
    }
  }
  return arr.slice(0, -1).split(" ");
}
console.log("Movies with rating 'PG':", getPG(movie));

//2).https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
class Circle {
  constructor(Radius, Color) {
    this.Radius = Radius;
    this.Color = Color;
  }

  getRadius() {
    return this.Radius;
  }

  setRadius(sr) {
    this.Radius = sr;
  }
  getColor() {
    return this.Color;
  }

  setColor(color) {
    this.Color = color;
  }
  getArea() {
    return Math.PI * this.Radius * this.Radius;
  }
  getCircumference() {
    return 2 * Math.PI * this.Radius;
  }
}
console.log(".......Draw Circle......");
const draw = new Circle(5, "Green");
draw.setRadius(4);
console.log("The Radius is:", draw.getRadius());
draw.setColor("pink");
console.log("The Color is:", draw.getColor());
console.log("The area is:", draw.getArea());
console.log("The Circumference is:", draw.getCircumference());

//3).Write a “person” class to hold all the details.

class Person {
  constructor(
    FirstName,
    LastName,
    Age,
    Weight,
    Height,
    Qualification,
    State,
    City,
    Country
  ) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Age = Age;
    this.Weight = Weight;
    this.Height = Height;
    this.Qualification = Qualification;
    this.State = State;
    this.City = City;
    this.Country = Country;
  }
}

const karthik = new Person(
  "Karthik",
  "Raja",
  24,
  "80kg",
  "158cm",
  "B.E(ECE)",
  "TamilNadu",
  "Thoothukudi",
  "India"
);
console.log(".........person with details..........");
console.log(karthik);

//4).write a class to calculate uber price.

class Uber {
  constructor(Name, Place, Co_member) {
    this.Name = Name;
    this.Place = Place;
    this.Co_member = Co_member;

    this.places = ["Temple", "Mall", "Theatre"];
    this.km = [30, 40, 35];
  }
  getPrice(per_km_rate, waiting_charge) {
    var ind = this.places.indexOf(this.Place);
    return `Welcome ${this.Name} your Uber price to ${this.Place} is Rs:${
      this.km[ind] * per_km_rate * waiting_charge * this.Co_member
    }`;
  }
}

const customer1 = new Uber("karthik", "Mall", 2);
const customer2 = new Uber("Raja", "Temple", 1);

console.log(customer1.getPrice(8, 2));
console.log(customer2.getPrice(7, 4));

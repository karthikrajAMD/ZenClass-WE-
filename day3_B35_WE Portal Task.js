// 1).

GivenJSON = '{"name":"John", "age":30, "car":"Wagon R"}';
var JsObj = JSON.parse(GivenJSON);
console.log(JsObj);

console.log("For in Loop...");
for (var k in JsObj) {
  console.log(k, "the value is", JsObj[k]);
}
console.log("For of Loop...");
for (var k1 of Object.keys(JsObj)) {
  console.log(k1, "the value is", JsObj[k1]);
}
console.log("ForEach Loop...");
Object.keys(JsObj).forEach((element) => {
  console.log(element, "the value is", JsObj[element]);
});

console.log("Normal For Loop...");

for (var i = 0; i < 3; i++) {
  const key = Object.keys(JsObj)[i];
  const val = Object.values(JsObj)[i];
  console.log(key, "the value is", val);
}

// 2).

var Resume = {
  Name: "Karthik Raja",

  Qualification: {
    Degree: "B.E ECE",
    CollegeName: "SRIT",
    DegreePercentage: 64,
    Passed_out: 2019,
    HSC: "84%",
    SSLC: "94%",
    SchoolName: "BMC Matric Hr Sec School",
  },

  Tech_Skills: { Languages: "Java,C,C++,HTML", Other: "Photoshop,AfterEffet" },

  Certification: {
    Online: "Javascript,Css",
    Offline: "Java,Photoshop",
  },

  Personal_Info: {
    DoB: "28/04/1998",
    BloodGroup: "B+ve",
    Address: "Thoothukudi",
    Phn: "9600717048",
  },

  Hobbies: "Music,Drawing,Movies",
};
console.log(Resume);
console.log("Convertinmg to JSON Format");

console.log(JSON.stringify(Resume));

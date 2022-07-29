let house1 = document.querySelector("#house1");
let house2 = document.querySelector("#house2");
let house3 = document.querySelector("#house3");
let house4 = document.querySelector("#house4");
let profile = document.querySelector(".profile > div");
let navicon = document.querySelector(".navicon");
let housemembers = document.querySelector("#housemembers");
let all_housemembers = document.querySelector("#housemembers");
let housenamedisp = document.querySelector(".housenamedisp");
let body = document.querySelector(".body");
let un = [];
async function resultdata(housename) {
  profile.setAttribute("style", "display:none");
  body.setAttribute("class", "change");
  housenamedisp.setAttribute("style", "display:visible");
  housenamedisp.innerText = housename;
  let result = await fetch(
    `https://hp-api.herokuapp.com/api/characters/house/${housename}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  console.log(result);
  displaycharacter(result);
}

house1.addEventListener("click", () => {
  resultdata("gryffindor");
});
house2.addEventListener("click", () => {
  resultdata("hufflepuff");
});
house3.addEventListener("click", () => {
  resultdata("ravenclaw");
});
house4.addEventListener("click", () => {
  resultdata("slytherin");
});

navicon.addEventListener("click", () => {
  while (housemembers.hasChildNodes()) {
    housemembers.removeChild(housemembers.firstChild);
  }
  profile.setAttribute("style", "display:visible");
  body.setAttribute("class", "body");
  housenamedisp.setAttribute("style", "display:none");
});

function displaycharacter(r) {
  for (i of r) {
    if (i.image) {
      let divdir = document.createElement("div");
      divdir.setAttribute("class", "divdir col");
      let imagedir = document.createElement("img");
      imagedir.src = i.image;
      let detaildir = document.createElement("div");
      detaildir.setAttribute("class", "detaildir");
      let namedir = document.createElement("h3");
      namedir.innerText = i.name;
      let actordir = document.createElement("h3");
      actordir.innerText = `Actor:${i.actor}`;
      housemembers.append(divdir);
      divdir.append(imagedir, detaildir);
      detaildir.append(namedir, actordir);
    }
  }
}

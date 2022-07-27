let select = document.querySelector("#selectcat");
let mybutton = document.querySelector("#but");
let selectedbrand;
let description = document.querySelector(".description");
let heading2 = document.querySelector(".heading2");
let star = document.querySelector(".star");
let details = document.querySelector(".tabledata");
let callAPI = async () => {
  try {
    let response = await fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": "a51f1e1b-2409-43c0-a622-0af67508abde",
      },
    });
    result = await response.json();
    console.log(result);
    getimage(result);
  } catch (err) {
    err;
  }
};
callAPI();

function getimage(result) {
  for (dat of result) {
    let option = document.createElement("option");
    option.setAttribute("class", "myoption");
    option.innerText = `${dat.name}`;
    select.append(option);
  }
  mybutton.addEventListener("click", () => {
    selectedbrand = select.options[select.selectedIndex].text;

    catprofile(selectedbrand);
  });
}

function catprofile(a) {
  for (i of result) {
    if (i.name == a) {
      let breed_image = document.querySelector("#breedimage");
      breed_image.setAttribute(
        "src",
        `https://cdn2.thecatapi.com/images/${i.reference_image_id}.jpg`
      );
      description.innerText = i.description;
      heading2.innerHTML = i.name;
      details.innerHTML = `
      <tbody>
        <tr>
          <td id="adaptability">Adaptability:</td>
        </tr>
        <tr>
          <td id="dogfriendly">Dog-Friendly:</td>
        </tr>
        <tr>
          <td id="affection">Affection-level:</td>
        </tr>
        <tr>
          <td id="intelligence">Intelligence:</td>
        </tr>
        <tr>
          <td id="shedding">Shedding-Level:</td>
        </tr>
      </tbody>
    `;
    }
  }
  ratingdatas(a);
}
function rating(element, value, variable, data) {
  for (j = 0; j < 5; j++) {
    let spanelement = document.createElement("span");
    spanelement.setAttribute("class", "fa fa-star");
    element.appendChild(spanelement);
    if (j < value) {
      spanelement.classList.add("checked");
    }
    variable.parentElement.appendChild(element);
  }
}
function removePrevious(behaviour) {
  while (behaviour.nextElementSibling) {
    behaviour.nextElementSibling.remove();
  }
}
function ratingdatas(a) {
  for (i of result) {
    if (i.name == a) {
      let behaviour = document.querySelector("#adaptability");
      let value = i.adaptability;
      removePrevious(behaviour);
      let td1 = document.createElement("td");
      td1.setAttribute("class", "stardata");
      rating(td1, value, behaviour, result);

      behaviour = document.querySelector("#dogfriendly");
      value = i.dog_friendly;
      removePrevious(behaviour);
      td1 = document.createElement("td");
      td1.setAttribute("class", "stardata");
      rating(td1, value, behaviour, result);

      behaviour = document.querySelector("#affection");
      value = i.affection_level;
      removePrevious(behaviour);
      td1 = document.createElement("td");
      td1.setAttribute("class", "stardata");
      rating(td1, value, behaviour, result);

      behaviour = document.querySelector("#intelligence");
      value = i.intelligence;
      removePrevious(behaviour);
      td1 = document.createElement("td");
      td1.setAttribute("class", "stardata");
      rating(td1, value, behaviour, result);

      behaviour = document.querySelector("#shedding");
      value = i.shedding_level;
      removePrevious(behaviour);
      td1 = document.createElement("td");
      td1.setAttribute("class", "stardata");
      rating(td1, value, behaviour, result);
    }
  }
}

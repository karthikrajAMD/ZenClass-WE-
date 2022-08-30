const header = document.createElement("div");
header.setAttribute("class", "header");
const brandselect = document.createElement("div");
brandselect.setAttribute("class", "brands");
const title = document.createElement("div");
title.setAttribute("class", "title");
title.innerText = "Makeup Api";
document.body.append(title, brandselect, header);
const product = document.createElement("div");
product.setAttribute("class", "product");
const label = document.createElement("label");
label.setAttribute("for", "brand");
label.innerText = "Choose your Brand";
const select = document.createElement("select");
select.setAttribute("name", "brand");
brandselect.append(label, select);
const opt = document.createElement("option");

opt.innerHTML = "Select Your Brand";
document.body.append(product);
select.append(opt);
const head1 = document.createElement("h1");
head1.setAttribute("class", "head1");
const baseurl = "http://makeup-api.herokuapp.com/api/v1/products.json";

let resultdata;
let selectedbrand;
async function getalldata() {
  await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
    .then((data) => data.json())
    .then((data1) => {
      try {
        resultdata = data1;
        console.log(resultdata);
        let ar = [];
        let uniquebrand = [];
        for (i of resultdata) {
          ar.push(i.brand);
          ar.forEach((c) => {
            if (!uniquebrand.includes(c)) {
              uniquebrand.push(c);
            }
          });
        }
        let j = 5;
        let k = 0;
        let l = 200;
        for (i of uniquebrand) {
          const opt = document.createElement("option");
          if (i != null) {
            opt.innerText = i;
            select.append(opt);
            const brandnamedisplay = document.createElement("div");
            brandnamedisplay.setAttribute("class", "brandnamedisplay");
            brandnamedisplay.innerText = i;
            brandnamedisplay.setAttribute(
              "style",
              `background-color:rgb(${l},${k}, ${j})`
            );
            j += 5;
            l -= 2;

            header.append(brandnamedisplay);
          }
        }
      } catch (err) {
        console.log("error", err);
      }
    });
}
const home = document.createElement("button");
home.innerHTML = "Home";
home.setAttribute("class", "home");
home.setAttribute("style", "display:none");
brandselect.append(home);
const dispall = document.createElement("div");
dispall.setAttribute("class", "productimg");
product.append(dispall);
getalldata();

select.addEventListener("change", () => {
  product.setAttribute("style", "display:visible");
  home.setAttribute("style", "display:visible");
  head1.innerText = "";
  header.setAttribute("style", "display:none");
  selectedbrand = select.options[select.selectedIndex].text;
  select.options[0].disabled = true;
  if (selectedbrand === "Select Your Brand") {
    dispall.innerHTML = "";
  }
  if (select.selectedIndex != 0) {
    head1.innerHTML = `Brand Name: ${selectedbrand}`;

    display(selectedbrand);
    brandselect.append(head1);
  }
});
home.addEventListener("click", () => {
  header.setAttribute("style", "display:visible");
  home.setAttribute("style", "display:none");
  product.setAttribute("style", "display:none");
});
function display(brandname) {
  dispall.innerHTML = "";
  for (i of resultdata) {
    if (i.brand === brandname) {
      try {
        const imglink = "http://makeup-api.herokuapp.com/api/v1/products/";
        const singleproduct = document.createElement("div");
        singleproduct.setAttribute("class", "singleproduct");
        dispall.append(singleproduct);

        const img = document.createElement("div");
        img.setAttribute("class", "productimage");

        img.style.backgroundImage = `url(${i.api_featured_image})`;
        img.setAttribute("data-text", `Description:  ${i.description}`);

        const head2 = document.createElement("h2");
        head2.innerHTML = `Product Name: <span class="aftercolon">${i.name}</span>`;
        const head3 = document.createElement("h2");
        head3.innerHTML = `Price: <span class="aftercolon">${i.price_sign}${i.price}</span>`;
        const head4 = document.createElement("h2");
        head4.setAttribute("class", "descrip");
        head4.innerHTML = `Description: <span class="descrip1">${i.description}</span>`;
        const link = document.createElement("a");
        link.href = `${imglink}${i.id}`;
        link.target = "#";
        link.innerText = "Product Link";

        singleproduct.append(img, head4, head2, head3, link);
      } catch (err) {
        console.log("Error");
      }
    }
  }
}

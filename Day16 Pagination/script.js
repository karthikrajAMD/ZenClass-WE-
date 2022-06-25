const head = document.createElement("h1");
head.innerText = "Pagination";
document.body.append(head);
const division = document.createElement("div");
division.setAttribute("class", "tabledata");
document.body.append(division);
let start = 0;
let end = 10;

const numdiv = document.createElement("div");
document.body.append(numdiv);
numdiv.setAttribute("class", "buttons");

function changePage(num) {
  end = num * 10;
  start = end - 10;
  CreateDataTable(start, end);
}

function CreateDataTable(start, end) {
  division.innerHTML = " ";
  var request = new XMLHttpRequest();
  var url =
    "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";

  request.open("GET", url, true);
  request.send();

  request.onload = function () {
    var data = JSON.parse(this.response);
    const table = document.createElement("table");
    division.append(table);
    const trow = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");

    table.append(trow);
    th1.innerHTML = "Id";
    th2.innerHTML = "Name";
    th3.innerHTML = "Email";
    trow.append(th1, th2, th3);
    for (i = start; i < end; i++) {
      const trow1 = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");

      table.append(trow1);
      td1.innerHTML = data[i].id;
      td2.innerHTML = data[i].name;
      td3.innerHTML = data[i].email;
      trow1.append(td1, td2, td3);
      console.log(td1);
    }
  };
}
CreateDataTable(start, end);

for (j = 1; j <= 10; j++) {
  const anchor = document.createElement("a");
  anchor.innerHTML = j;
  anchor.href = `javascript:changePage(${j})`;
  anchor.setAttribute("class", "button");
  numdiv.append(anchor);
}

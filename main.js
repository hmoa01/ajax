//SELECTORS
let tHead = document.querySelector("thead");
let tBody = document.querySelector("tbody");

//BUTTONS
let planetsBtn = document.querySelector("#planetsBtn");
let teamsBtn = document.querySelector("#teamsBtn");
let dinosaursBtn = document.querySelector("#dinosaursBtn");
let bestNovelsBtn = document.querySelector("#bestNovelsBtn");
let continentsBtn = document.querySelector("#continentsBtn");
let birdsBtn = document.querySelector("#birdsBtn");

//LISTENERS
planetsBtn.addEventListener("click", displayPlanets);
teamsBtn.addEventListener("click", displayAmericanTeams);
dinosaursBtn.addEventListener("click", displayDinosaurs);
bestNovelsBtn.addEventListener("click", displayBestNovels);
continentsBtn.addEventListener("click", displayContinents);
birdsBtn.addEventListener("click", displayBirds);

//GET DATA
let data = api.getData(
  "https://mysafeinfo.com/api/data?list=teamlistus&format=json&case=default"
);
data.then(displayTable);

//FUNCTIONS
displayTable(data);

function displayBirds() {
  data = api.getData(
    "https://mysafeinfo.com/api/data?list=birdsus&format=json&case=default"
  );
  data.then(displayTable);
}

function displayContinents() {
  data = api.getData(
    "https://mysafeinfo.com/api/data?list=continents&format=json&case=default"
  );
  data.then(displayTable);
}

https: function displayBestNovels() {
  data = api.getData(
    "https://mysafeinfo.com/api/data?list=bestnovels&format=json&case=default"
  );
  data.then(displayTable);
}

function displayDinosaurs() {
  data = api.getData(
    "https://mysafeinfo.com/api/data?list=dinosaurs&format=json&case=default"
  );
  data.then(displayTable);
}

function displayAmericanTeams() {
  data = api.getData(
    "https://mysafeinfo.com/api/data?list=teamlistus&format=json&case=default"
  );
  data.then(displayTable);
}

function displayPlanets() {
  data = api.getData(
    "https://mysafeinfo.com/api/data?list=planets&format=json&case=default"
  );
  data.then(displayTable);
}

function displayTable(data) {
  console.log(data);
  let html = `<tr>`;
  let first = data[0];
  for (key in first) {
    html += `<th>${key}</th>`;
  }
  html += `</tr>`;
  tHead.innerHTML = html;
  html = ``;

  data.forEach((el) => {
    html += `<tr>`;
    for (prop in el) {
      html += `<td>${el[prop]}</td>`;
    }
    html += `</tr>`;
    tBody.innerHTML = html;
  });
  return data;
}

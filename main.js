let tHead = document.querySelector("thead");
let tBody = document.querySelector("tbody");

let data = api.getData(
  "https://mysafeinfo.com/api/data?list=teamlistus&format=json&case=default"
);

data.then(displayCards);

displayCards(data);

function displayCards(data) {
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
}

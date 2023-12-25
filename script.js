const apiUrl = "https://suitmedia-backend.suitdev.com/api/ideas";
var ideaData = [];

async function fetchData(url) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data;
}

async function dataTable() {
  await ideaList();
  console.log(ideaData);

  document.getElementById("ag-format-container").innerHTML = ideaData
    .map(
      (data) => `        <div class="ag-courses_box">
<div class="ag-courses_item">
  <a href="#" class="ag-courses-item_link">
    <div class="ag-courses-item_bg"></div>

    <div id="ag-courses-item_title">
    ${data.title}
    </div>

    <div class="ag-courses-item_date-box">
      <span class="ag-courses-item_date"> ${data.published_at} </span>
    </div>
  </a>
</div>
</div>`
    )
    .join("");
}
dataTable();

async function ideaList() {
  const data = await fetchData(apiUrl);
  ideaData = data.data;
}

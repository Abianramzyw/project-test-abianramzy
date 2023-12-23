const apiUrl = "https://suitmedia-backend.suitdev.com/api/ideas";

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

async function ideaList() {
  const data = await fetchData(apiUrl);
  console.log(data);
}

ideaList();
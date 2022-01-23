const API_KEY = 'pCsSK5xf66HbDodAxpxAVG0yFcAjyp3cDx0JT6OxvGo';

export async function fetchPicsApi(filter = 'cat', page = 1) {
  const api = await fetch(
    `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${filter}&page=${page}&per_page=9`
  )
    .then(response => response.json())
    .then(console.log)
    .catch(alert);
  return api;
}

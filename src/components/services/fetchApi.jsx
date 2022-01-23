const API_KEY = 'pCsSK5xf66HbDodAxpxAVG0yFcAjyp3cDx0JT6OxvGo';

export async function fetchPicsApi(filter, page) {
  const api = await fetch(
    `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${filter}&page=${page}&orientation=landscape&per_page=9`
  )
    .then(response => response.json())
    .then(data =>
      data.results.map(result => {
        return {
          id: result.id,
          url: result.urls.regular,
          description: result.description,
        };
      })
    )
    .catch(alert);
  return api;
}

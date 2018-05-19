const fetchData = (url, config) => {
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.error(`Error with ${ url }`, err)
    });
};

export { fetchData };
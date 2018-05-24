const fetchData = (url, config) => {
  return fetch(url)
    .then(response => {
      const data = response.json();
      return data;
    })
    .catch(err => {
      console.error(`Error with ${ url }`, err)
    });
};

export { fetchData };
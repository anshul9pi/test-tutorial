const fetcher = {};

const baseUrl = `${process.env.REACT_APP_API_BASE_URL}categories`;

const fetchAllCategories = (callback) => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((responseJson) => {
      if (callback) {
        callback(null, responseJson);
      } else {
        return responseJson;
      }
    });
}

fetcher.all = fetchAllCategories;
export default fetcher;

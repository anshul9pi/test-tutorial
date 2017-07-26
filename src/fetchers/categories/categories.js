const fetcher = {};

const baseUrl = 'http://128.199.175.165:8080/testheromanagement-1.0/v2/categories';

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

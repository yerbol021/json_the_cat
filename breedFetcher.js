const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(`Request failed: ${error}`, null);
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback('Breed not found', null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };

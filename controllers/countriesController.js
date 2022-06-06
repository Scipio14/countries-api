const countries = require("../apis/countries.json");

const getCountries = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};
  results.items = countries.length;
  if (endIndex < countries.length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }
  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  results.totalPages = Math.ceil(countries.length / limit);

  results.results = countries.slice(startIndex, endIndex);
  // console.log(results.results[0].name_common);
  res.status(200).json(results);
};

const getCountry = (req, res) => {
  const id = parseInt(req.params.id);
  const results = countries.filter((country) => country.id === id);
  res.json(results);
};

const getCountriesPage = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};
  results.items = countries.length;
  if (endIndex < countries.length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }
  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  results.totalPages = Math.ceil(countries.length / limit);
  allCountries = results.results = countries.slice(startIndex, endIndex);
  // console.log(results.results[0].name_common);
  // console.log(allCountries);
  res.render("countries", { title: "Countries", allCountries, results });
};

module.exports = { getCountries, getCountry, getCountriesPage };

const express = require("express");
const router = express.Router();
const {
  getCountries,
  getCountry,
} = require("../controllers/countriesController");

router.get("/", getCountries);
router.get("/:id", getCountry);

module.exports = router;

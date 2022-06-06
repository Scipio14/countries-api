const express = require("express");
const path = require("path");
const app = express();
const countriesRouter = require("./routes/countries.js");
const { getCountriesPage } = require("./controllers/countriesController");
const cors = require("cors");
const ejs = require("ejs");

app.set("port", process.env.PORT || 5000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/countries", countriesRouter);

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/countries", getCountriesPage);

app.get("*", (req, res) => {
  res.render("404", { title: "404" });
});

module.exports = app;

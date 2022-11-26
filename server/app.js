const express = require("express");
// const path = require("path");
const app = express();
const countriesRouter = require("./routes/countries.js");
const cors = require("cors");
const {logger} = require('./middleware/logEvents')


app.set("port", process.env.PORT || 5000);

app.use(logger)
app.use(cors());
app.use(express.json());

app.use("/api/countries", countriesRouter);

app.get("*", (req, res) => {
  res.status(404).json({msg:"Page not Found"});
});

module.exports = app;

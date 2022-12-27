const express = require("express");
const app = express();

const as = app.get("/", (require, response) => {
  response.send("Home Page");
});

const asa = app.get("/about", (require, response) => {
  response.send("About Page");
});

module.exports = as;
module.exports = asa;

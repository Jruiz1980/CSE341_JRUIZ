const routes = require("express").Router();

routes.get("/", (rep, res, next) => {
  res.json("Awesome");
});

module.exports = routes;
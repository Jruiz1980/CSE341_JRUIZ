const routes = require("express").Router();
const controller = require("../controllers");

routes.get("/", controller.wife);
routes.get("/love", controller.mother)

module.exports = routes;
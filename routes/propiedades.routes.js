var express = require("express");
var app = express();

// Controllers
var PropController = require("../controllers/propiedades.controller");

// Middlewares
var mdAuth = require("../middlewares/auth.middleware");

// Rutas en /user
app.get("/", PropController.getProps);
app.get("/:id", PropController.getProp);
app.post("/", [mdAuth.verificaToken, mdAuth.canUpdate], PropController.createProp);
app.put('/:id', [mdAuth.verificaToken, mdAuth.canUpdate], PropController.updateProp); //put o patch
app.delete('/:id', [mdAuth.verificaToken, mdAuth.canUpdate], PropController.deleteProp);
module.exports = app;

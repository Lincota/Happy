//importar dependencias
const express = require("express");
const path = require("path");
const pages = require("./pages");
//iniciando o express
const server = express();

//criar rotas
server
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))

  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

//ligar server //ctrl + j
server.listen(5500);

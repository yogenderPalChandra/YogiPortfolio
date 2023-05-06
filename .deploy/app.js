// Full Documentation - https://docs.turbo360.co
const vertex = require("vertex360")({ site_id: process.env.TURBO_APP_ID });
// const http = require("http");
const express = require("express");
var mustacheExpress = require("mustache-express");
const app = express(); // initialize app

app.engine("mustache", mustacheExpress());

app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

/*  Apps are configured with settings as shown in the conig object below.
    Options include setting views directory, static assets directory,
    and database settings. Default config settings can be seen here:
    https://docs.turbo360.co */

const config = {
  views: "views", // Set views directory
  static: "public", // Set static assets directory
  logging: true,

  /*  Tgito use the Turbo 360 CMS, from the terminal run
      $ turbo extend cms
      then uncomment line 21 below: */

  // db: vertex.nedb()
};

const main = require("./routes/main");
// antthing after "/" will be forwared to the route sin main.js
app.use("/", main);

module.exports = app;

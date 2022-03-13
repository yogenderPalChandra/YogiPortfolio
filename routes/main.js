const express = require("express");
const { route } = require("../app");
const router = express.Router();

// get handler for home paege ('/')of express router which takes
// request response and next argument
router.get("/", (req, res, next) => {
  const data = req.context;
  res.render("home", data);
});
router.get("/blog", (req, res, next) => {
  const data = req.context;
  res.render("blog", data);
});

router.get("/RaspberryPi", (req, res, next) => {
  const data = req.context;
  res.render("RaspberryPi", data);
});

router.get("/covid19", (req, res, next) => {
  const data = req.context;
  res.render("covid", data);
});

router.get("/flask", (req, res, next) => {
  const data = req.context;
  res.render("flask", data);
});

router.get("/dl", (req, res, next) => {
  const data = req.context;
  res.render("dl", data);
});

router.get("/blog1", (req, res, next) => {
  const data = req.context;
  res.render("blog1", data);
});

router.get("/re", (req, res, next) => {
  const data = req.context;
  res.render("renewableEnergy", data);
});

router.get("/eb", (req, res, next) => {
  const data = req.context;
  res.render("energyBuildings", data);
});

router.get("/se", (req, res, next) => {
  const data = req.context;
  res.render("solarEnergy", data);
});

router.get("/huggingface", (req, res, next) => {
  const data = req.context;
  res.render("huggingface", data);
});
router.get("/awsdeploy", (req, res, next) => {
  const data = req.context;
  res.render("awsdeploy", data);
});
module.exports = router;

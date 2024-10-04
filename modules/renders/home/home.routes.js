const { Router } = require("express");
const { homeController } = require("./home.controller");

const router = Router();

router.get("/", homeController.render.bind(homeController));

module.exports = { router };

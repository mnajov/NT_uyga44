const { Router } = require("express");
const { homeController } = require("./home.controller");
const { mw } = require("../../md/md");

const router = Router();

router.get("/",mw.token.bind(mw), homeController.render.bind(homeController));

module.exports = { router };

const { Router } = require("express");
const {carController} = require("../../car/controller");
const { mw } = require("../../md/md");

const routerCar = Router();

routerCar.get("/",mw.token.bind(mw), carController.getCars.bind(carController));

module.exports = { routerCar };

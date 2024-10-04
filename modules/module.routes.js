const { Router } = require("express");
const authRoutes = require("./auth/auth.routes");
const { routerCar } = require("./renders/car/car.routes");

const router = Router();

router.use("/auth", authRoutes.router);
router.use("/car", routerCar);

module.exports = { router };

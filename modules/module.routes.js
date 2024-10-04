const { Router } = require("express");
const authRoutes = require("./auth/auth.routes");

const router = Router();

router.use("/auth", authRoutes.router);

module.exports = { router };

// main routes is to link the routes with the js scripts
const express = require("express");
const router = express.Router();

//const userRoutes = require("./userRoutes");
const inventoryRoutes = require("./inventoryRoutes");

//router.use("/user", userRoutes);
router.use("/inventory", inventoryRoutes);

module.exports = router;
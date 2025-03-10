// this acts like a router to route the directory
const express = require("express");
const router = express.Router();

const controller = require("../controllers/inventoryController");
router.get("/", controller.getAllInventory);
router.get("/:id", controller.getInventoryByID);

module.exports = router;
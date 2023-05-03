// this is a controller to show the resonse for each route directory

module.exports.getAllInventory = function (req, res, next) {
    res.send("Get All Inventory");
}

module.exports.getInventoryByID = function (req, res, next) {
    res.send("getInventoryByID");
} 
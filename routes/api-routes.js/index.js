const router = require("express").Router();
const calendarRoutes = require("./calendar");

// Book routes
router.use("/", calendarRoutes);

module.exports = router;
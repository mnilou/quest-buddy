const router = require("express").Router();
const calendarRoutes = require("./calendar");

// Book routes
router.use("/calendar", calendarRoutes);

module.exports = router;
const router = require("express").Router();
const sessionController = require("../../controllers/sessionController");

router
  .route("/session")
  .get(sessionController.findAll)
  .post(sessionController.create);

router
  .route("/session/:id")
  .get(sessionController.findById)
  .put(sessionController.update)
  .delete(sessionController.remove);

module.exports = router;
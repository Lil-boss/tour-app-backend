const tourController = require("../controller/tour.controller");

const router = require("express").Router();

router
  .route("/tours")
  .get(tourController.getPackage)
  .post(tourController.CreatePackage);

module.exports = router;

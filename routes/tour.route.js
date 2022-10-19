const tourController = require("../controller/tour.controller");

const router = require("express").Router();

router
  .route("/tours")
  .get(tourController.getPackage)
  .post(tourController.CreatePackage);

router.route("/tours/:id").get(tourController.getDetails);

router.route("/tour/:id").patch(tourController.UpdatePackage);

module.exports = router;

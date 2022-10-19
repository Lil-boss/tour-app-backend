const tourController = require("../controller/tour.controller");

const router = require("express").Router();

router
  .route("/tours")
  .get(tourController.getTour)
  .post(tourController.CreateTour);

router.route("/tours/:id").get(tourController.tourDetails);

router.route("/tour/:id").patch(tourController.UpdateTour);

router.route("/tour/trending").get(tourController.getToursTrending);

module.exports = router;

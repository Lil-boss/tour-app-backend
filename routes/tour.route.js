const router = require("express").Router();
const tourController = require("../controller/tour.controller");

router
  .route("/tours")
  .get(tourController.getTour)
  .post(tourController.CreateTour);

router.route("/tours/:id").get(tourController.tourDetails);

router.route("/tour/:id").patch(tourController.UpdateTour);

router.route("/tour/cheapest").get(tourController.getCheapestTour);
router.route("/tour/trending").get(tourController.getTrendingTour);

module.exports = router;

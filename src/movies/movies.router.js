const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

//list of movies router
router.route("/").get(controller.list).all(methodNotAllowed);

//movieId router
router.route("/:movieId").get(controller.read).all(methodNotAllowed);

//list of theaters movieId is playing in router
router
  .route("/:movieId/theaters")
  .get(controller.listMovieInTheaters)
  .all(methodNotAllowed);

//list of reviews for movieId router
router
  .route("/:movieId/reviews")
  .get(controller.listMovieReviews)
  .all(methodNotAllowed);

module.exports = router;

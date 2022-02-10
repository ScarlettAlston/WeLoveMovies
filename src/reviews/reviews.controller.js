const service = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

//updated review method handler
async function update(req, res) {
  const { reviewId } = req.params;
  const result = await service.update(req.body.data, reviewId);

  res.status(200).json({ data: result });
}

//review exists middleware
async function reviewExists(req, res, next) {
  const { reviewId } = req.params;
  const review = await service.read(reviewId);
  if (review) {
    res.locals.review = review;
    return next();
  }
  return next({ status: 404, message: `Review cannot be found.` });
}

//delete review method handler
async function destroy(req, res) {
  const { reviewId } = req.params;
  await service.destroy(reviewId);
  res.sendStatus(204);
}

module.exports = {
  update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)],
};

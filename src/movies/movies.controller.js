const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

//movie exists middleware
async function movieExists(req, res, next) {
  const { movieId } = req.params;
  const movie = await service.read(movieId);
  if (movie) {
    res.locals.movieId = movieId
    console.log(res.locals.movieId)
    res.locals.movie = movie;
    return next();
  }
  return next({ status: 404, message: `Movie cannot be found.` });
}

//list movies from database
async function list(req, res) {
  if (req.query.is_showing === "true") {
    return res.json({ data: await service.listShowing() });
  }
  res.json({ data: await service.list() });
}

//read movie result that matches movieId
async function read(req, res, next) {
  res.status(200).json({ data: res.locals.movie });
}

//list of theaters movie is playing in
async function listMovieInTheaters(req, res) {
  const { movieId } = req.params;
  const movieTheater = await service.listMovieInTheaters(movieId);
  res.json({ data: movieTheater });
}

//list of movie reviews
async function listMovieReviews(req, res) {
  const { movieId } = req.params;
  const data = await service.listMovieReviews(movieId);
  res.status(200).json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
  listMovieInTheaters: asyncErrorBoundary(listMovieInTheaters),
  listMovieReviews: [asyncErrorBoundary(movieExists), asyncErrorBoundary(listMovieReviews)],
};

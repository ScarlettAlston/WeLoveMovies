if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();

//variables that define router files
const moviesRouter = require("./movies/movie.router");
const reviewsRouter = require("./reviews/reviews.router");
const theatersRouter = require("./theaters/theaters.router");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

app.use(express.json());

//router paths
app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);

//error paths
app.use(notFound);
app.use(errorHandler);

module.exports = app;

const knex = require("../db/connection");

const tableName = "movies";

const mapProperties = require("../utils/map-properties");

//use lodash to nest critics object
const addCategory = mapProperties({
  critic_id: "critic.critic_id",
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
  created_at: "critic.created_at",
  updated_at: "critic.updated_at",
});

//return list of all movies in database
function list() {
  return knex(tableName).select("*");
}

//list of movies that are showing
function listShowing() {
  return knex("movies as m")
    .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
    .where({ is_showing: true })
    .select("m.*")
    .groupBy("m.movie_id");
}

//return movie id that matches movie id paramter in url
function read(movieId) {
  return knex(tableName).select("*").where({ movie_id: movieId }).first();
}

//list movies that are in theaters
function listMovieInTheaters(movie_id) {
  return knex("theaters as t")
    .join("movies_theaters as mt", "mt.theater_id", "t.theater_id")
    .where({ movie_id })
    .select("t.*", "mt.is_showing", "mt.movie_id");
}

//list of reviews for movies
function listMovieReviews(movie_id) {
  return knex("reviews as r")
    .join("critics as c", "c.critic_id", "r.critic_id")
    .where({ movie_id })
    .select("*")
    .then((criticInfo) => criticInfo.map(addCategory));
}

module.exports = {
  read,
  list,
  listMovieInTheaters,
  listMovieReviews,
  listShowing,
};

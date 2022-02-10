const knex = require("../db/connection");
const tableName = "reviews";
const mapProperties = require("../utils/map-properties");

//use lodash to nest critics object
const addCategory = mapProperties({
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
});

async function update(updatedReview, review_id) {
  await knex(tableName)
    .select("*")
    .where({ review_id })
    .update(updatedReview, "*");
  return knex("reviews as r")
    .join("critics as c", "c.critic_id", "r.critic_id")
    .where({ review_id })
    .select("*")
    .first()
    .then(addCategory);
}

function read(review_id) {
  return knex(tableName).select("*").where({ review_id }).first();
}

//delete review by ID
function destroy(review_id) {
  return knex(tableName).where({review_id}).del();
}

module.exports = {
  update,
  destroy,
  read,
};

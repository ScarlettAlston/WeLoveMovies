const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//list method function
async function list(req, res, next) {
  const data = await service.list();
  res.status(200).json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};

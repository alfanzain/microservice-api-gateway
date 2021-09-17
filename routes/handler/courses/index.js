const create = require('./create');
const get = require('./get');
const getAll = require('./getAll');
const update = require('./update');
const destroy = require('./destroy');

const createImages = require('./images/create');
const destroyImages = require('./images/destroy');

const createReviews = require('./reviews/create');
const destroyReviews = require('./reviews/destroy');
const updateReviews = require('./reviews/update');

module.exports = {
  create,
  get,
  getAll,
  update,
  destroy,
  createImages,
  destroyImages,
  createReviews,
  destroyReviews,
  updateReviews,
}
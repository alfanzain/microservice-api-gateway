const express = require('express');
const router = express.Router();

const coursesHandler = require('./handler/courses');

router.get('/', coursesHandler.getAll);
router.get('/:id', coursesHandler.get);
router.post('/', coursesHandler.create);
router.put('/:id', coursesHandler.update);
router.delete('/:id', coursesHandler.destroy);

router.post('/images', coursesHandler.createImages);
router.delete('/images/:id', coursesHandler.destroyImages);

router.post('/reviews', coursesHandler.createReviews);
router.delete('/reviews/:id', coursesHandler.destroyReviews);
router.put('/reviews/:id', coursesHandler.updateReviews);

module.exports = router;

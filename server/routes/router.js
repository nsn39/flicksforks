const express = require('express');

const controllers = require('../controllers/controllers');

const router = express.Router();

router.post('/movie', controllers.addMovie);
router.get('/movies', controllers.getMovies);
router.delete('/movie/:id', controllers.deleteMovie);

module.exports = router;
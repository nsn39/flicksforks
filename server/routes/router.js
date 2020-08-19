const express = require('express');

const controllers = require('../controllers/controllers');

const router = express.Router();

router.post('/movie', controllers.addMovie);
router.get('/movies', controllers.getMovies);
router.delete('/movie/:id', controllers.deleteMovie);

router.post('/watched', controllers.addToWatched);
router.get('/watched', controllers.getWatched);
router.delete('/watched/:id', controllers.deleteFromWatched);

router.post('/favorites', controllers.addToFavorites);
router.get('/favorites', controllers.getFavorites);
router.delete('/favorites/:id', controllers.deleteFavorites);

module.exports = router;
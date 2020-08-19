const MovieModel = require('./../models/myforks');

const addMovie = (req, res) => {
    const movieData = req.body;

    if (!movieData) {
        return res.status(400).json({
            success: false,
            error: "No movie Data provided."
        });
    }

    const movie = new MovieModel(movieData);

    if (!movie) {
        return res.status(400).json({
            success: false,
            error: err,       
        });
    }

    movie.save()
    .then(() => {
        return res.status(201).json({
            sucess: true,
            id: movie._id,
            message: "Movie created",
        })
    })
    .catch(err => {
        return res.staus(400).json({
            err,
            message: "Movie not created"
        })
    })
};

const getMovies = async (req, res) => {
    await MovieModel.find({}, (err, movies) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        if (!movies.length) {
            return res.status(404).json({
                success: false,
                error: "Movies not found"
            })
        }
        return res.status(200).json({
            success: true,
            data: movies
        })
    }).catch(err => console.log(err))
};

const deleteMovie = async(req, res) => {
    await MovieModel.findOneAndDelete({_id: req.params.id}, (err, movie) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }

        if (!movie) {
            return res.status(404).json({success: false, message: `${req.params.id} No such movie`})
        }

        return res.status(200).json({
            success: true,
            deletedData: movie
        })
    }).catch(err => console.log(err))
};

module.exports =  {
    addMovie, 
    deleteMovie,
    getMovies
}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* const MyFork = new Schema({
    Title: {type:String, required:true},
    Director: {type:String, required:true},
    Writer: {type:String, required:true},
    Genre: {type:String, required:true},
    Year: {type:String, required:true},
    Runtime: {type:String, required:true},
    Plot: {type:String, required:true},
    Rating: {type:String, required:true},
    Votes: {type:String, required:true},
    Actors: {type:String, required:true},
    Awards: {type:String, required:true},
    Languages: {type:String, required:true},
    Runtime: {type:String, required:true},
    Rated: {type:String, required:true},
    Produced: {type:String, required:true},
    Boxoffice: {type:String, required:true},
}); */

const MyFork = new Schema({
    Title:{type:String, required:true},
    Year : {type:String, required:true},
    Rated:{type:String, required:true},
    Released:{type:String, required:true},
    Runtime:{type:String, required:true},
    Genre:{type:String, required:true},
    Director:{type:String, required:true},
    Writer:{type:String, required:true},
    Actors:{type:String, required:true},
    Plot:{type:String, required:true},
    Language:{type:String, required:true},
    Country:{type:String, required:true},
    Awards:{type:String, required:true},
    Poster:{type:String, required:true},
    Ratings:{type:Array, required:true},
    Metascore:{type:String, required:true},
    imdbRating:{type:String, required:true},
    imdbVotes:{type:String, required:true},
    imdbID:{type:String, required:true},
    Type:{type:String, required:true},
    DVD:{type:String, required:true},
    BoxOffice:{type:String, required:true},
    Production:{type:String, required:true},
    Website:{type:String, required:true},
    Response:{type:String, required:true}
})

// module.exports = mongoose.model('myforks', MyFork);

module.exports = {
    "MovieModel" : mongoose.model('myforks', MyFork),
    "WatchedModel": mongoose.model('watched', MyFork),
    "FavoritesModel": mongoose.model('favorites', MyFork),
};
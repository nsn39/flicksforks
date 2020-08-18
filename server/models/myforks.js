const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MyFork = new Schema({
    Title: {type:String, required:true},
    Director: {type:String, required:true},
    /* Writer: {type:String, required:true},
    Genre: {type:String, required:true},
    Year: {type:String, required:true},
    Runtime: {type:String, required:true},
    Plot: {type:String, required:true},
    Rating: {type:String, required:true},
    Votes: {type:String, required:true},
    Actors: {type:String, required:true},
    Awards: {type:String, required:true},
    Languages: {type:String, required:true}, */
});

module.exports = mongoose.model('myforks', MyFork);
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import './movie.css'

function Movie(props) {
    const searchName = props.match.params.name.substr(1);

    const [movieJSONData, setMovieData] = useState({});
    
    // Fetching data from the OMDb API from search text
    const fetchOMDbAPI = async () => {
        console.log(searchName);
        const API_KEY = "d4455ef8";

        const reqURL = `https://omdbapi.com/?apikey=${API_KEY}&t=${searchName}`;

        const response = await axios(reqURL);

        // console.log('Response body: ' , response.data);
        // console.log('We are assigning the value');
        setMovieData(response.data);
        // console.log('Poster assigned again: ', movieJSONData);
    };

    // Saving the JSON Data to our Database.
    const forkMovie = async () => {
        console.log("Movie Forked");

        const response = await fetch('/api/movie', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(movieJSONData)
        })

        console.log(response);
    };

    useEffect(() => {
        fetchOMDbAPI();
    });

    return (
        <div className="movies">
            <div className="movies__title">
                <h1>{searchName}</h1>
            </div>

            <div className="movies__detail">
                <div className="movies__detail__poster">
                    <img src={movieJSONData.Poster}/>
                </div>

                <div className="movies__detail__facts">
                    <ul>
                        <li>Director: {movieJSONData.Director}</li>
                        <li>Writer: {movieJSONData.Writer}</li>
                        <li>Genre: {movieJSONData.Genre}</li>
                        <li>Rated: {movieJSONData.Rated}</li>
                        <li>Year: {movieJSONData.Year}</li>
                        <li>Runtime: {movieJSONData.Runtime}</li>
                    </ul>
                    <Button className="forkButton" onClick={forkMovie} variant="contained">
                        <p className="forkButton__text">FORK IT!</p>
                    </Button>
                </div>
            </div>

            <div className="movies__plot">
                <h2>Plot:</h2>
                <h4>{movieJSONData.Plot}</h4>
            </div>

            <div className="movies__extra__info">
                <div className="movies__extra__info__numbers">
                    <div>
                        <h5>Ratings:</h5>
                        <ul>
                            <h5>IMDb Rating: {movieJSONData.imdbRating}</h5>
                            <h5>Total Votes: {movieJSONData.imdbVotes}</h5>
                        </ul>
                    </div>
                    
                    <div>
                        <h4>Boxoffice Collection:</h4>
                        <h6>{movieJSONData.BoxOffice}</h6>
                    </div>
                    
                </div>

                <div className="movies__extra__info__rem">
                    <h4>Actors:</h4>
                    <h5>{movieJSONData.Actors}</h5>

                    <h4>Awards:</h4>
                    <h5>{movieJSONData.Awards}</h5>

                    <h4>Produced by:</h4>
                    <h6>{movieJSONData.Production}</h6>

                    <h4>Languges Available:</h4>
                <h6>{movieJSONData.Language}</h6>
                </div>
            </div>
        </div>
    )
}

export default Movie

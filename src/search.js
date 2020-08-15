import React, { useState, useEffect }  from 'react';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import './search.css';
import axios from 'axios';

function Search(props) {
    const [input, setInput] = useState("");

    const [redirectSearch, setRedirectSearch] = useState("/movies/:name");
    

    //Fetching data from the OMDb API from search text
    const searchText = props.match.params.name;

    const fetchOMDbAPI = async () => {
        console.log(searchText);
        const API_KEY = "d4455ef8";

        const reqURL = `https://omdbapi.com/?apikey=${API_KEY}&t=${searchText}`;

        const response = await axios(reqURL);

        console.log('Response body: ' , response.data);

    };

    const fetchNewsAPI = async () => {
        console.log(searchText);
        const API_KEY = "c513f006b5b14498a96033f41cc2b056";

        const reqURL = `https://newsapi.org/v2/everything?q=${searchText} movie&apiKey=${API_KEY}`;

        const response = await axios(reqURL);

        console.log('Response body: ' , response.data);
    };

    const fetchReviewsAPI = async () => {
        const API_KEY = "oFW5YXqNWR3za073yHRN3CI4zi6iAN5o";
        console.log('Search text is: ', searchText);
        const reqURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchText.substr(1)}&api-key=${API_KEY}`;
        //const reqURL =  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" + searchText.substr(1) +"&api-key=" + API_KEY;
        const response = await axios (reqURL);

        console.log('Response body:', response.data.results);
    };

    useEffect(() => {
        console.log(input);
        fetchOMDbAPI();
        fetchNewsAPI();
        fetchReviewsAPI();
    }, [input]);

    return (
        <div>
            <div className="search">
                    <div className="home__search">
                    <TextField 
                        id="filled-basic"
                        label="Enter a movie."
                        variant="outlined"
                        type="text"
                        className="home__search__textfield"
                        onChange={(e) => {
                            setInput(e.target.value)
                            setRedirectSearch(`/search/:${e.target.value}`)
                        }}
                    />

                    <Button className="home__search__button">
                        <Link to={redirectSearch} >
                            <SearchIcon className="icon" />
                        </Link>
                    </Button>

                </div>
                
                <div className="search__results">
                    <div className="search__movie">
                        <h3 className="title">Movies</h3>
                    </div>

                    <div className="search__news">
                        <h3 className="title">News</h3>
                    </div>

                    <div className="search__reviews">
                        <h3 className="title">Reviews</h3>
                    </div>
                </div>
                

                <h4>You searched for {props.match.params.name}</h4>


            </div>
        </div>
    )
}

export default Search

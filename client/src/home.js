import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search'
import './home.css'
import jsonData from './frontend_json/trending.json';
import Poster from './components/Poster';


function Home() {
    const [input, setInput] = useState("");

    const trendingJSONData = jsonData;

    const [redirectSearch, setRedirectSearch] = useState("/movies/:name");
    useEffect(() => {
        console.log(input);
        console.log(trendingJSONData);
    }, [input]);


    return (
        <div className="home">

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
            

            <div className="home__trending">

                <h4 className="home__trending__header">Trending</h4>
                
                <div className="home__trending__list">
                    {
                        trendingJSONData.map((movie) => (
                            <Poster jsonData={movie} />
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Home

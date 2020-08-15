import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search'
import './home.css'

function Home() {
    const [input, setInput] = useState("");

    const [redirectSearch, setRedirectSearch] = useState("/movies/:name");
    useEffect(() => {
        console.log(input);
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
                    <Link to="/movies/inception">Inception</Link>
                    <Link to="/movies/interstellar">Interstellar</Link>
                    <Link to="/movies/vendetta">Vendetta</Link>
                    <Link to="/movies/bicyclethieves">BicycleThieves</Link>
                </div>
            </div>
            
            <div className="home__news">

                <h4 className="home__news__header">News</h4>
                
                <div className="home__news__list">
                    <Link to="/movies/inception">Inception</Link>
                    <Link to="/movies/interstellar">Interstellar</Link>
                    <Link to="/movies/vendetta">Vendetta</Link>
                    <Link to="/movies/bicyclethieves">BicycleThieves</Link>
                </div>
            </div>
        </div>
    )
}

export default Home

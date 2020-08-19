import React from 'react';
import Poster from './Poster';
import './WatchedPiece.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import axios from 'axios';

function WatchedPiece(props) {
    const jsonData = props.jsonData

    const deleteFromDB = async () => {
        const response = await fetch(`/api/watched/${jsonData._id}`, {
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
        console.log(response);

        const newMyForksData = await axios('/api/watched');
        props.refreshHandler(newMyForksData.data.data);
    }

    const moveToFavorites = async () => {
        await fetch(`/api/watched/${jsonData._id}`, {
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        });

        const response = await fetch('/api/favorites', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        });

        console.log(response);
        
        const newMyForksData = await axios('/api/watched');
        props.refreshHandler(newMyForksData.data.data);
    };  

    return (
        <div className="watchedpiece">
            <Poster jsonData={jsonData} />
            <div className="watchedpiece__option">
                <Button onClick={deleteFromDB} variant="contained" color="secondary"><Link to="/myforks">REMOVE</Link></Button>
                <Button onClick={moveToFavorites} varaint="contained" color="secondary"><FavoriteRoundedIcon></FavoriteRoundedIcon></Button>
            </div>
        </div>
    )
}

export default WatchedPiece

import React from 'react';
import Poster from './Poster';
import './FavoritesPiece.css';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import axios from 'axios';

function FavoritesPiece(props) {
    const jsonData = props.jsonData

    const deleteFromDB = async () => {
        const response = await fetch(`/api/favorites/${jsonData._id}`, {
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
        console.log(response);

        const newMyForksData = await axios('/api/favorites');
        props.refreshHandler(newMyForksData.data.data);
    }

    return (
        <div className="favoritespiece">
            <Poster jsonData={jsonData} />
            <div className="favoritespiece__option">
                <Button onClick={deleteFromDB} variant="contained" color="secondary"><FavoriteBorderIcon></FavoriteBorderIcon></Button>
            </div>
        </div>
    )
}

export default FavoritesPiece

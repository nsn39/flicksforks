import React from 'react';
import Poster from './Poster';
import './MyforkPiece.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function MyforkPiece(props) {
    const jsonData = props.jsonData

    const deleteFromDB = async () => {
        const response = await fetch(`/api/movie/${jsonData._id}`, {
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
        console.log(response);

        const newMyForksData = await axios('/api/movies');
        props.refreshHandler(newMyForksData.data.data);
    }

    return (
        <div className="myforkpiece">
            <Poster jsonData={jsonData} />

            <Button onClick={deleteFromDB} variant="contained" color="secondary"><Link to="/myforks">UNFORK</Link></Button>
        </div>
    )
}

export default MyforkPiece

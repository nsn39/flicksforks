import React from 'react';
import Poster from './Poster';
import './MyforkPiece.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
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

    const moveToWatch = async () => {
        await fetch(`/api/movie/${jsonData._id}`, {
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        });

        const response = await fetch('/api/watched', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        });

        console.log(response);
        
        const newMyForksData = await axios('/api/movies');
        props.refreshHandler(newMyForksData.data.data);
    };  

    return (
        <div className="myforkpiece">
            <Poster jsonData={jsonData} />
            <div className="myforkpiece__option">
                <Button onClick={deleteFromDB}  className="click_button" variant="contained">
                    <p className="myforkpiece__option__unfork">UNFORK</p>
                </Button>
                <Button onClick={moveToWatch} className="myforkpiece__option__button" varaint="contained" ><CheckCircleIcon></CheckCircleIcon></Button>
            </div>
        </div>
    )
}

export default MyforkPiece

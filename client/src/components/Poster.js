import React, {useState, useEffect} from 'react';
import './Poster.css';
import { Link } from 'react-router-dom';

function Poster(props) {
    const jsonData = props.jsonData;
    const title = jsonData.Title;
    const detailsPageURL = `/movies/:${title}`;
    
    useEffect(() => {

        console.log("Poster received", jsonData);
    });
    return (
        <div className="poster">
            <div className="poster__img">
                <Link to={detailsPageURL}>
                    <img src={jsonData.Poster} />
                </Link>     
            </div>
        </div>
    )
}

export default Poster

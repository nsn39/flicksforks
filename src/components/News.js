import React from 'react'
import { Link } from 'react-router-dom';
import {useEffect} from 'react';
import './News.css'

function News(props) {
    const jsonData = props.jsonData;

    useEffect(() => {
        console.log('News data received', jsonData);
    });
    
    return (
        <div className="news">
            <img src={jsonData.urlToImage}></img>
            <div className="news__details">
                <Link to={jsonData.url}>
                    <h2>{jsonData.title}</h2>
                </Link>
                <p>{jsonData.author}</p>
            </div>
        </div>
    )
}

export default News

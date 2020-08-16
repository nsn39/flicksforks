import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './News.css';

function Review(props) {
    const jsonData = props.jsonData;

    useEffect(() => {
        console.log('Review data received', jsonData);
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

export default Review

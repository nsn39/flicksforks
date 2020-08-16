import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './News.css';

function Review(props) {
    const jsonData = props.jsonData;

    const imageURL = (jsonData.multimedia != null) ? jsonData.multimedia.src : './../../public/review.jpg';
    useEffect(() => {
        console.log('Review data received', jsonData);
    });

    return (
        <div className="news">
            <img src={imageURL}></img>
            <div className="news__details">
                <Link to={jsonData.link.url}>
                    <h2>{jsonData.display_title}</h2>
                </Link>
                <p>{jsonData.byline}</p>
            </div>
        </div>
    )
}

export default Review

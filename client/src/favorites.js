import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './favorites.css';
import FavoritesPiece from './components/FavoritesPiece';

function Favorites() {
    const [favoritesJSON, setJSON] = useState([]);

    const getFavorites = async () => {
        const responseJSON = await axios('/api/favorites');

        setJSON(responseJSON.data.data);
        console.log("Response: ", responseJSON.data.data);
    };

    useEffect(() => {
        console.log("Watched Component mounted");

        getFavorites();
    }, []);

    return (
        <div className="favorites">
            <h3 className="favorites__header">Your Favorites</h3>

            <div className="favorites__items">
                {
                   favoritesJSON.map((movie) => (
                        <FavoritesPiece jsonData={movie} className="grid-item" refreshHandler={setJSON}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Favorites;
